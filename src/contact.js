function setBtnActive(id) {
    const activeBtn = document.querySelector('.active');
    if (activeBtn) activeBtn.classList.remove('active');

    const hmnBtn = document.getElementById(id);
    hmnBtn.classList.add('active');
}

function loadContact() {
    const main = document.querySelector('main');
        main.classList.add('contactMe');
        main.classList.remove('welcome');
        main.classList.remove('menu');
        main.textContent = '';

    console.log('Contact working???');
    setBtnActive('contact');
}

export default loadContact;