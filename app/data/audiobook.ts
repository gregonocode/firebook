// app/data/audiobook.ts

export interface Audiobook {
  id: string;              // slug amigável pra URL: /audiobook/...
  title: string;
  author: string;
  youtubeId: string;       // só o ID do vídeo
  coverUrl: string;        // capa bonita (Unsplash/Pexels ou similar)
  description?: string;    // opcional, pode usar depois
  durationSeconds?: number; // estimada em segundos (pra barra de progresso)
}


export const audiobooks: Audiobook[] = [
 {
  id: "cinquenta-tons-de-cinza-pelos-olhos-de-gray",
  title: "Cinquenta Tons de Cinza (Pelos Olhos de Gray)",
  author: "E.L. James",
  youtubeId: "Qqxrj9oZXaQ",
  coverUrl: "https://m.media-amazon.com/images/I/51QhnBxvR3L._AC_UF1000,1000_QL80_.jpg",
  description: "Classico da literatura erótica, narrado do ponto de vista do enigmático Christian Grey.",
  durationSeconds: 24000, // ~6 horas e 40 minutos (estimativa)
},
  {
    id: "a-sutil-arte-de-ligar-o-fda-se",
    title: "A Sutil Arte de Ligar o Fda-se",
    author: "Mark Manson",
    youtubeId: "k7moUWjb2Hk",
    coverUrl: "https://m.media-amazon.com/images/I/6175IU0qFgL.jpg",
    description: "Guia prático para viver uma vida mais autêntica e menos preocupada com as opiniões alheias.",
    durationSeconds: 16994, // ~8 horas (estimativa comum)
  },
  {
    id: "a-paciente-silenciosa",
    title: "A Paciente Silenciosa",
    author: "Alex Michaelides",
    youtubeId: "1kVlVxeuMj4",
    coverUrl: "https://http2.mlstatic.com/D_Q_NP_715813-MLU72521937448_102023-O.webp",
    description: "Thriller psicológico sobre uma mulher que para de falar após um crime chocante, e o psicoterapeuta obcecado em descobrir a verdade.",
    durationSeconds:  33261, // ~9 horas e 15 minutos (estimativa)
  },
  {
    id: "Em-Rota-de-Colisao",
    title: "Em Rota de Colisão",
    author: "Andy Weir",
    youtubeId: "q3jG5I-cO04",
    coverUrl: "https://livrariascuritiba.vteximg.com.br/arquivos/ids/2181016-1000-1000/LV518230.jpg?v=638521423087700000",
    description: "Um romance de ciência ficção sobre um astronauta preso em uma missão crítica.",
    durationSeconds: 43105, // ~12 horas (estimativa)
  },
   {
    id: "nunca-minta",
    title: "Nunca Minta",
    author: "freida mcFadden",
    youtubeId: "fl4j5YSRKYw",
    coverUrl: "https://m.media-amazon.com/images/I/81-Hk3onFyL.jpg",
    description: "é um thriller psicológico viciante que mistura suspense, mistério e segredos obscuros",
    durationSeconds: 23000, // ~6 horas 21 minutos (estimativa)
  },
  {
    id: "a-empregada",
    title: "A Empregada",
    author: "freida mcFadden",
    youtubeId: "3wpcKpVCF_A",
    coverUrl: "https://m.media-amazon.com/images/I/81BdpMhm3iL.jpg",
    description: "é um thriller psicológico viciante que mistura suspense, mistério e segredos obscuros",
    durationSeconds: 28380, // ~7 horas 53 minutos (estimativa)
  },
  {
    id: "e-Assim-que-Acaba",
    title: "É Assim que Acaba",
    author: "Colleen Hoover.",
    youtubeId: "uyKdMP5tT30",
    coverUrl: "https://static.oskeelo.com.br/300/450/100/1074+9788501113498.jpg",
    description: "é um thriller psicológico viciante que mistura suspense, mistério e segredos obscuros",
    durationSeconds: 38400, // ~10 horas 46 minutos (estimativa)
  },
   {
    id: "Roubando-Sienna",
    title: "Roubando Sienna",
    author: "Carmen Black.",
    youtubeId: "Y0NXSXKFKZI",
    coverUrl: "https://m.media-amazon.com/images/I/81kMbb4jBtL._UF1000,1000_QL80_.jpg",
    description: "é um thriller psicológico viciante que mistura suspense, mistério e segredos obscuros",
    durationSeconds: 28980, // ~8 horas 3 minutos (estimativa)
  },
  {
    id: "antes-que-o-cafe-esfrie",
    title: "Antes que o Café Esfrie",
    author: "Toshikazu Kawaguchi",
    youtubeId: "vem4NlIMt0s",
    coverUrl: "https://m.media-amazon.com/images/I/819T58VnbdL._UF1000,1000_QL80_.jpg",
    description: "é um thriller psicológico viciante que mistura suspense, mistério e segredos obscuros",
    durationSeconds: 23185, // ~6 horas 26 minutos (estimativa)
  },
  {
    id: "o-poder-do-habito",
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    youtubeId: "tv0XwWQilZM",
    coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfVRtVShdQHtp4iT0q1_UZV2Iqcj7sO5sYeA&s",
    description: "porque fazermos o que fazemos, e como podemos mudar para melhor",
    durationSeconds: 41220, // ~6 horas 26 minutos (estimativa)
  },
  {
    id: "habitos-atomicos",
    title: "Hábitos Atômicos",
    author: "James Clear",
    youtubeId: "weEfuDO06RA",
    coverUrl: "https://m.media-amazon.com/images/I/81eT2pjx4jL.jpg",
    description: "porque fazermos o que fazemos, e como podemos mudar para melhor",
    durationSeconds: 21840, // ~6 horas 26 minutos (estimativa)
  },
  {
    id: "o-ego-e-seu-inimigo",
    title: "O Ego e seu Inimigo",
    author: "Ryan Holiday",
    youtubeId: "z_LrY50KUh4",
    coverUrl: "https://bibliotecamundial.com.br/imagens/capas/o-ego-e-seu-inimigo-pdf-B07576VT41.webp",
    description: "porque fazermos o que fazemos, e como podemos mudar para melhor",
    durationSeconds: 23760, // ~6 horas 26 minutos (estimativa)
  },
   {
    id: "a-unica-coisa",
    title: "A Única Coisa",
    author: "Timothy Ferriss",
    youtubeId: "8_8hh19uDDk",
    coverUrl: "https://m.media-amazon.com/images/I/71E6vzs501L._AC_UF1000,1000_QL80_.jpg",
    description: "porque fazermos o que fazemos, e como podemos mudar para melhor",
    durationSeconds: 23760, // ~6 horas 26 minutos (estimativa)
  },
];