let year;
if(year=2021){
    console.log(true);//true
}

if(0==false){
    console.log(false);//false
}

let res;
let age=24;
let accessAllowed=(age>18)?res=true:res=false;
console.log(accessAllowed);//true

let name = 'ESMAScript';

let answer = prompt('Какое «официальное» название JavaScript?','');
if (answer == name) {
    console.log('Правильно!')
} else {
    console.log("Не знаете?" + name + "!");
}

let answer2 = prompt('Введите число','');
if(answer2>0){
    console.log(1);
}else if(answer2<0){
    console.log(-1);
}else {
    console.log(0);
}

function fun(a,b) {
    let result = (a + b < 4) ? "Мало" : "Много";
    console.log(result);
}
fun(1,2);//мало

function f(pos) {
    let mes = (pos=="Сотрудник")?"Привет":
        (pos=="Директор")?"Здравствуйте":
            (pos=="")?"нет логина":'';
console.log(mes);
}
f('');//нет логина

let name1 = "Ilya";
console.log(`hello ${1}`); //hello 1
console.log(`hello ${'name'}`); //hello name
console.log(`hello ${name1}`);//hello Ilya

let a = +prompt("Первое число",'');
let b = +prompt("Второе число",'');
let res1 = a+b;
alert('Суммма чисел '+ res1);

console.log(6.35 * 10 .toFixed(1)/10);//6.35

function readNumber(){
    let res = +prompt('Введите число','');
    if(isFinite(res)&&res!=0){
        alert(res);
    } else
        readNumber();
}
readNumber();

console.log(new Date(2012,1,20,3,12));//Mon Feb 20 2012 03:12:00...

function getWeekDay(date) {
    let arr = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    console.log(arr[date.getDay()]);
}

let date = new Date(2014,0,3);
getWeekDay(date);//ПТ

let c = 1, d = 1;
console.log(++c);//2
console.log(d++);//1

console.log(90>14&&90<=90);//true

function checkUser() {
    let answer = prompt("Кто там?",'');
    if(answer=='Админ'){
   let pass = prompt("Пароль?")
   if(pass==null||pass=='') {
       alert('Отменено');
   }else if(pass=='Я главный'){
       alert("Здравствуйте");
   }else {alert('Неверный пароль')}
    }else if(answer==''||answer==null){
        alert('Отменено')
    }else{
        alert('Я вас не знаю')
    }
}

checkUser();