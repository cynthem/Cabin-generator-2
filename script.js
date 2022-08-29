const dateBtn = document.querySelector('.date-choices');
const dateCard = document.querySelector('.choose-date');
const dateOverlay = document.querySelector('.overlay-choose-date');
const regionBtn = document.querySelector('.region-choices');
const regionCard = document.querySelector('.choose-region');
const regionOverlay = document.querySelector('.overlay-choose-region');
const resetBtn = document.querySelector('.reset');
const results = document.querySelector('.results');
const embeds = document.querySelectorAll('.airbnb-embed-frame');

let chosenDate;
let chosenRegion;

dateBtn.addEventListener('submit', e => {
    e.preventDefault();
    dateCard.classList.toggle('choose-date-open');
    dateOverlay.classList.toggle('overlay-date-invisible');
    regionCard.classList.toggle('choose-region-open');
    regionOverlay.classList.toggle('overlay-region-invisible');
    chosenDate = document.querySelector('[name="date-radio"]:checked').value;
});

regionBtn.addEventListener('submit', e => {
    e.preventDefault();
    regionCard.classList.toggle('choose-region-open');
    regionOverlay.classList.toggle('overlay-region-invisible');
    chosenRegion = document.querySelector('[name="region-radio"]:checked').value;
    filterResults(chosenRegion, chosenDate);
    window.setTimeout(() => {
        results.classList.add('fade-in');
        results.style.display = 'flex';
    }, 300);
    window.setTimeout(() => {results.classList.remove('fade-in')}, 1000);
});

resetBtn.addEventListener('click', e => {
    results.classList.add('fade-out');
    window.setTimeout(() => {
        results.style.display = 'none';
        results.classList.remove('fade-out');
        dateCard.classList.toggle('choose-date-open');
        dateOverlay.classList.toggle('overlay-date-invisible');
    }, 1000);
});

function filterResults(region, date) {
    if (region === 'olympic') {
        renderOlympic(date);
    } else if (region === 'northwest') {
        renderNorthwest(date);
    } else {
        renderSoutheast(date);
    }
}

function renderOlympic(date) {
    if (date === 'oct14') {
        embeds.forEach(embed => {
            if (embed.classList.contains('olympic') && embed.classList.contains('oct14')) {
                embed.classList.add('show');
            }
        })

    }
}

function renderNorthwest(date) {}

function renderSoutheast(date) {}