// Inicializando arrays
var product = []
var quantity = []
var quantityValue = []  
var price = []
var buttonMinus = []

for(var i = 1; i <= 4; i++) {
    product[i] = document.getElementById("product-"+i);  
    buttonMinus[i] = product[i].getElementsByClassName("minus");
    buttonMinus[i][0].disabled = true

   
    quantity[i] = document.getElementById("value-quantity-"+i);   
    quantityValue[i] = parseInt(quantity[i].value)

    price[i] = parseFloat(product[i].getElementsByClassName("price-product")[0].getElementsByTagName("span")[0].textContent)
}

const buyProduct = (id) => {
    if (confirm(`Preço final: ${Math.round((price[id] * quantityValue[id]) * 100) / 100}`)) {
        alert('Produto comprado com sucesso!')
    }
}

const minus = (id) => {
    (quantityValue[id] - 1) === 1 ? buttonMinus[id][0].disabled = true : buttonMinus[id][0].disabled = false
    quantityValue[id] -= 1; 
    quantity[id].setAttribute('value', quantityValue[id])
}

const plus = (id) => {
    buttonMinus[id][0].disabled = false
    quantityValue[id] += 1;
    quantity[id].setAttribute('value', quantityValue[id])
}