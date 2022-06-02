const buildContact = (() => {
    let content = document.getElementById('content');
    let container = document.createElement('div');

    content.appendChild(container);
    container.textContent = 'Contact Yo Mama';
});

export default buildContact;