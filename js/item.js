const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const quantify = document.querySelector('#quantify');

add.addEventListener('click', () => quantify.value = Number(quantify.value) + 1);
subtract.addEventListener('click', () => {
    if( quantify.value > 0){
        quantify.value = Number(quantify.value) - 1;
    }
});
