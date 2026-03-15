// app/audiobook/[id]/page.tsx
'use client';

import { useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import type ReactPlayerType from 'react-player';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowLeft,
  SkipForward,
} from 'lucide-react';
import { audiobooks } from '@/app/data/audiobook';

const ReactPlayer = dynamic(
  () => import('react-player').then((mod) => mod.default),
  { ssr: false }
) as unknown as typeof ReactPlayerType;

export default function AudiobookPlayer() {
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const book = useMemo(() => {
    return audiobooks.find((b) => b.id === id);
  }, [id]);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [seeking, setSeeking] = useState(false);

  const playerRef = useRef<any>(null);
  const sliderRef = useRef<HTMLInputElement | null>(null);

  const formatTime = (seconds: number) => {
    const safe = Math.max(0, Math.floor(seconds));
    const hours = Math.floor(safe / 3600);
    const mins = Math.floor((safe % 3600) / 60);
    const secs = safe % 60;

    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')}`;
    }

    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!id) return null;

  if (!book) {
    return (
      <main className="min-h-screen bg-stone-100 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-sm border border-rose-100 p-8 text-center">
          <h1 className="text-xl font-semibold text-rose-950">
            Audiobook não encontrado
          </h1>
          <p className="text-stone-500 mt-2">
            Verifique se o ID existe no arquivo <code>app/data/audiobook.ts</code>.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center mt-6 rounded-2xl bg-rose-600 px-5 py-3 text-white font-medium hover:bg-rose-700 transition"
          >
            Voltar para a biblioteca
          </Link>
        </div>
      </main>
    );
  }

  const totalDuration = book.durationSeconds ?? 3600;

  const handleTimeUpdate = () => {
    if (seeking) return;

    const current =
      typeof playerRef.current?.currentTime === 'number'
        ? playerRef.current.currentTime
        : 0;

    setProgress(current);
  };

  const handleSeekStart = () => {
    setSeeking(true);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  const handleSeekEnd = () => {
    const newTime = Number(sliderRef.current?.value ?? 0);

    if (playerRef.current) {
      if (typeof playerRef.current.seekTo === 'function') {
        playerRef.current.seekTo(newTime, 'seconds');
      } else if ('currentTime' in playerRef.current) {
        playerRef.current.currentTime = newTime;
      }
    }

    setProgress(newTime);
    setSeeking(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50 flex flex-col">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-rose-100 px-4 py-4 flex items-center">
        <Link
          href="/"
          className="p-2 -ml-2 text-rose-700 hover:text-rose-900 transition"
        >
          <ArrowLeft size={24} />
        </Link>

        <div className="ml-3 flex-1 min-w-0">
          <h1 className="text-lg font-semibold text-rose-950 truncate">
            {book.title}
          </h1>
          <p className="text-sm text-rose-700/80 truncate">{book.author}</p>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="relative mb-10">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-3xl shadow-2xl shadow-rose-200/40 ring-1 ring-rose-100"
          />
        </div>

        <div className="flex items-center justify-center gap-12 mb-12 w-full max-w-xs">
          <button
            type="button"
            onClick={() => setMuted((v) => !v)}
            className="text-rose-600 hover:text-rose-800 transition p-3"
          >
            {muted ? <VolumeX size={28} /> : <Volume2 size={28} />}
          </button>

          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            className="bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-xl shadow-rose-300/40 transition active:scale-95"
          >
            {playing ? (
              <Pause size={40} />
            ) : (
              <Play size={40} fill="white" className="ml-1.5" />
            )}
          </button>

          <button
            type="button"
            className="text-rose-600 hover:text-rose-800 transition p-3 opacity-70"
          >
            <SkipForward size={28} />
          </button>
        </div>

        <div className="w-full max-w-md mb-3">
          <input
            ref={sliderRef}
            type="range"
            min={0}
            max={totalDuration}
            value={Math.min(progress, totalDuration)}
            onPointerDown={handleSeekStart}
            onChange={handleSeekChange}
            onPointerUp={handleSeekEnd}
            step={1}
            className="w-full h-2 bg-rose-100 rounded-full appearance-none cursor-pointer accent-rose-600"
          />
        </div>

        <div className="w-full max-w-md flex justify-between text-sm text-rose-700/80 mb-8">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(totalDuration)}</span>
        </div>
      </div>

      <div className="fixed left-0 top-0 w-0 h-0 overflow-hidden opacity-0 pointer-events-none">
        <ReactPlayer
          ref={playerRef}
          src={`https://www.youtube.com/watch?v=${book.youtubeId}`}
          playing={playing}
          muted={muted}
          controls={false}
          playsInline
          width="0"
          height="0"
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
    </main>
  );
}
