
console.log("не число" / 2 + 5 );//NaN

console.log(1/0);//Infinity

console.log(-1/0);//-Infinity

let name = "Иван";
console.log(`Привет,${name}!`); //Привет, Иван !

let isGreater = 4>1;
console.log(isGreater);//true

let age;
console.log(age);

let user = {
    name: 'Vladimir',
    age: 24,
    address:{
        street:'Lenin',
        house:242,
        apartments:23
    }
};
console.log(user);

let value = true;
console.log(typeof value);//boolean
value = String(value);
console.log(value);//true

let str = '123';
console.log(typeof str);//string
let num = Number(str);
console.log(typeof num);//number
console.log(typeof (+'456'));//number

console.log(Boolean(10));//true
console.log(Boolean(0));//false

const getFloorNum=(num)=>{
    return Math.floor(num);;
};
console.log(getFloorNum(3.1));//3
console.log(getFloorNum(-1.1));//-2

console.log(Math.ceil(3.1));//4
console.log(Math.ceil(-1.1));//-1

console.log(Math.round(3.4));//3
console.log(Math.round(3.6));//4

let num2 = 12.123415;
console.log(num2.toFixed(2));//12.12
console.log(typeof 12.1235.toFixed(2));//string
console.log(typeof +12.1235.toFixed(2));//number

console.log(parseInt('10something'));//10
console.log(parseFloat('10.258something'));//10.258
console.log(parseInt('10.589something'));//10
console.log(parseFloat('10.25.8something'));//10.25

console.log(Math.max(0,9));//9
console.log(Math.min(0,9));//0

console.log(Math.pow(2,4));//16

console.log('aaa'.toLocaleUpperCase());//AAA
console.log('CCC'.toLocaleLowerCase());//ccc

let str1 = 'apple,orange,cucumber';
console.log(str1.includes('apple'));//true
console.log(str1.includes('ice scream'));//false

console.log(str1.slice(6,12));//orange
console.log(str1.slice(6));//orange,cucumber

console.log(str1.substr(6,6));//orange

console.log('  abc   '.trim().length);//3
console.log('a0'.repeat(5));//a0a0a0a0a0

let n=2;
n=n+4;
n=n*3;
console.log(n);//18
let n1=2;
console.log(n1+=4);//6
console.log(n1*=3);//18

console.log(n1++);//18
console.log(n1);//уже 19
console.log(++n1);//сразу 20

console.log(true||false);//true
console.log(true&&false);//false
console.log(!false);//true
console.log(!!0);//false
console.log(5==6-1);//true
console.log(10!=8);//true
console.log(('2'>1));//true

