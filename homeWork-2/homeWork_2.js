export const sum = (f, s) => {
    //TODO: Должны складываться только строки и числа
    // Постарайтесь сложить как можно больше пар и обойти NaN случаи
    let arr = [f,s];
    let result = 0;
    for(let el of arr){
        if(isFinite(el)){
            result += el;
        }else if(!isNaN(parseFloat(el))){
            result += parseFloat(el);
        }
    }
    return result;
};

export const showPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;

    //TODO: Привести цену к виду: 10.00 р.
    // округлять до копеек в сторону магазина
    return Math.ceil(discountedPrice*100)/100;
};

export const findSuccess = (bankResponse) => {
    //TODO: Проверьте что в строке есть 'Success' без учёта регистра
    let lowerStr = bankResponse.toLowerCase().indexOf("success");
    return lowerStr === -1 ? "No" : "Yes";
};

export const dateToString = (date) => {
    //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
    date = new Date(date);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    if(month < 10){
        month = "0" + month;
    }
    let day = date.getDate();
    if(day < 10){
        day = "0" + day;
    }
    return year + ":" + month + ":" + day;
};

export const sort = (data) => {
    //TODO: Отсортируйте массив строк по алфавиту
    return data.map(el=>el.toLowerCase()).sort((a, b) => a.localeCompare(b));
};
