import './style.css';
import Icon from './images/background.jpg';
import { loadPage } from './initialPageLoad.js';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

loadPage();
addNavEvents();

function addNavEvents() {
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');

    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadContact);
}