const dishes = document.querySelectorAll('.dish')
let counter = 0

function chooseMain (dish) {
    
    let pick = document.querySelector('.main .chosenDish'); 

    if (pick !== null) {
        pick.classList.remove('chosenDish')
        counter--
    }

    dish.classList.toggle('chosenDish')

    counter++

    let price = document.querySelector('.chosenDish .checkBoxMain')
    let priceCheck = document.querySelector('.checkedMain')

    if (priceCheck != null) {
        priceCheck.classList.remove('checkedMain')
    }
    price.classList.add('checkedMain')

    buyButton()
}

function chooseDrink (dish) {
    
    let pick = document.querySelector('.drink .chosenDish'); 

    if (pick !== null) {
        pick.classList.remove('chosenDish')
        counter--
    }

    dish.classList.toggle('chosenDish')
    counter++

    let price = document.querySelector('.chosenDish .checkBoxDrink')
    let priceCheck = document.querySelector('.checkedDrink')

    if (priceCheck != null) {
        priceCheck.classList.remove('checkedDrink')
    }
    price.classList.add('checkedDrink')

    buyButton()
}

function chooseDessert (dish) {
    
    let pick = document.querySelector('.dessert .chosenDish'); 

    if (pick !== null) {
        pick.classList.remove('chosenDish')
        counter--
    }

    dish.classList.toggle('chosenDish')
    counter++

    let price = document.querySelector('.chosenDish .checkBoxDessert')
    let priceCheck = document.querySelector('.checkedDessert')

    if (priceCheck != null) {
        priceCheck.classList.remove('checkedDessert')
    }
    price.classList.add('checkedDessert')

    buyButton()
}


function buyButton () {
    let button = document.querySelector('.request')
    if (counter === 3){
        button.classList.add('greenRequest')
        button.innerHTML = "Fechar pedido"
    }
}

function request () {
    if (counter === 3) {
        let main = document.querySelector('.main .chosenDish .dishName')
        let drink = document.querySelector('.drink .chosenDish .dishName')
        let dessert = document.querySelector('.dessert .chosenDish .dishName')

        let mainPrice = document.querySelector('.main .chosenDish .price')
        let mainValue = Number((mainPrice.innerHTML.replace(/\D/g,'')/100).toFixed(2));
        let drinkPrice = document.querySelector('.drink .chosenDish .price')
        let drinkValue = Number((drinkPrice.innerHTML.replace(/\D/g,'')/100).toFixed(2));
        let dessertPrice = document.querySelector('.dessert .chosenDish .price')
        let dessertValue = Number((dessertPrice.innerHTML.replace(/\D/g,'')/100).toFixed(2));
    
        let mainName = main.innerHTML
        let drinkName = drink.innerHTML
        let dessertName = dessert.innerHTML

        let total = (mainValue + drinkValue + dessertValue)

        let message = `Olá, gostaria de fazer o pedido: \n -${mainName} \n -${drinkName} \n -${dessertName} \n Total: R$${total}`
        let request = encodeURIComponent(message)
        let whatsURL = `https://wa.me/5587999363958?text=${request}`
        
        window.open(whatsURL)
    }
}
