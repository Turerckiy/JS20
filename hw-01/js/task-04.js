"use strict";
// ===================Conditions============================
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;
// ===================Solution ============================
let maxDroidValue = Math.floor(credits / pricePerDroid);
alert(`Вы м♦жeте купить максимум ${maxDroidValue}`);
let countToBuy = prompt("Ввести число дроидов");
countToBuy = Number(countToBuy)
totalPrice = countToBuy * pricePerDroid;
// ===================Solution 1============================

if (countToBuy === null) {
  message = "Отменено пользователем!";
} else if (totalPrice > credits) {
  const restCredits = totalPrice - credits;
  message = `Недостаточно средств на счету! Общая сумма превышет колличество кредитов на ${restCredits}`;
} else {
  const restCredits = credits - totalPrice;
  message = `Вы купили ${countToBuy} дроидов, на счету осталось ${restCredits} кредитов.`;
}
alert(message);

// ===================Solution 2============================ 
// через свич не получится сравнения прочситать
// switch (countToBuy) {
//   case null:
//     message = "Отменено пользователем!";
//     console.log(message);
//     break;

//   case totalPrice > credits:
//     const restCredits = totalPrice - credits;
//     message = `Недостаточно средств на счету! Общая сумма превышет колличество кредитов на ${restCredits}`;
//     console.log(message);
//     break;

//   case totalPrice < credits:
//     restCredits = totalPrice - credits;
//     message = `'Вы купили ${countToBuy} дроидов, на счету осталось ${restCredits}кредитов.`;
//     console.log(message);
//     break;
// }
// alert(message);

// На счету пользователя есть 23580 кредитов,
// значение хранится в переменной credits
// (создай и присвой). Пользователь решает
// купить ремонтных дроидов, которые стоят
//  по 3000 кредитов за штуку. Цена одного
//  дроида хранится в переменной pricePerDroid
//  (создай и присвой).
// При посещении страницы, используя prompt,
// необходимо спросить количество дроидов
// которые пользователь хочет купить и
// сохранить в переменную.
// Напиши скрипт который:
// Если в prompt была нажата кнопка Cancel,
// выводит в консоль сообщение 'Отменено пользователем!'.

// В противном случае, рассчитывает общую цену
// заказа и сохраняет в переменной totalPrice.

// Проверяет сможет ли пользователь оплатить  заказ:
// если сумма к оплате превышает количество
// кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать
//  остаток кредитов на счету и вывести сообщение
// 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// const min = 10;
// const max = 30;
// const value = 15;

// const isInRange = value < 10 || value > 30;

// if (isInRange) {
//   console.log("wwwooooooooowwww");
// } else {
//   console.log("number is not in range");
// }

// console.log(isInRange);
// console.log(typeof isInRange);

// console.log(0 || 4);
// console.log( 0 || NaN || 0 || 5);
