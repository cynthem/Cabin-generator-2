const dateBtn = document.querySelector('.date-choices');
const dateCard = document.querySelector('.choose-date');
const dateOverlay = document.querySelector('.overlay-choose-date');

dateBtn.addEventListener('submit', e => {
    e.preventDefault();
    dateCard.classList.toggle('choose-date-open');
    dateOverlay.classList.toggle('overlay-date-invisible');
});