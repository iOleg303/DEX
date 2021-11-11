//создаем массив
let styles = ["Джаз", "Блюз"];
//вставляем элемент в конец
styles.push('Рок-н-ролл');
//console.log(styles);
//заменяем значение элемента в середине массива
styles[Math.floor(styles.length/2)] = 'Классика';
//console.log(styles);
//удаляем первый элемент массива с его сохранением
let firstElement = styles.shift();
//console.log(firstElement);
//console.log(styles);
//вставить 2 элемента в начало
styles.unshift('Рэп',"Рэгги");
//console.log(styles);


//Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
let sumInput = function () {
    let arr = [];
    let state = true;
    while (state) {
        let value = prompt("Введите число");
        //console.log(value);
        if(value===null){
            break;
        }
        if (value === "" || !isFinite(value)) {
            state = false;
        } else {
            arr.push(value);
            //console.log(arr);
        }
    }
};
sumInput();

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
let camelize = function(str){
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] ==='-'){
            arr[i] = '';
            arr[i+1] = arr[i+1].toUpperCase();
        }
    }
    //console.log(arr.join(''));
}
camelize("list-style-image");

//Напишите функцию filterRange(arr, a, b),
// которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
let filterRange = function(arr, a, b){
    let res = [];
    for (let el of arr){
        if(el >= a && el <= b){
            res.push(el);
        }
    }
    return res;
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
//console.log(filtered);