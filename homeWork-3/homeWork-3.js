export const processCartData = (cartData) => {
    //TODO: Нужно добавить поле discount(oldPrice - price)
    // убрать поле oldPrice
    cartData.forEach((el) => {
        if ("oldPrice" in el) {
            if (el.oldPrice > el.price) {
                el.discount = el.oldPrice - el.price;
            }
            delete el.oldPrice;
        }
    });
    return cartData;
};

export const makeCartItemCopy = (cartItem) => {
    //TODO: сделать копию элемента "Пицца с анчоусами"
    // После увеличить кол-во добавленного ингредиента
    let obj = cartItem.find((el) => el.name === "Пицца с анчоусами");
    let newObj = {};
    for (let key in obj) {
        newObj[key] = obj[key];
        if (key === "count") {
            newObj[key] = obj[key] + 1;
        } else if (obj[key][0]?.count !== undefined) {
            newObj[key][0].count = obj[key][0].count + 1;
        } else {
        }
    }
    return newObj;
};

export const calcSum = (cartData) => {
    //TODO: посчитать суммы по типам товаров и их цены
    const result = {
        total: { count: 0, sum: 0 },
        water: { count: 0, sum: 0 },
        pizza: { count: 0, sum: 0 },
        other: { count: 0, sum: 0 }
    };
    for(let item of cartData) {
        if (item.type === "pizza") {
            result.pizza.count += item.count;
            result.pizza.sum += item.price;
        } else if (item.type === "water") {
            result.water.count += item.count;
            result.water.sum += item.price;
        } else {
            result.other.count += item.count;
            result.other.sum += item.price;
        }
        result.total.count += item.count;
        result.total.sum += item.price;
    }
    return result;
};

export const getCartItemsByDate = (cartData, date) => {
    //TODO: выбрать покупки сделанные за выбранную дату
    date = new Date(date);
    return cartData.filter(el => {
        let elDate = new Date(el.date);
        return date.getYear() === elDate.getYear() &&
            date.getMonth() === elDate.getMonth() &&
            date.getDate() === elDate.getDate();
    });
};

export const repeatOrder = (cartData, date) => {
    //TODO: нужно повторить заказ за выбранную дату
    // дублиовать соответствующие элементы
    // поставить в начало спиcка
    // дату текущую
    // поменять id на уникальный
    let arr = getCartItemsByDate(cartData, date);
    let ind = +cartData[cartData.length-1].id + 1;
    for(let item of arr){
        let newObj = {};
        for (let key in item) {
            newObj[key] = item[key];
        }
        newObj.date = new Date();
        newObj.id = ind;
        cartData.unshift(newObj);
        ind++;
    }
    return cartData;
};

export const addItem = (cartData, item) => {
    //TODO: увеличить кол-во товара в полученном элементе
    item.count++;
    return cartData;
};

export const checkPromo = (cartData) => {
    //TODO: нужно проверить корзина подходит под правила промоакции
    // проверить что суммарно в корзине больше 1000р
    // что есть пункт больше чем на 500р
    // что нет скидочных товаров
    let arr = processCartData(cartData); //добавляем скидку
    let total = 0, oneBigPosition = false, notDiscounted = true;
    for(let item of arr) {
        total += item.price;
        if(+item.price > 500){
            oneBigPosition = true;
        }
        if('discount' in item){
            notDiscounted = false;
        }
    }
    total = total > 1000;
    return {
        total: total,
        oneBigPosition: oneBigPosition,
        notDiscounted: notDiscounted
    };
};
