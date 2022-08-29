const dateBtn = document.querySelector('.date-choices');
const dateCard = document.querySelector('.choose-date');
const dateOverlay = document.querySelector('.overlay-choose-date');
const regionBtn = document.querySelector('.region-choices');
const regionCard = document.querySelector('.choose-region');
const regionOverlay = document.querySelector('.overlay-choose-region');
const resetBtn = document.querySelector('.reset');
const resultsCard = document.querySelector('.results');

dateBtn.addEventListener('submit', e => {
    e.preventDefault();
    dateCard.classList.toggle('choose-date-open');
    dateOverlay.classList.toggle('overlay-date-invisible');
    regionCard.classList.toggle('choose-region-open');
    regionOverlay.classList.toggle('overlay-region-invisible');
});

regionBtn.addEventListener('submit', e => {
    e.preventDefault();
    regionCard.classList.toggle('choose-region-open');
    regionOverlay.classList.toggle('overlay-region-invisible');
    window.setTimeout(() => {
        resultsCard.classList.add('fade-in');
        resultsCard.style.display = 'flex';
    }, 300);
    window.setTimeout(() => {resultsCard.classList.remove('fade-in')}, 1000);
});

resetBtn.addEventListener('click', e => {
    resultsCard.classList.add('fade-out');
    window.setTimeout(() => {
        resultsCard.style.display = 'none';
        resultsCard.classList.remove('fade-out');
        dateCard.classList.toggle('choose-date-open');
        dateOverlay.classList.toggle('overlay-date-invisible');
    }, 1000);
});

