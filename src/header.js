import Icon from './img/reddit.png';

const buildHeader = (() => {
    let content = document.getElementById('content');
    let header = document.createElement('div');
    let redditIcon = document.createElement('img');
    let logoText = document.createElement('span');
    let nav = document.createElement('div');
    let home = document.createElement('span');
    let menu = document.createElement('span');
    let contact = document.createElement('span');
    
    logoText.textContent = 'redditstaurant';
    home.textContent = 'home';
    menu.textContent = 'menu';
    contact.textContent = 'contact';

    logoText.setAttribute('id', 'logoText');
    redditIcon.setAttribute('src', Icon);
    redditIcon.setAttribute('id', 'icon');
    header.setAttribute('id', 'header');
    nav.setAttribute('id', 'nav');
    home.setAttribute('id', 'home');
    menu.setAttribute('id', 'menu');
    contact.setAttribute('id', 'contact');
    
    content.appendChild(header);
    
    header.appendChild(redditIcon);
    header.appendChild(logoText);
    header.appendChild(nav);

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
})();

export default buildHeader;