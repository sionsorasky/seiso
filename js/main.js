// スクロール時にアニメーションを表示
const contents = document.querySelectorAll('.content');
window.addEventListener('scroll', () => {
  contents.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// ニュース検索機能
const searchInput = document.getElementById('searchInput');
const newsItems = document.getElementById('newsList').getElementsByTagName('li');

searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();
  for (let item of newsItems) {
    item.style.display = item.textContent.toLowerCase().includes(filter) ? '' : 'none';
  }
});
