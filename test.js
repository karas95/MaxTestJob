let model = document.querySelector('.model');
model.hidden = true;

let registr = document.querySelector('.check-in');
registr.addEventListener('click',reg);

function reg() {
    model.hidden = false;
    
}

let x = document.querySelector('.model-button__closeBlock');
x.addEventListener('click',close);

function close() {
    model.hidden = true;
}

let boardFive = document.querySelector('.foto-block');
let windowOpen = document.querySelector('.window-open');
windowOpen.addEventListener('click', up)

function up() {
    boardFive.style.height= '100%';
    windowOpen.innerHTML = 'Скрыть изображение'
    windowOpen.removeEventListener('click', up);
    windowOpen.addEventListener('click',down);
}

function down() {
    boardFive.style.height='200px';
    windowOpen.innerHTML = 'Показать все фотографии'
    windowOpen.removeEventListener('click', down);
    windowOpen.addEventListener('click',up);
}


    