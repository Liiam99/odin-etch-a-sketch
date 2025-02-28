(() => {
    const gridDiv = document.querySelector('.grid');
    const gridFragment = document.createDocumentFragment();

    for (let row = 0; row < 16; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let col = 0; col < 16; col++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square');

            squareDiv.addEventListener('mouseover', changeSquareColor);

            rowDiv.appendChild(squareDiv);
        }

        gridFragment.appendChild(rowDiv);
    }

    gridDiv.appendChild(gridFragment);
})();


function changeSquareColor(e) {
    const squareDiv = e.target;
    squareDiv.style.backgroundColor = 'black';
}
