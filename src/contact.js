import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import yelp from './img/yelp.png';

const buildContact = (() => {
    let content = document.getElementById('content');
    let contact = document.createElement('div');
    let phone = document.createElement('div');
    let phoneText = document.createElement('span');
    phoneText.setAttribute('id', 'phone-text');
    phone.setAttribute('class', 'card');
    phone.setAttribute('id', 'phone');
    let phoneH2 = document.createElement('h2');
    phone.appendChild(phoneH2);
    phone.appendChild(phoneText);
    phoneText.textContent = '(555) 555-5555';
    phoneH2.textContent = 'Call us anytime';
    contact.setAttribute('id', 'contact-container');
    let iconContainer = document.createElement('div');
    iconContainer.setAttribute('id', 'iconContainer');
    let facebookIcon = document.createElement('img');
    facebookIcon.setAttribute('src', facebook);
    let instagramIcon = document.createElement('img');
    instagramIcon.setAttribute('src', instagram);
    let yelpIcon = document.createElement('img');
    yelpIcon.setAttribute('src', yelp);

    let map = document.createElement('div');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97949.59234237966!2d-86.13724160000001!3d39.8983168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b539bf1fa5401%3A0x276b79e279cf5483!2sHolliday%20Park!5e0!3m2!1sen!2sus!4v1654273260317!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'


    content.appendChild(contact);
    contact.appendChild(phone);
    phone.appendChild(iconContainer);
    contact.appendChild(map);
    iconContainer.appendChild(facebookIcon);
    iconContainer.appendChild(instagramIcon);
    iconContainer.appendChild(yelpIcon);

});

export default buildContact;