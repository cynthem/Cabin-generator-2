const dateBtn = document.querySelector('.date-choices');
const dateCard = document.querySelector('.choose-date');
const dateOverlay = document.querySelector('.overlay-choose-date');
const regionBtn = document.querySelector('.region-choices');
const regionCard = document.querySelector('.choose-region');
const regionOverlay = document.querySelector('.overlay-choose-region');

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
});

