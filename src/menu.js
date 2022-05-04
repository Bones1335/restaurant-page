function setBtnActive(id) {
    const activeBtn = document.querySelector('.active');
    if (activeBtn) activeBtn.classList.remove('active');

    const hmnBtn = document.getElementById(id);
    hmnBtn.classList.add('active');
}

function loadMenu() {
    const main = document.querySelector('main');
        main.classList.add('menu');
        main.classList.remove('contactMe');
        main.classList.remove('welcome');
        main.textContent = '';

    console.log('Menu working???');
    setBtnActive('menu');
}

export default loadMenu;