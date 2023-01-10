const cart = [
    {title: "Book", quantity: 3, price: 20},
    {title: "TV", quantity: 1, price: 820},
    {title: "Bread", quantity: 1, price: 2},
    {title: "T-Shirt", quantity: 5, price: 10},
    {title: "Socks", quantity: 7, price: 4}
];
var summ = 0;

function getQuantityOfCartItems(){
    for(let i = 0;i<cart.length; i++){
        summ = summ + cart[i].quantity;
    }
    console.log(summ);
}

getQuantityOfCartItems();