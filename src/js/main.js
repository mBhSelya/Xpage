const selectHeader = document.querySelector('.news__select-header');
const selectItems = document.querySelectorAll('.news__select-item');
const selectBody = document.querySelector('.news__select-body');
const selectValue = document.querySelector('.news__select-current');

function toggleSelect() {
    selectBody.classList.toggle('news__select-body_active');
}

function toggleValueActive(item) {
    selectItems.forEach(item => {
        item.classList.remove('news__select-item_active');
    })
    item.classList.add('news__select-item_active');
}

function selectChoose(event) {
    let text = event.target.textContent;
    selectValue.textContent = text;
    toggleValueActive(event.target)
    toggleSelect();
}

selectItems.forEach(item => {
    item.addEventListener('click', selectChoose);
})

selectHeader.addEventListener('click', toggleSelect);

import AirDatepicker from "air-datepicker";

new AirDatepicker('#el');