'use strict'
// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// console.log(['a', 'b', 'c'].concat([1, 2, 3]));
// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
const a = ['a', 'b', 'c']
console.log(a.push(1,2,3));
console.log(a);

// 3) Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
console.log([1, 2, 3].concat([4,5,6]));

// 4) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// const a = [1,2,3]
console.log(a.reverse());

// 5) Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// 6) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// 7)  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// :sunglasses: Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// 9) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// 10) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. Скрыть решение.
// 11) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// 12)  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. Показать решение.
// 13) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. Показать решение.
// 14) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. Показать решение. (edited)



// let str = 'Ослик Иа-Иа посмотрел на виадук';


// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }
