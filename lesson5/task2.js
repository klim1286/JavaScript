const main = document.querySelector('#main');

let shoppingCart = []
let emptyBasket = '<p>Корзина пуста</p>'

function Item(product, price, specifications) {
    this.product = product;
    this.price = price;
    this.specifications = specifications
}

shoppingCart.push(
    new Item('i3', 15000, 'GHz: "2,9"')
);
shoppingCart.push(
    new Item('nvidia', 10000, 'ram: 2')
);
shoppingCart.push(
    new Item('H110M-S2', 5700, 'rev: 2')
);


if (shoppingCart == 0) {
	main.insertAdjacentHTML('beforeend', `<div class="prod_item total">${emptyBasket}</div>`);
} else {
	for (const iterator of shoppingCart) {
        main.insertAdjacentHTML('beforeend', 
        `<div class="prod_item">
        <span>Наименование - ${iterator.product}</span> 
        <span>Цена товара - ${iterator.price} руб,</span>
        <span>Характеристики - ${iterator.specifications}</span>
        </div>`);
    }
}

function finalCost(shoppingCart) {
    return shoppingCart.reduce( function (acc, shoppingCart){
        return acc + (shoppingCart.price)
    }, 0)
};


if (shoppingCart != 0) {
    const totalPrice = main.insertAdjacentHTML('beforeend', 
    `<hr><div class="prod_item total">В корзине товаров на сумму: 
    ${finalCost(shoppingCart)} рублей</div>`);
}