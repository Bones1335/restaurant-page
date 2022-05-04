import { loadPage } from "./initialPageLoad";

function setBtnActive(id) {
    const activeBtn = document.querySelector('.active');
    if (activeBtn) activeBtn.classList.remove('active');

    const hmnBtn = document.getElementById(id);
    hmnBtn.classList.add('active');
}

function loadHome() {
    const main = document.querySelector('main');
        main.classList.add('welcome');
        main.classList.remove('contactMe');
        main.classList.remove('menu');
        main.textContent = '';

    console.log('Home working???');
    setBtnActive('home');
}

export default loadHome;