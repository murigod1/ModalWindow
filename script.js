'use strict';

const btnsShowModal = document.querySelectorAll('.show-modal');
const hiddenBox = document.querySelector('.hidden');
const boxOverlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const xModal = document.querySelector('.close-modal');

const openModal = function(){
    console.log('button clicked');
    modal.classList.remove('hidden');
    boxOverlay.classList.remove('hidden');
}
const closeModel = function(){
    modal.classList.add('hidden');
    boxOverlay.classList.add('hidden');
}

for (let i = 0; i < btnsShowModal.length; i++)
btnsShowModal[i].addEventListener('click', openModal)

xModal.addEventListener('click', closeModel)

boxOverlay.addEventListener('click', closeModel)

document.addEventListener('keydown', function(e){
    console.log(e.key)
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModel();
        }
    })
