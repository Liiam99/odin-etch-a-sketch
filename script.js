(() => {
    drawGrid(16);

    const dimChangeBtn = document.querySelector('.dim-change');
    dimChangeBtn.addEventListener('click', changeDimensions);
})();


function drawGrid(dim) {
    const gridDiv = document.querySelector('.grid');
    const gridFragment = document.createDocumentFragment();

    for (let row = 0; row < dim; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let col = 0; col < dim; col++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square');

            squareDiv.addEventListener('mouseover', changeSquareColour,
                                       {once: true});

            rowDiv.appendChild(squareDiv);
        }

        gridFragment.appendChild(rowDiv);
    }

    gridDiv.appendChild(gridFragment);
}


function changeSquareColour(e) {
    const squareDiv = e.target;
    const randomColour = getRandomColour();

    squareDiv.style.backgroundColor = randomColour;
}


function changeDimensions() {
    let new_dim = prompt('How many squares per side would you like? (100 max.)');

    if (new_dim > 100) {
        new_dim = 100;
    }

    const gridDiv = document.querySelector('.grid');
    gridDiv.innerHTML = '';
    drawGrid(new_dim);
}


function getRandomColour() {
    const RGB_MAX = 256;
    const r = Math.floor(Math.random() * RGB_MAX);
    const g = Math.floor(Math.random() * RGB_MAX);
    const b = Math.floor(Math.random() * RGB_MAX);
    const rgb = `rgb(${r}, ${g}, ${b})`;

    return rgb;
}
