import './style.css';
import buildHeader from './header.js';
import buildAbout from './about.js';
import buildMenu from './menu.js';
import buildContact from './contact.js';
import events from './events'; 

const wipeContent = (() => {
    let content = document.getElementById('content');
    content.removeChild(content.lastChild);
});


const render = ((page) => {
    switch (page) {
        case 'home':
            buildAbout();
            break;
        case 'menu':
            buildMenu();
            break;
        case 'contact':
            buildContact();
            break;
        }
    }
);

const listener = (() => {
    events.on('navigate', wipeContent);
    events.on('navigate', render);
})();

const navigation = (() => {
    let homeBtn = document.getElementById('home');
    let menuBtn = document.getElementById('menu');
    let contactBtn = document.getElementById('contact');

    homeBtn.addEventListener('click', () => {
        events.emit('navigate', 'home');
    });
    menuBtn.addEventListener('click', () => {
        events.emit('navigate', 'menu');
    });
    contactBtn.addEventListener('click', () => {
        events.emit('navigate', 'contact');
    });
})();