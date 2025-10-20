// ===== スクロールアニメーション =====
const contents = document.querySelectorAll('.content');
window.addEventListener('scroll', () => {
  contents.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// ===== 全体検索 =====
const globalSearch = document.getElementById('globalSearch');
globalSearch.addEventListener('keyup', () => {
  const keyword = globalSearch.value.toLowerCase();
  document.querySelectorAll('body *:not(script):not(style)').forEach(el => {
    if (el.textContent && el.textContent.trim().length > 0) {
      el.style.display = el.textContent.toLowerCase().includes(keyword) || keyword === ''
        ? ''
        : 'none';
    }
  });
});

// ===== モバイルメニュー =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('#nav-menu ul');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
