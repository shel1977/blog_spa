// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

let bigNum = prompt('ищем простые числа от 2 до:', '');
Again:
for (let i = 3; i <= bigNum; ++i){
 for (let j = 2; j < i; j++) {
   if (i%j === 0) continue Again;
 }
console.log (i);
 }


const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
    alert('Вы ввели число 0');
    break;

    case 1:
    alert('Вы ввели число 1');
    break;

    case 2:
    case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}


function checkAge(age) {
    return age > 18 ?  true :  confirm('Родители разрешили?')
}
checkAge(12);

function checkAge2(age) {
    return age > 18 ?  true :  confirm('Родители разрешили?')

}

checkAge2(12);


function min(a,b) {
    if (a<b) {
      return a;
      } else if (a == b) {
      return 'fuck you'
    } else {return b}
}

min (6, -5);

function pow(a, b) {
    let c = 1;
    for (let i=1 ; i<b ; i++) {
        c = c*a;
    }
    return c;
}

let firstNum = +prompt('число', '');
let stepen = +prompt('в степень', '');

alert (pow (firstNum, stepen));

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);