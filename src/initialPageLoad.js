const content = document.querySelector('#content');

/*  create header and append to content div
        create h1 and append to header
        create nav with class nav-bar and append to header
            create ul/li with corresponding classes
    create welcome div and append to contetn div
        create h2 and append to welcome div
        create p with text and append to welcome div
    create footer and append to content div
        create ul/li with corresponding classes and append to footer
*/

function createHeader() {
    const header = document.createElement('header');
    
    const h1Header = document.createElement('h1');
        h1Header.textContent = "My Restaturant";
    
    content.appendChild(header);
    header.appendChild(h1Header);
}

function createNavBar() {
    const navBar = document.createElement('nav');
        navBar.classList.add('nav-bar');
    const ul = document.createElement('ul');
    
    navBar.appendChild(ul);

    const liHome = document.createElement('li');
        liHome.classList.add('homeBtn');
        liHome.textContent = 'Home';

    ul.appendChild(liHome);

    const liMenu = document.createElement('li');
        liMenu.classList.add('menuBtn');
        liMenu.textContent = 'Menu';
    
    ul.appendChild(liMenu);

    const liContact = document.createElement('li');
        liContact.classList.add('contactBtn');
        liContact.textContent = 'Contact';

    ul.appendChild(liContact);
   
    content.appendChild(navBar);
}

function loadPage() {
    createHeader();
    createNavBar();
}

export { loadPage }