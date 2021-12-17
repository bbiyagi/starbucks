const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    // 속성이름, 속성
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    // 속성이름, 속성
    searchInputEl.setAttribute('placeholder', '');
});

// copyright this-year
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021 