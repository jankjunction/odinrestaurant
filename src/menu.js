import reuben from './img/reuben.jpeg';
import charcuterie from './img/charcuterie.jpeg';
import tart from './img/tart.jpeg';

const buildMenu = (() => {
    let content = document.getElementById('content');
    let container = document.createElement('div');
    let menuItems = ['Appetizers', 'Entrees', 'Desserts'];
    let menuImgs = [charcuterie, reuben, tart]

    for (let i =0; i < menuItems.length; i++) {
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let span = document.createElement('span');
            let img = document.createElement('img');
            span.setAttribute('id', `${menuItems[i]}-text`)
            img.setAttribute('id', `${menuItems[i]}-img`)
            img.setAttribute('src', `${menuImgs[i]}`)
            div.setAttribute('id', `${menuItems[i]}`)
            div.setAttribute('class', 'card');
            container.appendChild(div);
            div.appendChild(h2);
            div.appendChild(img);
            div.appendChild(span);
            h2.textContent = `${menuItems[i]}`
        };
    
    content.appendChild(container);

    let appText = document.getElementById('Appetizers-text');
    let entreeText = document.getElementById('Entrees-text');
    let dessertsText = document.getElementById('Desserts-text');

    dessertsText.innerHTML = `<div>TIRAMISU<br>

    Coffee-soaked ladyfinger cake, sweetened Mascarpone cream<br>
    
    $10</div>
    
    <div>VANILLA RICOTTA CHEESECAKE<br>
    
    Strawberry Molasses, strawberries<br>
    
    $8</div>
    
    <div>FLOURLESS CHOCOLATE TORTE<br>
    
    Bittersweet chocolate, ganache glaze<br>
    
    $8</div>
    
    <div>AFFOGATO<br>
    
    Scoop of Gelato served with Espresso<br>
    
    $7</div>
    
    <div>SCOOP OF GELATO<br>
    
    Vanilla<br>
    
    $5</div>
    
    <div>SCOOP OF SORBET<br>
    
    Strawberry<br>
    
    $5</div>`

    entreeText.innerHTML = `<div>BRAISED PORK SHOULDER<br>

    Polenta, asparagus, arugula, red onion, pine nuts, pork demi<br>
    
    $26</div>
    
    <div>ROASTED SALMON<br>
    
    Roasted potatoes, asparagus, mushrooms, arugula, EVOO compound butter<br>
    
    $26</div>
    <div>REUBEN ON RYE<br>
    
    Corned beef, Swiss cheese, sauerkraut, and Thousand Island dressing<br>
    
    $18</div>`

    appText.innerHTML = `<div>BAKED GOAT CHEESE<br>

    Tomato sauce, focaccia<br>
    
    $13<br></div>
    
    <div>MEATBALLS<br>
    
    Tomato sauce, parmesan<br>
    
    $15<br></div
    
    <div>SAUSAGE & FENNEL<br>
    
    Old Major Italian Sausage, fennel, onion, roasted kale<br>
    
    $13<br></div>
    
    <div>TUSCAN SOUP<br>
    
    Cannelini beans, kale, potato, sausage, parmesan<br>
    
    $6<br></div>

    <div>FOCACCIA & OLIVE OIL<br>
    
    $6</div>`;
});


export default buildMenu;