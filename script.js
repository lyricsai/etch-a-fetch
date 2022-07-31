const grid = document.querySelector('#grid');
const btn__new_grid = document.querySelector('#btn__new_grid');
const root = document.documentElement;

let matrixSize;
if(!matrixSize) matrixSize = 16;

const createSquare = (container) => {
    const div = document.createElement('div');
    div.classList.add('grid__square');
    container.appendChild(div);
};

const createContainer = () => {

    const container = document.createElement('div');
    container.classList.add('grid__container');


    for(let i = 0; i < matrixSize; i++) {
        createSquare(container);
    }

    grid.appendChild(container);
};

const createGrid = () => {

    for(let i = 0; i < matrixSize; i++) {
        createContainer();
    }
};

btn__new_grid.addEventListener('click', () => {
    matrixSize = +document.querySelector('#input__new_grid').value;
    root.style.setProperty('--matrixSize', matrixSize);
    grid.innerHTML = '';
    createGrid();
    changingColors();
});

const randomColoring = () => Math.floor(Math.random() * 255);

const changingColors = () => {
    [...document.querySelectorAll('.grid__square')].forEach(element => {
        element.addEventListener('mouseover', () => {
            if(getComputedStyle(element).backgroundColor === 'rgb(95, 158, 160)') {
                element.style.backgroundColor = `rgba(${randomColoring()}, ${randomColoring()}, ${randomColoring()})`;
            } else {
                element.style.backgroundColor = 'rgb(95, 158, 160)';
            }
        });
    });
};

createGrid();
changingColors();