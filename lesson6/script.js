function Item(product, image, description, price, discount=0) {
    this.product = product;
    this.image = `img/${image}.png`;
    this.description = description;
    this.price = price;
    this.discount = discount
}

let catalodList = []

catalodList.push(new Item('Процессор', 'cpu', 'Intel Core i3 10300', 15000));
catalodList.push(new Item('Материнская плата', 'main', 'H110M-S2 rev2', 5700));
catalodList.push(new Item('Оперативная память', 'ram', 'AMD Radeon R7 Performance', 5000));
catalodList.push(new Item('Видеокарта', 'nvid', 'PCI-E 3.0, 2 ГБ GDDR6, 64 бит, 1070 МГц - 1420 МГц', 10000));
catalodList.push(new Item('Корпус', 'box', 'Powercase Mistral Z4 Mesh LED', 3000));
catalodList.push(new Item('Блок питания', 'power', '500Вт', 2500));


function drowItems() {
    catalodList.forEach(function (item, i) {
        drowItem(item, i);
    })
}

const $catalog = document.querySelector('#catalog');
function drowItem(item, id) {
    $catalog.insertAdjacentHTML('beforeend', 
    `<div id="item-${id}" class="prod_item">
        <div class="item">
            <div class="image"><img src="${item.image}"></div>
            <div class="description"><h4>${item.product}</h4>${item.description}
                <div class="price">Цена: 
                    <span>${item.price}</span> руб.
                </div>
            </div>
        </div>
        <div class="sale">
            <span class='offer ${item.discount > 0 ? 'show' : ''}'>Скидка: ${item.discount}%</span>
            <div data-id="${id}" class="button">В корзину</div>
        </div>
    </div>`);
}
drowItems(catalodList);


let shoppingCart = [];
let emptyBasket = 'Ваша корзина пуста.';

function basketItem(product, price, discount=0) {
    this.product = product;
    this.price = price;
    this.discount = discount;
    this.finalPrice = function() {
        if (this.discount != 0) {
            return this.price - this.price*this.discount/100;
        } else {
            return this.price;
        }
    }
}

function totalSumm(shoppingCart) {
    return shoppingCart.reduce(function (acc, price) {
        return acc + price.finalPrice();
    }, 0);
}


function drowTotal (shoppingCart) {
    const $basket = document.querySelector('#basket');
    $basket.textContent = '';

    if (shoppingCart == 0) {
        $basket.insertAdjacentHTML('beforeend', `<div class="total">${emptyBasket}</div>`);
    } else {
        $basket.insertAdjacentHTML('beforeend', 
        `<div class="total">
            <p>В корзине: ${shoppingCart.length} 
            товар на сумму ${totalSumm(shoppingCart)} рублей.</p>
            <a class="buy" href="#">Купить</a>
        </div>`);
    }
}
drowTotal(shoppingCart);


$catalog.addEventListener('click', function (e) {
    if (e.target.className ==='button' ) {
        const id = Number(e.target.getAttribute('data-id'));
        const choice = catalodList[id];
        shoppingCart.push(new basketItem(choice.product, choice.price, choice.discount));

        drowTotal(shoppingCart);
    } 
});
 

const $popup = document.querySelector('#popup');

$popup.addEventListener('click', function(e) {
    $popup.style.display = 'none';
});

 $catalog.addEventListener('click', function(e) {
    if( e.target.tagName === 'IMG' ) {
        $popup.textContent = '';
        $popup.style.display = 'flex';
        $popup.insertAdjacentHTML('beforeend',
            `<img src="${e.target.getAttribute('src')}" class="scale">`);
    }
});