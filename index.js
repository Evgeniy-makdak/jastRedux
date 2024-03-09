let store = 0;

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');

function addCounter() {
    addBtn.addEventListener('click', () => {
        store++
        console.log(store);
    })
}

addCounter()

function subCounter() {
    subBtn.addEventListener('click', () => {
        store--
        console.log(store);
    })
}

subCounter()