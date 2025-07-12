// Este é um Service Worker muito simples.
// Sua principal função aqui é existir, o que é um dos requisitos
// para que um site seja considerado um PWA (Progressive Web App) instalável.

self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalado');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Ativado');
});

self.addEventListener('fetch', (event) => {
  // Não estamos fazendo cache de nada por enquanto,
  // apenas interceptando as requisições para cumprir o requisito de PWA.
  // O comportamento padrão é deixar a requisição passar para a rede.
});
