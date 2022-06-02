import splash from './img/aboutsplash.jpeg';

const buildAbout = (() => {
    let content = document.getElementById('content');
    let container = document.createElement('div');

    let about = document.createElement('div');
    let aboutText = document.createElement('span');
    let aboutH2 = document.createElement('h2');
    let aboutImg = document.createElement('img');

    let hours = document.createElement('div');
    let hoursH2 = document.createElement('h2');
    let hoursText = document.createElement('span');

    about.setAttribute('id', 'about');
    about.setAttribute('class', 'card');
    hours.setAttribute('id', 'hours');
    hours.setAttribute('class', 'card');
    
    aboutH2.textContent = 'About';
    aboutText.innerHTML = 'Founded in 2022 by Micah Bell, the reddistaurant features selections from the <a href="www.reddit.com/r/food">/r/food</a> subreddit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis aliquam. Justo eget magna fermentum iaculis eu non. Varius sit amet mattis vulputate.';
    aboutImg.setAttribute('src', splash);

    hoursH2.textContent = 'Open';
    hoursText.textContent = '24 hours a day. 7 days a week.'

    content.appendChild(container);
    container.appendChild(about);
    container.appendChild(hours);
    about.appendChild(aboutH2);
    about.appendChild(aboutImg);
    about.appendChild(aboutText);
    hours.appendChild(hoursH2);
    hours.appendChild(hoursText);
    
});

buildAbout();

export default buildAbout;