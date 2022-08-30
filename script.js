const searchBtn = document.querySelector('.search');
const topBtn = document.querySelector('.top');
const startCard = document.querySelector('.choose-start');
const startOverlay = document.querySelector('.overlay-choose-start');
const nextBtn = document.querySelector('.next');
const topResults = document.querySelector('.top-results');
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

searchBtn.addEventListener('click', () => {
    startCard.classList.toggle('choose-start-open');
    startOverlay.classList.toggle('overlay-start-invisible');
    dateCard.classList.toggle('choose-date-open');
    dateOverlay.classList.toggle('overlay-date-invisible');
});

topBtn.addEventListener('click', () => {
    startCard.classList.toggle('choose-start-open');
    startOverlay.classList.toggle('overlay-start-invisible');
    window.setTimeout(() => {
        topResults.classList.add('fade-in');
        topResults.classList.remove('hide');
    }, 300);
    window.setTimeout(() => {topResults.classList.remove('fade-in')}, 1000);
});

nextBtn.addEventListener('click', () => {
    topResults.classList.add('fade-out');
    window.setTimeout(() => {
        topResults.classList.add('hide');
        topResults.classList.remove('fade-out');
        dateCard.classList.toggle('choose-date-open');
        dateOverlay.classList.toggle('overlay-date-invisible');
    }, 1000);
});

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

resetBtn.addEventListener('click', () => {
    results.classList.add('fade-out');
    window.setTimeout(() => {
        results.style.display = 'none';
        results.classList.remove('fade-out');
        startCard.classList.toggle('choose-start-open');
        startOverlay.classList.toggle('overlay-start-invisible');
        resetResults();
    }, 1000);
});

function resetResults() {
    embeds.forEach(embed => {
        if (!embed.classList.contains('hide')) {
            embed.classList.add('hide');
        }
    })
    chosenDate = '';
    chosenRegion = '';
}

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
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'oct21') {
        embeds.forEach(embed => {
            if (embed.classList.contains('olympic') && embed.classList.contains('oct21')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'oct28') {
        embeds.forEach(embed => {
            if (embed.classList.contains('olympic') && embed.classList.contains('oct28')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov4') {
        embeds.forEach(embed => {
            if (embed.classList.contains('olympic') && embed.classList.contains('nov4')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov11') {
        embeds.forEach(embed => {
            if (embed.classList.contains('olympic') && embed.classList.contains('nov11')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov18') {
        embeds.forEach(embed => {
            if (embed.classList.contains('olympic') && embed.classList.contains('nov18')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov25') {
        embeds.forEach(embed => {
            if (embed.classList.contains('olympic') && embed.classList.contains('nov25')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'dec9') {
        embeds.forEach(embed => {
            if (embed.classList.contains('olympic') && embed.classList.contains('dec9')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'dec16') {
        embeds.forEach(embed => {
            if (embed.classList.contains('olympic') && embed.classList.contains('dec16')) {
                embed.classList.remove('hide');
            }
        });
    }
}

function renderNorthwest(date) {
    if (date === 'oct14') {
        embeds.forEach(embed => {
            if (embed.classList.contains('northwest') && embed.classList.contains('oct14')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'oct21') {
        embeds.forEach(embed => {
            if (embed.classList.contains('northwest') && embed.classList.contains('oct21')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'oct28') {
        embeds.forEach(embed => {
            if (embed.classList.contains('northwest') && embed.classList.contains('oct28')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov4') {
        embeds.forEach(embed => {
            if (embed.classList.contains('northwest') && embed.classList.contains('nov4')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov11') {
        embeds.forEach(embed => {
            if (embed.classList.contains('northwest') && embed.classList.contains('nov11')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov18') {
        embeds.forEach(embed => {
            if (embed.classList.contains('northwest') && embed.classList.contains('nov18')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov25') {
        embeds.forEach(embed => {
            if (embed.classList.contains('northwest') && embed.classList.contains('nov25')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'dec9') {
        embeds.forEach(embed => {
            if (embed.classList.contains('northwest') && embed.classList.contains('dec9')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'dec16') {
        embeds.forEach(embed => {
            if (embed.classList.contains('northwest') && embed.classList.contains('dec16')) {
                embed.classList.remove('hide');
            }
        });
    }
}

function renderSoutheast(date) {
    if (date === 'oct14') {
        embeds.forEach(embed => {
            if (embed.classList.contains('southeast') && embed.classList.contains('oct14')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'oct21') {
        embeds.forEach(embed => {
            if (embed.classList.contains('southeast') && embed.classList.contains('oct21')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'oct28') {
        embeds.forEach(embed => {
            if (embed.classList.contains('southeast') && embed.classList.contains('oct28')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov4') {
        embeds.forEach(embed => {
            if (embed.classList.contains('southeast') && embed.classList.contains('nov4')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov11') {
        embeds.forEach(embed => {
            if (embed.classList.contains('southeast') && embed.classList.contains('nov11')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov18') {
        embeds.forEach(embed => {
            if (embed.classList.contains('southeast') && embed.classList.contains('nov18')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'nov25') {
        embeds.forEach(embed => {
            if (embed.classList.contains('southeast') && embed.classList.contains('nov25')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'dec9') {
        embeds.forEach(embed => {
            if (embed.classList.contains('southeast') && embed.classList.contains('dec9')) {
                embed.classList.remove('hide');
            }
        });
    } else if (date === 'dec16') {
        embeds.forEach(embed => {
            if (embed.classList.contains('southeast') && embed.classList.contains('dec16')) {
                embed.classList.remove('hide');
            }
        });
    }
}

(function () {
    const resize = () => {
        for (let embed of embeds) {
            let scale = (window.innerWidth - 15) / embed.offsetWidth;
            embed.style.transform = 'scale(' + scale + ')';
            console.log(window.innerWidth)
        }
    }
    window.onload = () => resize();
    window.onresize = () => resize();
})();