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
    
    header.appendChild(h1Header);
    header.appendChild(createNavBar());

    return header
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
   
    return navBar
}

function createWelcomeDiv() {
    const welcomeDiv = document.createElement('div');
        welcomeDiv.classList.add('welcome');

    const h2 = document.createElement('h2');
        h2.textContent = "Welcome to My Restaurant!";

    welcomeDiv.appendChild(h2);

    const pElem = document.createElement('p');
        pElem.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero autem natus obcaecati pariatur cum, consequatur possimus, doloremque nihil maxime libero eum id incidunt ad laborum et animi dolore quidem! Quia dolore dolor dolorum, accusamus expedita aliquid maxime, ratione fugit ea eos pariatur asperiores! Possimus nobis minus, tenetur repellat placeat odio, et amet voluptatibus quibusdam ipsa voluptas nemo fugit, minima mollitia autem vel aut cupiditate velit perspiciatis asperiores dicta a illo neque ipsam. In quo unde soluta dicta quos, laudantium magni, aperiam similique repellat optio repudiandae vero nobis omnis consectetur, cumque voluptatibus esse provident quisquam dignissimos eos tempora quae ipsa ipsam.";

    welcomeDiv.appendChild(pElem);

    return welcomeDiv
}



function loadPage() {
    content.appendChild(createHeader());
    content.appendChild(createWelcomeDiv());
    content.appendChild(createFooter());
}

export { loadPage }