// app/page.tsx
import Link from 'next/link';
import { audiobooks } from '@/app/data/audiobook';

type HomeProps = {
  searchParams?: Promise<{
    page?: string;
  }>;
};

const ITEMS_PER_PAGE = 7;

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, Number(params?.page) || 1);

  const totalItems = audiobooks.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const paginatedAudiobooks = audiobooks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-stone-100 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen shadow-sm relative">
        {/* Cabeçalho fixo */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-rose-50 px-6 pt-12 pb-4">
          <h1 className="text-2xl font-semibold text-rose-950 tracking-tight">
            Sua Biblioteca
          </h1>
          <p className="text-sm text-stone-500 mt-1">
            Histórias para mulheres incríveis 💕
          </p>
        </div>

        {/* Lista de audiobooks */}
        <div className="px-4 py-6 flex flex-col gap-4">
          {paginatedAudiobooks.map((book) => (
            <Link
              key={book.id}
              href={`/audiobook/${book.id}`}
              className="flex items-center p-4 rounded-2xl bg-white hover:bg-rose-50/50 active:scale-[0.98] transition-all duration-200 border border-rose-100/50 hover:border-rose-200 shadow-sm"
            >
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-20 h-20 object-cover rounded-xl shadow-md shrink-0"
              />

              <div className="ml-4 flex-1 overflow-hidden">
                <h2 className="text-base font-medium text-stone-800 truncate leading-tight">
                  {book.title}
                </h2>
                <p className="text-sm text-rose-700 mt-1 truncate">
                  {book.author}
                </p>
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-100 text-rose-700 ml-3 shrink-0 shadow-sm">
                <svg
                  className="w-5 h-5 translate-x-[2px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </Link>
          ))}

          {/* Empty state */}
          {audiobooks.length === 0 && (
            <div className="text-center mt-20 px-6">
              <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📖</span>
              </div>
              <p className="text-stone-600 text-base font-medium">
                Nenhum audiobook por enquanto...
              </p>
              <p className="text-stone-500 text-sm mt-2">
                Adicione mais no arquivo data/audiobook.ts!
              </p>
            </div>
          )}

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-4">
              <Link
                href={`/?page=${safePage - 1}`}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                  safePage === 1
                    ? 'pointer-events-none opacity-40 border-stone-200 text-stone-400'
                    : 'border-rose-200 text-rose-700 hover:bg-rose-50'
                }`}
              >
                Anterior
              </Link>

              <span className="text-sm text-stone-500">
                Página {safePage} de {totalPages}
              </span>

              <Link
                href={`/?page=${safePage + 1}`}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                  safePage === totalPages
                    ? 'pointer-events-none opacity-40 border-stone-200 text-stone-400'
                    : 'border-rose-200 text-rose-700 hover:bg-rose-50'
                }`}
              >
                Próxima
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
