// // console.log()


// console.log("Marlen");


// alert("Marlen")


///////////// ТИПЫ ДАННЫХ В js ////////////


//1. number - Число

//2. begInt - Большие число (298347296376378539)

//3. string - строка ("hello world")

//4. boolean - Булевой тип - true || false

//5. undefined - неизвестный элемент 

//6. null

//7. object - зат - {}

//8. symbol -  символь "", '', ``


///////////////////////////////////////////////
// let 1 = ("")
// let let = 40
// let motion-wep = ("")
// let name = "Azamat"
// let сонсоль = ("")

/////////////////////////////////////////////////
// let -это переменная которая изменить значение

// let a = 10
// let b = 20
// let c = 30

// a = 100 ;

// console.log(a)
// console.log(b)
// console.log(c)


// console.log(a+b+c)

// const - тоже переменная которая мы не сможем изменить значение

//  const myName = 'MARLEN'

//  console.log (nyName)


// var - это тоже перемнная но это старая уже. мы не должен изпользатать


// var a = "heloo"

// console.log(a);


// FUNTION & IF ELSE 


// FUNTION DECLERATTION

// function foo(a, b) {
//     console.log(a)

//     return a+b ;

// }

// ARROW FUNTION
// const getLog = (data) => {
//     console.log(data);
// }
// getLog (55);

// console.log(foo(50, 5))

// let age = 20;

// if (age >= 0 && age <= 7) {
//     console.log("ребенок")
// } else if (age > 7 && age <14) {
//     console.log("Млатший");
// } else if (age >= 14 && age <18) {
//     console.log("Подросток");
// } else if (age >=18 && age <=35) {
//     console.log("Взрослый чел");
// } else if (age >35 && age <60) {
//     console.log("Пожилой челевек");
// } else if (age >=60) {
//     console.log("Пенционер");
// } else {
//     console.log("не челевек");
// }




// const month = 12;

// if (month == 12 &&  month > 0 && month <3) {
//     console.log("ЗИМА");
// } else if  (month >= 3 && month < 6 ) {
//     console.log("ВЕСНА");
// } else if (month >=6 && month < 9 ) {
//     console.log("ЛЕТО");
// } else if (month >=9 && month <10) {
//     console.log("ОСЕНЬ");
// } else if (month >=10 && month <12 ) {
//     console.log("ЗИМА");
// }


// const foo = (cap, on, wait) => {
//     const a = cap - on;

//     if(wait > a ) {
//         const b = wait - a;

//         return ` ${b} мест не хватает 
//     }

//     return `все помещается и осталость ${a - wait} мест`;
// }

// console.log(foo(50, 5, 30));



// String myText = "Heloo"


// String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// System.out.println("The length of the txt string is: " + txt.length());

// String txt1 = "Hello World";
// System.out.println(txt1.toUpperCase());   // Outputs "HELLO WORLD"
// System.out.println(txt1.toLowerCase());   // Outputs "hello world"


// .Length - 

// const aer = "Marlen"

// if (aer.length > 5) {
//     console.log(true);
// } else {
//     console.log(false);
// } 


// let str = "Привет Мир!"

// console.log(str);


// let str1 ="Привет "

// let str2 = "Мир"
// console.log(str1+str2);


// let name = "Марлен"
// console.log(`"Привет" ${name}`);

// let age  = "15"
// console.log( `"Мне ${age}  лет!" `);

// let day ="365 "
// let world = "Земля "
// let age2 = "7 млрд "
// let age3 = "Солнце "
// console.log(`В нашем году ${day} дней. Днём у нас светит  ${age3}. Население планеты Земля ${world} составляет примерно ${age2}. человек.`)







// STRING - СТРОКА

// const a = "";
// const b = "";
// const c = "";

// .length - длина строка

// [0] - биз кандай символго калрылабыз

// const name = "Marlena"
// console.log(name.length);
// console.log(name[1]);


// .indexOf() - дает нам индекс символа или буквы

// const myCar = "Mercedes-Bebz"
// myCar.indexOf("M")
// console.log(myCar.indexOf("s"));

//startsWith() - проверяет с начала текста что есть такая строки
//endsWith() - провереять с конца текста что еть такая строки

// const myName= "Marlen"
// myName.startWith("Mar")

// myName.endsWith("nel") // false
// myName.endsWith("len") //trul

// console.log(myName.startWith("Ma"));
// console.log(myName.endsWith(""));

// .slice - выделение строки от начала до нужного нам текста

// const name2 = "Dyishonov"
// console.log(lastName.slice(3, 5));

// .substr() -получвем сколько то сивола начиная с позици которого мы дали
// const lastName = "Dyishonov"
// console.log(lastName.substr(3, 5));

//substring() - тоже как slice() но работает противоположим направление

//toLowerCase() - делать все тексты в нажнем регистре
//toUpperCase() - делать все тексты в вверхном регистре

// const firstName = "KurmanzhanDadca"

// console.log(firstName.slice(0, 6));
// console.log(firstName.slice(6, 0));

// console.log(firstName.substring(0, 6));
// console.log(firstName.substring(6, 0));

// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

// .replace() - заменяет текста слова буквы

// const text = "Baibolot"

// console.log(text.replace("bolot", "bolsun"));
// console.log(text.replace("Bai", "kedei"));

// . includes() - проверяет есть ли в текста такой слова или символа цифры

// const text2 = "Меня завут Марлен"

// console.log(text2.includes("Марлен"));







// ЗАДАЧА //

// 2. Вам даны переменные a=10, b=2 и c=5. Выведите в консоль их сумму.
// let a =10
// let b =2 
// let c =5
// console.log(a+b+c);

////////////////////////////////////////////////////////////////////////////////////
// 2. Вам даны переменные a=10, b=2 и c=5. Выведите в консоль их сумму.
// const d = 100;
// console.log(d * 2);

////////////////////////////////////////////////////////////////////////////////////
// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?». 
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
// name + " plays banjo" 
// name + " does not play banjo"

// function playBanjo (name) {
//     if(name[0].toLowerCase()=="r") {
//     return name+"plays banjo"
//     }
//         return name+"does not play banjo"
// }
// console.log(playBanjo("Marlen "));

/////////////////////////////////////////////////////////////////////////////////////
// В этом простом задании вам дается число, и вы должны сделать его отрицательным. А может быть, число уже отрицательное?
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Число может быть уже отрицательным, и в этом случае никаких изменений не требуется.
// Ноль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательные нули не имеют математического смысла.

// function makeNegative (number) {
//     if (number <=0) {
//         return number;
//     }
//     return number *-1;
// }
// console.log(makeNegative(10));

////////////////////////////////////////////////////////////////////////////////////////
// Ваши одноклассники попросили вас скопировать для них некоторые документы. Вы знаете, что есть «n» одноклассников, а в документах «m» страниц.
// Ваша задача — посчитать, сколько чистых страниц вам нужно. Если n < 0 или m < 0 , вернуть 0 .
// n= 5, m=5: 25
// n=-5, m=5:  0

// function school(n, m) {
//     if (n<=0|| m<=0) {
//         return 0
//     }
//     return n*m
// }
// console.log(school(9, 9));

////////////////////////////////////////////////////////////////////////////////////////
// Вам даны длина и ширина четырехугольника. Многоугольник может быть прямоугольным или квадратным. Если это квадрат, вернуть его площадь. Если это прямоугольник, верните его периметр.
// 6, 10 --> 32
// 3, 3 --> 9
// Примечание: для целей этого ката вы будете считать, что это квадрат, если его длина и ширина равны, в противном случае это прямоугольник.

// function Marlen(a,b) {
//     if (a==b) {
//         return a*b
//     }
//     return (a+b)*2
// }
// console.log(Marlen(6,6));

//////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию, которая преобразует входную строку в верхний регистр.

// function Marlen(number) {
//     return text.ToupperCase();
// }
// console.log(Marlen("Marlen I love"));

/////////////////////////////////////////////////////////////////////////////////////////
// Натан любит кататься на велосипеде.

// Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.

// Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.

// Например:
// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5







/////////////////////////////////////////////////////////////////////////////////////////
// .4Напишите функцию, которая возводит число в заданную степень.







/////////////////////////////////////////////////////////////////////////////////////////
// 5. Напишите функцию, которая подсчитывает количество цифр в заданном числе.






// Math.ads()
// Math.ceol()
// Math.floor()
// Math.round()
// Math.pow()
// Math.sqrt()
// Math.random


// const message = 'Hello world' // Try edit me

// // Update header text
// document.querySelector('#header').innerHTML = message

// // Log to console
// console.log(message)

// const marlen = "Marlen"

// document.querySelector("#header").innerHTML = marlen

// console.log(marlen)



////////////////////////////////////////////////////////////////////////////////
// function foo(number) {
//   if (number % 2=== 0) {
//     return xxxxxxx ;
//   } else {
//     return "njdnjndjndjn"
//   }
// }

//////////////////////////////////////////////////////////////////////////////////
// const a = "Marlen"
// console.log(a[a.length -1]);


/////////////////////////////////////////////////////////////////////////////////                                                                                                                                                                                                                         
// function getName (name) {
//     return `men zavut ${name}`;
// }
// console.log(getName("Marlen"));


///////////////////////////////////////////////////////////////////////////////////
// function Marlen (a, b) {
// return a+b;
// }
// console.log(Marlen(2, 5))


//////////////////////////////////////////////////////////////////////////////////
// function Mar (number) {
//   if (number % 2===0) {
//   return ("Четный")
//   }
// return("Нечетный")
// }
// console.log(Mar(5))




//////////////////////////////////////////////////////////////////////////////////////
// function piter (number) {
//     return number*number
// }

// console.log(piter(5));

////////////////////////////////////////////////////////////////////////////////////
// function jok (number) {
//     if (number==0) {
//     return ("0")
//     }
//     else if (number>0) {
//         return ("полажытыльный")
//     }
//     return "отрицательным"
// }
// console.log(jok(-5));
/////////////////////////////////////////////////////////////////////////////////////////

// function Mar(number, b) {
//     return Number (number.toFixed (b));
// }

// console.log(Mar(12.928978926)); // 12.92
// console.log(Mar(12.118978926)); // 12.11
// console.log(Mar(12.128978926)); // 12.12

////////////////////////////////////////////////////////////////////////////////////////

// function name1 (number) {
//     return Number.isInteger (number);
// }
// console.log(name1(5));

//////////////////////////////////////////////////////////////////////////////////////



// const sliceName = (name) => {
//     if (name.length > 6) {
//         return name.slice(0, 6)
//     }



//   return name;  
// }

// console.log(sliceName("Marlenaa"));


///////////////////////////////////////////////////////////////////////////////////////


// // length
// const name = "Marlena"
// console.log(name.length);


// // 'jonn'




// //"indexOf"
// const name1 = "Bishkek"
// myCar.indexOf("k")
// console.log(name1.indexOf("a"));


// //"startsWith"
// const myName= "Marlen"
// myName.startWith("Mar")



// //"endswith"
// const name2 = "Marlen"
// name2.endsWith("nel") // false
// name2.endsWith("len") //trul
// console.log(name2);


// //"slice"
// const name3 = "Dyishonov"
// console.log(name3.slice(3, 5));


// //"substr"
// const lastName = "Dyishonov"
// console.log(lastName.substr(3, 5));


//"substring"
// const same ="Marlena"
// console.log(same.substring(0, 6));
// console.log(same.substring(6, 0));


// //"toUpperCase"
// const FF = "Marlen"
// console.log(FF.toUpperCase);

// //"replace"
// const txt = "Marlen"
// console.log(txt.replace("Mar", "len"));
// console.log(txt.replace("len", "len"));

// //"includes"
// const text2 = "Меня завут Марлен"
// console.log(text2.includes("Марлен"));

/////////////////////////////////////////////////////////////////////////////////////////////////




// function sum (a, b) {
//     return a+b;
// }

// console.log(sum, 23);



// //


// function atu (number) {
//     if (number %2===0) {
//     return "true"
//     }
// return "false"
// }
// console.log(atu(50));


// //

// function ket (number) {
//     return number*number
// }
// console.log(ket(56));

// //

// function jok (number) {
//     if (number==0) {
//     return ("0")
//     }
//     else if (number>0) {
//         return ("полажытыльный")
//     }
//     return "отрицательным"
// }
// console.log(jok(10));



// console.log("Marlen");
// console.log("Google");


// function Mar(number, b) {
//     return Number (number.toFixed (b));
// }

// console.log(Mar(12.928978926)); // 12.92
// console.log(Mar(12.118978926)); // 12.11
// console.log(Mar(12.128978926)); // 12.12



// Array
////////////////////////////////////////////////////////////////////////////////////////// 


// const fruitsa = ["Яблоко", "Апельсин", "Слива"];
// console.log(fruitsa.length)


// const arr =["Limon", "Banana", "Marlen", "Just", "HTml", "12","44",];
// console.log(arr);

// const fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits[fruits.length-1]);


// let fruitss = ["Яблоко", "Апельсин"];
// fruitss.push("Груша");
// alert( fruitss ); // Яблоко, Апельсин, Груша

// arr.forEach(el, index) => {
//     console.log(index, el);
// });




// delete arr[0] - удаляеть элемент но место него дает Empty
// forEach() - запускает функция для каждого элемента


// .reverse()

// const cars = ["Mers", "Lada", "AUDI", "Toyiota", "BMW",]
// cars.reverse()
// console.log(cars);


// const str = "";
// console.log(str.split("").reverse().join(""));



// function Marlen(name) {
//     return name.toLowerCase () === name.toLowerCase().split("").reverse().join("")
// }
// console.log(Marlen("Marlen"));



// let fruits = ["Апельсин", "Груша"];
// fruits.unshift('Яблоко');
// console.log(fruits); // Яблоко, Апельсин, Груша



// let fruitsaa = [];
// fruitsaa[125] = "Яблоко";
// console.log( fruitsaa.length ); // 126




// ,push- Добавлеть элемента
// ,pop- Удаляеть элеменда с конца

// const arss =["a", "b", "c"]
// arss.push("d" ,"c");
// console.log(arss);
// arss.pop()
// console.log(arss);


// const fruits = ["Яблоко", "Апельсин", "Груша"];
// fruits.shift() // удаляем Яблоко и выводим его
// console.log( fruits ); // Апельсин, Груша


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.splice(2, 5, 100, 200, "Marlen")
// console.log(numbers);






// const arr2 =[1, 2, 3];
// const arr3 = [4, 5, 6];

// console.log(arr2.concat(arr3));
// console.log([...arr2,...arr3]);


// const arr2 =[1, 2, 3];
// const arr3 =[4, 5, 6];

// console.log(arr2.concat(arr3));
// console.log([...arr2,...arr3]);


// const arr = ["js", "css", "jq"];
// console.log(arr[0]);
// console.log(arr[arr.length-1]);



// const Mar = [1, 2, 3, 4, 5];
// console.log(Mar.slice(0, 3));


// const Mar = [1, 2, 3, 4, 5];
// console.log(Mar.slice(3, 5));


// const Mar =("Marlen")
// console.log(Mar.slice(0, 3));


// const Mara ="Marlen"
// console.log(Mara.length);

// const Marar = "Marlen"
// console.log(Marar.split(0, 2));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.splice(2, 5, 100, 200, "Marlen", 150,)
// console.log(numbers);

// const arss =["a", "b", "c"]
// arss.push("d" ,"c");
// console.log(arss);
// arss.pop()
// console.log(arss);








// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
//  const arr2 = ["a","b","c"]
//  arr2.push(1,2,3);
//   console.log(arr2);
// // // // 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// const arr3 = [1,2,3];
// const arr4 = [4,5,6];

// console.log(arr3.concat(arr4));
// console.log([...arr3, ...arr4]);
// // 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// const a = [1,2,3]
// a.unshift(4,5,6)
// console.log(a);
// // 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// const ve = ["js","css","jq"];
// console.log(ve[0]);
// // 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// const m = ["js","css","jq"];
// console.log(m[l.length-1]);

// // 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в
// // новый элементы [1, 2, 3].
// const numberrs = [1,2,3,4,5]
// console.log(numberrs.slice(0,3));
// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// элементы [4, 5].
// const kpp = [1,2,3,4,5]
// console.log(kpp.slice(3));
// // // 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте
// // // массив в [1, 4, 5].

// let ar = [1,2,3,4,5];
// ar.splice(1,2);
// console.log(ar);
// // // 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в
// // // новый массив элементы [2, 3, 4].
// const Marlen = [1,2,3,4,5];
// console.log(Marlen.slice (1,4));


// // 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// // массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// const Mar = [1,2,3,4,5];
// Mar.splice(3,0,"a,b,c")
// console.log(Mar);

// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// const ooo = [1,2,3,4,5];
// ooo.splice(1,0, "a,b");
// ooo.splice(5,0, "c");
// ooo.splice(7,0, "e")
// console.log(ooo);


// Задание №2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
// const lemon = ["a","б","в"]
// lemon.push(4,3,5,5)
// console.log(lemon);
// Задание №3
// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"]. 
//Удалите сначала первый элемент "Apple" и этот же элемент подставтье после "Pineapple".
// const mm =  ["Apple", "Orange", "Pinapple", "Cherry"]
// mm.shift(1,0)
// mm.splice (2,0, "Apple");
// console.log(mm);

// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"].
// вырезать самый длинный элемент
// const nnn =   ["Apple", "Orange", "Pinapple", "Cherry"]
// nnn.pop(-1)
// console.log(nnn);

// Задание №6
// const letters = ['a', 'b', 'c', 'd', 'e'];
// Удалить 3 элемента, начиная с индекса 2, и сохранить их в переменной 'removed'
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const removed = arr.splice(2, 3);
// console.log(arr); 
// console.log(removed);




// Задание №7
// const colors = ['red', 'green', 'blue'];
// Вставить 'yellow' и 'purple' перед индексом 1
// const arr = ['red', 'green', 'blue'];
// arr.splice(1, 0, 'yellow', 'purple');
// console.log(arr);



// Задание №8
// const fruits = ['apple', 'banana', 'orange'];
// Заменить 1 элемент, начиная с индекса 1, на 'grape' и 'kiwi'
// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 2);
// console.log(numbers)


// Задание №9
// const numbers = [1, 2, 3, 4, 5];
// Удалить 2 элемента, начиная с индекса 2

// let str = "dlroW olleH";
// вывести Hello World






// .forEach()
// .filter()
// .map()


// const arr = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"];

// console.log(arr);

// arr.forEach((el, index) => {
//     if (index % 2 === 0) {
//         console.log(index, el);
//     } else {
//         console.log(index, el.toUpperCase());
//     }
// })


// console.log(filteredArr);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//     11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// numbers.forEach((el) => {
//     if (el % 2 === 0) {
//         console.log(el.toString());
//     } else {
//         console.log(el);
//     }
// });


// numbers.forEach((el) => {
//     if (el % 2 === 0) {
//         console.log(el);
//     } else {
//         console.log("Четный");
//     }
// });


// const arr =[101, 200, 33, 44, 566, 299, 22, 203];

// const filteredArr = arr.filter((el) => {
//     return el >110
// })
// console.log(filteredArr);




// const names =[
//   "Nuraiym",
//   "Jibek",
//   "Nursultan",
//   "KURMANBEK",
//   "ASEMA",
//   "Marlen",
//   "CHOLPAN", 
// ]
// ;
// console.log(names.filter((el) => {
//     return el.toUpperCase() === el ;
// }));


// const numbers =[10, 20, 30, 40 ,50];
// const a =numbers.map((el) => {
// return el *5;
// })

// console.log(a);



// const nas =[
//   "Nuraiym",
//   "Jibek",
//   "Nursultan",
//   "KURMANBEK",
//   "ASEMA",
//   "Marlen",
//   "CHOLPAN", 
// ]
// ;
// const b = nas.map((el, index ) => {
//     if (index % 2 === 0) {
//         return el.toUpperCase();
//     }
//     return el.toLowerCase();
// });

// console.log(b);












// .filter()
// .map()
// forEach
// pop
// split
// push 
// splice
// slice
// concat
// shift
// length
// toFix
// indexOf
// substring
// includes
// toUpperCase
// toLpperCase
// endsWith
// startWith
// some
// indexOf
// Math.ads()
// Math.ceol()
// Math.floor()
// reduce
// Math.round()
// Math.pow()
// Math.sqrt()
// Math.random
// replace
// join
// pop
// push
// shift
// unshift
// spice
// slic
// split


//1) Удвоение элементов массива
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент удвоен.

// function task1(numbers) {
//     return numbers.map((el) => {
//         return el *2;
//     });
// }

// console.log(task1([2, 4, 5, 7]));



// 2) Преобразование строк в верхний регистр
// Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка преобразована в верхний регистр

// function task2(str) {
//     return str.map((el) => {
//         return el.toUpperCase()
//     })
// }

// console.log(task2(["Marlen", "Asema", "Nuraiym", "Jibek", ]));



//3) Вычисление суммы элементов массива. Напишите функцию, 
// которая принимает массив чисел и возвращает сумму всех элементов
// function task3 (numbers) {
//     let sum =0;

//     numbers.forEah((element) => {
//         sum += element;
//         //sum=sum+element
//     });

//     return sum;
// }

// console.log(task3([1, 2, 3, 4, 5, 6, 7, 8, 9]));


// 4) Фильтрация элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

// function task4 (numbers) {
//     return numbers.filter ((el) => {
//         return el%2===0
//     })
// }

// console.log(task4([1, 2, 3,4 ,5, 6, 7, 8, 9, 10]));



// 5) Преобразование строк в числа
// Напишите функцию, которая принимает массив строк, содержащих числа,
// и возвращает новый массив, в котором каждая строка преобразована в число.

// function task5 (number) {
//     return number.map((el) => {
//         return +el
//     })
// }

// console.log(task5(["1", "2", "3", "4", "5"]));


// 6) Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только четные числа


// function task6 (numbers) {
//     return numbers.filter((el) => {
//         return el >= 0
//     });
// }

// console.log(task6([-2, -1, 0, 1, 2, 3, 4, 5]));





// 10) Фильтрация элементов, удовлетворяющих определенному условию
//Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только элементы, которые начинаются с определенной буквы. const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// const arr=['apple', 'banana', 'cherry', 'date', 'elderberry'];
//     const filteredArr = arr.filter((el) => {
//         return el.length >= 6
//     })
//     console.log(filteredArr)



// 11) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше определенного значения. const numbers = [10, 20, 30, 40, 50]

// const world=['apple', 'banana', 'cherry', 'date', 'elderberry'];
// function task6 (numbers) {
//     return numbers.filter((el) => {
//         return el [0].toLowerCase() =="a"
//     })
// }
// console.log(task6(world));


// 11) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше определенного значения. const numbers = [10, 20, 30, 40, 50];

// function name1 (numbers) {
//     return numbers.filter((el) => {
//         return el >30
//     })
// }

// console.log(name1([10, 20, 30, 40, 50]));


// 12) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки, состоящие только из заглавных букв. const words = ['APPLE', 'Banana', 'CHERRY', 'date', 'ELDERBERRY']

// const names =[
//   "APPLE",
//   "banana",
//   "CHERRY",
//   "date",
//   "ELEDERBERRY",

// ]
// ;
// console.log(names.filter((el) => {
//     return el.toUpperCase() === el ;
// }));


//13) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые являются четными и больше 5. const numbers = [2, 4, 6, 7, 8, 10, 11];





// 14) Напишите функцию, которая принимает массив значений различных типов данных и возвращает новый массив,
// содержащий только значения определенного типа. const values = [1, 'apple', true, null, 'banana', 5, false];




// function task1 (numbers) {
//     return numbers.map((el) => {
//         return el 
//     });
// };

// console.log(task1([1, 'apple', true, null, 'banana', 5, false]));


// 15) Напишите функцию, которая принимает массив чисел и возвращает максимальное число из них.
// const numbers = [10, 5, 8, 3, 9]
// 16) Напишите функцию, которая принимает массив строк и возвращает их объединение в одну строку. 
// 17) Напишите функцию, которая принимает массив чисел и возвращает среднее значение.  const numbers = [2, 4, 6, 8, 10];
// 18) Напишите функцию, которая принимает массив элементов и возвращает количество вхождений определенного элемента. const fruits = ['apple', 'banana', 'apple', 'cherry', 'apple']; 
// 19) Напишите функцию, которая принимает массивы и возвращает их конкатенацию в один массив. 
// 20) Напишите функцию, которая принимает массив чисел и возвращает первое четное число из массива. const numbers = [1, 3, 5, 2, 4, 6, 7];
// 21) Напишите функцию, которая принимает массив строк и возвращает первую строку определенной длины. const words = ['apple', 'banana', 'cherry', 'date']

// 22) Напишите функцию, которая принимает массив чисел и возвращает первое положительное число из массива. const numbers = [-2, -1, 0, 3, 5, 7];
// 23) Напишите функцию, которая принимает массив строк и возвращает первый элемент, начинающийся с определенной буквы. const words = ['apple', 'banana', 'cherry', 'date'];









// function task1 (arr) {
// const res = arr.map((el) => {
//     const splitedName = el.split("");
//     const result = splitedName.map((letter, index ) => {
//         if (index %2 ===0) {
//             return letter.toUpperCase()
//         }
//         return letter
//     });
//     return result.join("");
// });
// return res
// }
// console.log(task1(["Umar", "erlan", "islam",]));




// function task2 (arr) {
//     let str ="";
//     arr.forEach((el) => {
//         if (str.length > el.length) {
//             null;
//         } else {
//             str = el;
//         }
//     });
//     return str;
// }

// console.log(task2(["Umar", "erlan", "islam",]));







// function jok (number) {
//     if (number==0) {
//     return ("0")
//     }
//     else if (number>0) {
//         return ("positive")
//     }
//     return "negative"
// }
// console.log(jok(13));


// let 1 = ("")
// let let = 40
// let motion-wep = ("")
// let name = "Azamat"
// let сонсоль = ("")


// if (false) {
//     console.log("Yes");
// } else {
//     console.log("No");
// };




// &&
// ||let age = 10;

// if (age == "10") {
//     console.log("Yes");
// } else {
//     console.log("No");
// }
// !




// let age = 15;

// if (age >= 1 &&  age <=13) {
//     console.log("лунтик");
// } else if (age > 14 && age <=17) {
//     console.log("хроники нарни");
// } else if (age > 18 && age <=90) {
//     console.log("пролетая над гнездом кукушки");
// } else {
//     console.log("ты еще жив!");
// }




// let num1 =+prompt("первое число")
// let action = prompt("действие")
// let num2 =+prompt("второе чтсло")

// if (action === "+") {
//     console.log(num1 + num2);
// } else if (action === "-") {
//     console.log(num1 - num2);
// } else if (action === "*") {
//     console.log(num1 * num2);
// } else if (action === "/") {
//     console.log(num1 / num2);
// } else if (action === "**") {
//     console.log(num1 ** num2);
// } else if (action === "%") {
//     console.log(num1 % num2);
// }




// let str = +prompt("number")

// if (str >= 1 && str <= 10 || str === 31) {
//     console.log("");
// } else if (str > 10 && str <=20) {
//     consonum2, num1le.log("");
// } else if (str > 20 && str <= 30) {
//     console.log("");
// } else {
//     console.log("errror");
// }






// let day = 1;

// if (day === 1) {
//   console.log("понедельник");
// } else if (day === 2) {
//   console.log("вторник");
// } else if (day === 3) {
//   console.log("cреда");
// } else if (day === 4) {
//   console.log("четверг");
// } else if (day === 5) {
//   console.log("пятница");
// } else if (day === 6) {
//   console.log("суббота");
// } else if (day === 7) {
//   console.log("воскресенье");
// } else {
//   console.log("error");
// }



// let num1 = +prompt("первое число");
// let action = prompt("действие");
// let num2 = +prompt("второе число");

// if (action === "+") {
//   console.log(num1 + num2);
// } else if (action === "-") {
//   console.log(num1 - num2);
// } else if (action === "*") {
//   console.log(num1 * num2);
// } else if (action === "/") {
//   console.log(num1 / num2);
// } else if (action === "**") {
//   console.log(num1 ** num2);
// } else if (action === "%") {
//   console.log(num1 % num2);
// }



// console.log( false || true);


// const world=['apple', 'banana', 'cherry', 'date', 'elderberry'];
// function task6 (numbers) {
//     return numbers.filter((el) => {
//         return el [0].toLowerCase() =="a"
//     })
// }
// console.log(task6(world))



// const letters = ['a', 'b', 'c', 'd', 'e'];
// ["dlrow", "olleH"] 3 элемента, начиная с индекса 2, и сохранить их в переменной 'removed'

// const colors = ['red', 'green', 'blue'];
// Вставить 'yellow' и 'purple' перед индексом 1
// let colors = ['red', 'green', 'blue'];
// colors.unshift("yellow", "purple")
// console.log(colors);

// const fruits = ['apple', 'banana', 'orange'];
// Заменить 1 элемент, начиная с индекса 1, на 'grape' и 'kiwi'
// let fruits = ['apple', 'banana', 'orange'];
// fruits.splice(0,1, "grape", "kiwi")
// console.log(fruits);

// const numbers = [1, 2, 3, 4, 5];
// Удалить 2 элемента, начиная с индекса 2
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(2));



// Задание №1
// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.
// let arr = ["dlrow", "olleH"];
// let str = arr.join("").split("").reverse("").
// console.log(str);

// Задание №2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
// let arr =  ['а', 'б', 'в']
// arr.push(4,3,5,5)
// console.log(arr);

// Задание №3
// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"]. Удалите сначала первый элемент "Apple" и этот же элемент подставтье после "Pineapple".
// let arr = ["Apple", "Orange", "Pinapple", "Cherry"]
// let apple = arr.shift()
// arr.splice(2, 0, "Apple")
// console.log(arr);



// Задание №4
// Дан массив [8, -7, -21, 44, 3]. Вывести в консоль наиболшее число из массива.
// Подсказка: нужно использовать метод sort()
// let arr = [8, -7, -21, 44, 3];
// arr.sort(a, b) => a-b 
// console.log(arr);



// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. (Используйте concat)
// let arr = [1, 2, 3];
// arr.push(4,5,6)
// console.log(arr);



// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. (Используйте reverse)
// let arr = [1, 2, 3];
// arr.reverse()
// console.log(arr);



// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. (методы push, unshift)
// let arr = [1, 2, 3];
// arr.push(4, 5, 6)
// console.log(arr);




// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6)
// console.log(arr);


// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. (методы shift pop)
// let arr =  ['js', 'css', 'jq'];
// // arr.shift()
// console.log(arr[0]);




// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr =  ['js', 'css', 'jq'];
// // arr.pop()
// console.log(arr.pop());



// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. (метод splice)
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2)
// console.log(arr);




// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5];
// let str = arr.splice(1)
// str.pop()
// console.log(str);



// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// let str = arr.splice(3, "a", 'b', 'c' );
// console.log(arr);



// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// let str = arr.splice(1, "a", "a", "b")
// arr.splice(6, "a", "c")

// console.log(arr);



// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. (метод slice)



// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));


// 13. Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.













///////////////////////////////////////////////////////////////////////////////////////////////////
// ["Life", "is", "hard"]
// С помощью метода splice замените слово "hard" на "good".
// let arr = ["Life", "is", "hard"];
// arr.splice(2, 1, "good")
// console.log(arr);


//  ["один","два","три","четыре"]
// Используя метод join, напишите код, который объединяет
// все элементы массива в строку. Между словами должен быть знак +.
// let arr = ["один","два","три","четыре"];
// let res = arr.join("+")
// console.log(res);


// let arr = ["Paul", "John", "George", "Ringo", "Yoko"]; //вывести имена с четными индексами

// let result = arr.filter((el, index) => {
//     if(index % 2 ===0) {
//         return el
//     }
// })
// console.log(result);


// вывести числа которые четные и больше 10
// [2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17]
// let arr =[2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17];
// let res = arr.filter((el) => {
//     return el >10
// })

// console.log(res);


// let arr = [22, 3, 6, 12, 33, 66, 93, 27, 50, 88, 34, 3, 5, 8, 10];
// let res = arr.filter((el) => el %2 == 0)
// console.log(res);


// const names = [
//   "Helen",
//   "Tom",
//   "Jack",
//   "Peter",

//   "Jessica",
//   "Bob",
//   "Jimm",
//   "John",

//   "Alexa",
//   "Jessy",
//   "David",
//   "Paul",
// ];
// let result = names.map((el) => el.length)
// console.log(result);


// let str = "javaSaacript"
//   let a = "a"
//   let arr = str.toLowerCase().
//   split("").filter((el) => {
//     return el === a
// }).length;
//   console.log(arr);





// OBJECT - Обьект. /////////////////////////////////////////////////////////////////////////////


// OBJECT - Объект, Один из более важных типов данных в JavaScript.
// Каждый объект уникальен от другого и в себе хорнить ссылки. Другие типы
// данных они примитивные, а объект уникальный.

// const car = {
//     марка: "Toyota",
//     цвет: "Черный",
//     модель: "camry",
//     обьем: 3.5,
//     isActive: true,
//     88: "99",
// }

// console.log(car);
// console.log(car.марка);
// console.log(car.обьем);
// console.log(car["88"]);
// console.log(car["модель"]);
// console.log(['обьем']);





// const phone = {
//     name: "IPhone",
//     model: "14 pro max",
//     memory: "256",
//     price: "1090$",
// }

// in || .hasOwnProperty() - проверятет есть ли в обьекта такое свойство

// console.log("name" in phone); // true
// console.log("color" in phone); // false

// console.log(phone.hasOwnProperty("name"));
// console.log(phone.hasOwnProperty("color"));



// Object.freeze(phone) - Замораживает обьект и мы  не можем изменять его

// // изменяет значение обьекта
// phone.name = "Samsung";

// // Добавяет новое свойство в обьекта
// phone.color = "Purble"
// phone.colors["Goold", "black"]

// Удаляет свойство в обьекта
// delete phone.memory

// console.log(phone);
// // Object.values - деат нам массив с значение только свойств в обьекте
// console.log(Object.values(phone));

// // Object.keys -  деат нам массив с значение только свойств(ключов) в обьекте
// console.log(Object.keys(phone));




//////////////////////////////////////////////////////////////////////////////////
// ПРОКТИКА //
/////////////////////////////////////////////////////////////////////////////////

// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// const  obj = {a: 1, b: 2, c: 3, v: 4,};
// const res = Object.keys(obj)
// console.log(res.length);

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.
// const  obj = {a: 1, b: 2, c: 3};
// console.log(obj.c);
// console.log(Object.obj["c"]);

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// const  obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
// delete obj.Айжан
// console.log(Object.values(obj))

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.
// const  obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
// obj.Атай = "500"
// console.log(obj);

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.
//  const obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
//  obj.Медет = "1500"
//  console.log(obj);

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.
// const obj = {Ширин: '1000', Айжан:'500', Атай: "" ,salary: '500'}
// delete obj.Ширин
// delete obj.Атай
// delete obj.Айжан
// console.log(obj);


// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.
// const obj = {Ширин: '1000', Айжан:'500', Атай:"", salary: '500'};
// console.log(Object.keys(obj));

// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.
// const obj = {Ширин: '1000', Айжан:'500', Атай:"300", salary: '500'};
// console.log(Object.values(obj));

// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.
//  const obj = {Ширин: '1000', Айжан:'500', Атай:"", salary: '500'};
//  console.log(Object.entries(obj));





// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// const day = 1;
// const days = {
//     1: "пондельник",
//     2: "Вт",
//     3: "Ср",
//     4: "Чт",
//     5: "Пя",
//     6: "Сб",
//     7: "Вс"

// }

// console.log(days[day]);
// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.
// function arr (str) {
//     return str.map((el) => {
//         return el.id
//     })
// }

// console.log(arr[ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]);

// function arr3 [{id: 3}, {id: 5}, {id: 6}, {id: 7} ] {
//     return Object.keys(id).map
// }

// console.log(arr3);
// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.
// const arr =  {name: 'Igor'}
// arr.age = "25"
// console.log(arr);
// arr.name = "Azat"
// console.log(arr);

// 15. Вам дан объект product = {
// name: "headphones",
// price: 100,
// discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%. Если это не так, сделайте скидку на 7%. Обновите объект.

// const product = {
// name: "headphones",
// price: 100,
// discount: 0
// }

// if (product.price > 100) {
//     const a  =(product.price / 100) * 10;

//     product.price = product.price - a;
//     product.discount = 10;
// } else {
//        const a =(product.price / 100) * 10;

//     product.price = product.price - a;
//     product.discount = 7; 
// }

// console.log(product);const product = {
// name: "headphones",
// price: 100,
// discount: 0
// }

// if (product.price > 100) {
//     const a  =(product.price / 100) * 10;

//     product.price = product.price - a;
//     product.discount = 10;
// } else {
//        const a =(product.price / 100) * 10;

//     product.price = product.price - a;
//     product.discount = 7; 
// }

// console.log(product);






////////////////////////////////////////////////////////////////////////////////////////
// this //
////////////////////////////////////////////////////////////////////////////////////////


// В браузерах, объект window также является объектом global:
// console.log(this === window); // true

// a = 37;
// console.log(window.a); // 37

// this.b = "MDN";
// console.log(window.b); // "MDN"
// console.log(b); // "MDN"


// const arr = {
//     price: 100,
//     price1: 100,
//     price2: 100,
//     price3: 100,
//     getSum: function() {
//         return this.price + this.price1 + this.price2 + this.price3
//     }
// }

// console.log(arr.getSum());


// ARRAY

// const numbers = [1,2 ,3, 4,4,5,5 ,46 ,6, 4,64, 4]
// const arr = ["Marlen", "Jibek", "Nuraiym", "Ularbek", "Asema"]


// const result = arr.sort(( a , b) => {
//     return a > b ? "1" : "-1"
// });

// console.log(result);

// const res = numbers.sort((a , b) => {
//     return a - b;
// })

// console.log(res);
//////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3,4,5 ,6]   

// const res = numbers.reduce((acc, el) => {
//     return acc + el
// }, 0);

// const res2 = numbers.reduce((acc, el) => {
//     if(acc > el) {
//         return acc;
//     }

//     return el;
// }) ;

// console.log(res2);



/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//Создайте массив чисел и используйте метод reduce, чтобы найти их сумму.
// const arr = [1, 2, 1000, 3, 4, 5];

// const res = arr.reduce((acc, el) => {
//   return acc + el;
// }, 0);

// console.log(res);

//Создайте массив строк и используйте метод map, чтобы получить новый массив строк, в котором все буквы будут в верхнем регистре.
// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"];

// const res = arr.map((el) => {
//   return el.toUpperCase() 
// });

// console.log(res);

//Создайте массив чисел и используйте метод filter, чтобы получить массив только с четными числами.
// const arr = [1,2,3,4,5,6 ,7,8,9,10]
// const res = arr.filter((el) => {
//     return el %2 === 0
// })

// console.log(res);

//Создайте массив строк и используйте метод includes, чтобы проверить, содержится ли определенная строка в массиве.

// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"];
// const result = arr.some((el, index) => {
//   return el === "Marlen";
// });

// console.log(result);

// console.log(arr.includes("Jibek"));

//Создайте массив объектов и используйте метод map, чтобы получить новый массив, содержащий только определенные свойства объектов.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
// const ass = arr.map((el) => {
//     return el %2 
// })

// console.log(ass);
//Создайте массив чисел и исполь.toUpperCase() зуйте метод reduce, чтобы найти максимальное число в массиве.

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const mar = numbers.reduce((acc, el) => {
//   if (acc > el) {
//     return acc;
//   }

//   return el;
// });

// console.log(mar);



//Создайте массив объектов и используйте метод sort, чтобы отсортировать их по убыванию определенного свойства.
// const arr = [1, 9, 2, 5, 6,4]
// const res = arr.sort((a ,b) => {
//     return a - b
// })

// console.log(res);


// Создайте массив чисел и используйте метод sort, чтобы отсортировать их по возрастанию.
// const arr = [1, 3, 2 , 5, 8, 6, 7, 9, 4]
// const res = arr.sort((a, b) => {
//     return a - b
// })

// console.log(res);

// Создайте массив строк и используйте метод includes, чтобы проверить, содержится ли хотя бы одна строка с определенным значением.
// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"];
// const result = arr.some((el, index) => {
//   return el === "Marlen";
// });

// console.log(result);

// console.log(arr.includes(""));

// Создайте массив объектов и используйте метод filter, чтобы получить массив объектов с определенным значением свойства.
// const arr = ["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"];
// const res = arr.filter((el) => {
//     return el 
// })
// console.log(res);



//Создайте массив объектов и используйте метод reduce, чтобы вычислить сумму значений определенного свойства.
// const arr = [1, 2, 10, 3, 4, 5];

// const res = arr.reduce((acc, el) => {
//   return acc + el;
// }, 0);

// console.log(res);



//Создайте массив объектов и используйте метод reduce, чтобы вычислить сумму значений определенного свойства.
// const arr = [1, 2, 10, 3, 4, 5];
// const res = arr.reduce((acc, el) => {
//   return acc + el;
// }, 0);

// console.log(res);

// 1) Удвоение элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент удвоен.
// function task (numbers) {
//     return numbers.filter((el) => {
//         return el
//     })
// }

// console.log(task(["Marlen"]));
// 2) Преобразование строк в верхний регистр
// Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка преобразована в верхний регистр.
// function task (numbers) {
//     return numbers.map((el) => {
//         return el.toUpperCase()
//     })
// }

// console.log(task(["Jibek", "Nuraiym", "Ularbek", "Marlen", "Asema"]));
// 3)  Вычисление суммы элементов массива. Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.
// function task (number) {
//     return number.reduce((acc , el) => {
//         return acc + el
//     })
// }

// console.log(task([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 4) Фильтрация элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
// function task (number) {
//     return number.filter((el) => {
//         return el % 2 === 0
//     })
// }

// console.log(task([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 5) Преобразование строк в числа
// Напишите функцию, которая принимает массив строк, содержащих числа, и возвращает новый массив, в котором каждая строка преобразована в число.
// function task (number) {
//     return number.reverse((el) => {
//         return el 
//     })
// }

// console.log(task([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 6) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
// function task (number) {
//     return number.filter((el) => {
//         return el % 2 === 0
//     })
// }

// console.log(task([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 7) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа. const numbers = [-2, -1, 0, 1, 2, 3, 4, 5];
// function task (number) {
//     return number.Math.abc((el) => {
//         return el
//     })
// }

// console.log(task([-2, -1, 0, 1, 2, 3, 4, 5]));
// 8) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки определенной длины. const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// console.log(words.length);

// 9) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные значения (без повторений). 
// 10) Фильтрация элементов, удовлетворяющих определенному условию
// Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только элементы, которые начинаются с определенной буквы. const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];



// 11) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше определенного значения. const numbers = [10, 20, 30, 40, 50];
// function arr (numbers) {
//     return numbers.reduce((acc, el) => {
//                 if (acc > el) {
//                     return acc
//                 }
//                 return el
//     })     
// }





// console.log(arr([10, 20, 30, 40, 50]));
//     return numbers.reduce((acc, el) => {
//                 if (acc > el) {
//                     return acc
//                 }
//                 return el
//     })     
// }



// console.log(arr([10, 20, 30, 40, 50]));

// 12) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки, состоящие только из заглавных букв. const words = ['APPLE', 'Banana', 'CHERRY', 'date', 'ELDERBERRY'];
// function task1 (numbers) {
//     return numbers.filter((el, index) => {
//         return el [0].toUpperCase()
//     }) 
// }

// console.log(task1(['APPLE', 'Banana', 'CHERRY', 'date', 'ELDERBERRY']));

// 13) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые являются четными и больше 5. const numbers = [2, 4, 6, 7, 8, 10, 11];
// function tasl1 (numbers) {
//     return numbers.filter((el) => {
//         return  el > 5 && el %2 === 0
//     })
// }
// console.log(tasl1([1, 2, 3, 4, 6, 7, 8, 9, 10]));
// 14) Напишите функцию, которая принимает массив значений различных типов данных и возвращает новый массив, содержащий только значения определенного типа. const values = [1, 'apple', true, null, 'banana', 5, false];
// 15) Напишите функцию, которая принимает массив чисел и возвращает максимальное число из них. const numbers = [10, 5, 8, 3, 9];
// function task (numbers) {
//     return numbers.reduce((acc, el) => {
//         if (acc, el) {
//             return acc;
//         }
//         return el
//     })
// }

// console.log(task([10, 5, 8, 3, 9]));

// 16) Напишите функцию, которая принимает массив строк и возвращает их объединение в одну строку. const words = ['Hello', ' ', 'world', '!'];
// function task (numbers) {
//     return numbers.join((el) => {
//         return el.split()
//     })
// }

// console.log(task([['Hello', ' ', 'world', '!']]));



// 20) Напишите функцию, которая принимает массив чисел и возвращает первое четное число из массива. const numbers = [1, 3, 5, 2, 4, 6, 7];
// function task (number) {
//     return number.filter((el, index) => {
//         return el %2 === 0
//     })
// }

// console.log(task([1, 3, 5, 2, 4, 6, 7]));



// 17) Напишите функцию, которая принимает массив чисел и возвращает среднее значение.  const numbers = [2, 4, 6, 8, 10];
// / function foo (numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }
//     const mas = numbers.reduce((acc, current) => acc + current, 0);
//     const poo = mas / numbers.length;
//     return poo;
//   }
//   const numbers = [2, 4, 6, 8, 10];
//   const poo = foo (numbers);
//   console.log(`${poo}`);

// 18) Напишите функцию, которая принимает массив элементов и возвращает количество вхождений определенного элемента. const fruits = ['apple', 'banana', 'apple', 'cherry', 'apple']; 
// let str = "apple"
//   let a = "a"
//   let arr = str.toLowerCase().
//   split("").filter((el) => {
//     return el === a
// }).length;
//   console.log(arr);




// 19) Напишите функцию, которая принимает массивы и возвращает их конкатенацию в один массив.

// function tasl1 (numbers) {
//     return numbers.filter((el) => {
//         return  el > 5 && el %2 === 0
//     })
// }
// console.log(tasl1([1, 2, 3, 4, 6, 7, 8, 9, 10]));

// 21) Напишите функцию, которая принимает массив строк и возвращает первую строку определенной длины. const words = ['apple', 'banana', 'cherry', 'date'];
// function arr (number) {
//     return number.map((el) => el.length)
// }

// console.log(arr(['apple', 'banana', 'cherry', 'date']));





// 22) Напишите функцию, которая принимает массив чисел и возвращает первое положительное число из массива. const numbers = [-2, -1, 0, 3, 5, 7];

// 23)Nапишите функцию, которая принимает массив строк и возвращает первый элемент, начинающийся с определенной буквы. const words = ['apple', 'banana', 'cherry', 'date'];

// Создайте массив чисел и используйте метод map, чтобы получить новый массив, в котором каждое число возводится в квадрат.ссив объектов и используйте метод sort, чтобы отсортировать их по возрастанию и убыванию определенного свойства.

// Создайте массив чисел и используйте метод filter, чтобы получить массив только с числами больше определенного значения.

// Создайте массив строк и используйте метод map, чтобы получить новый массив, в котором каждая строка имеет определенную длину.

// Создайте массив объектов и используйте метод includes, чтобы проверить, содержится ли объект с определенными свойствами в массиве.

//Создайте массив чисел и используйте метод map, чтобы получить новый массив, в котором каждое число умножено на определенное число.

//Создайте массив строк и используйте метод filter, чтобы получить массив строк, длина которых больше определенного значения.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OBJECT - Обьект. /////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OBJECT - Объект, Один из более важных типов данных в JavaScript.
// Каждый объект уникальен от другого и в себе хорнить ссылки. Другие типы
// данных они примитивные, а объект уникальный.

// const car = {
//     марка: "Toyota",
//     цвет: "Черный",
//     модель: "camry",
//     обьем: 3.5,
//     isActive: true,
//     88: "99",
// }

// console.log(car);
// console.log(car.марка);
// console.log(car.обьем);
// console.log(car["88"]);
// console.log(car["модель"]);
// console.log(['обьем']);





// const phone = {
//     name: "IPhone",
//     model: "14 pro max",
//     memory: "256",
//     price: "1090$",
// }

// in || .hasOwnProperty() - проверятет есть ли в обьекта такое свойство

// console.log("name" in phone); // true
// console.log("color" in phone); // false

// console.log(phone.hasOwnProperty("name"));
// console.log(phone.hasOwnProperty("color"));



// Object.freeze(phone) - Замораживает обьект и мы  не можем изменять его

// // изменяет значение обьекта
// phone.name = "Samsung";

// // Добавяет новое свойство в обьекта
// phone.color = "Purble"
// phone.colors["Goold", "black"]

// Удаляет свойство в обьекта
// delete phone.memory

// console.log(phone);
// // Object.values - деат нам массив с значение только свойств в обьекте
// console.log(Object.values(phone));

// // Object.keys -  деат нам массив с значение только свойств(ключов) в обьекте
// console.log(Object.keys(phone));


//Статический Object.entries()метод возвращает массив собственных перечислимых пар ключ-значение свойства со строковым ключом.
// Object.entries - деат нам массив внутри массив с дво элемантами
// первый элемент это ключ А вторая значение
// console.log(Object.entries(arr));



// const name = "Omurbek";

// const number = 100;
// const numbers = [1, 2, 3, 4, 5 ,6, 7];
// const isActive = true
// const getUser = function () {
//     return "Jonn"
// };

// const obj = {
//     name: "Delly",
//     age: 20,
// }

// const data = {
//     name: "Omurbek",
//     number: 100,
//     numbers: [1, 2, 3, 4, 5],
//     isActive : true,
//     getUser: function () {
//         return this.name;
//     }
// }

// obj: {
//     name: "Delly",
//     age: 20,
// }



// data.city = "Bishkek";

// console.log(Object.keys(data));

// console.log(Object.values(data));
// console.log(Object.values(data));


// Object.assign()
// Object.create()
// Object.defineProperties()
// Object.defineProperty()
// Object.entries()
// Object.freeze()
// Object.fromEntries()
// Object.getOwnPropertyDescriptor()
// Object.getOwnPropertyDescriptors()
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.getPrototypeOf()
// Object.groupBy()
// Object.hasOwn()
// Object.prototype.hasOwnProperty()
// Object.is()
// Object.isExtensible()
// Object.isFrozen()
// Object.prototype.isPrototypeOf()
// Object.isSealed()
// Object.keys()
// Object.preventExtensions()
// Object.prototype.propertyIsEnumerable()
// Object.seal()
// Object.setPrototypeOf()
// Object.prototype.toLocaleString()
// Object.prototype.toString()
// Object.prototype.valueOf()




///////////////////////////////////////////////////////////////////////////////////////////
//switch case //
///////////////////////////////////////////////////////////////////////////////////////////

// let a = 0;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }





// function get (number) {
//     switch (true) {
//         case (number >= 1 && number <3) || number ==12: {
//             return "Зима"
//         }
//         case number >= 3 && number <6: {
//             return "Весно"
//     }
//     case number >= 6 && number <9: {
//         return "Лето"
//     }
//     case number >=9 && number <12: {
//         return "Осень"
//     }
//     default: {
//         return "Error"
//     }
// }
// }

// console.log(get(12));



// const numbers = [
//   "Marlen",
//   "Erlan",
//   "Ularbek",
//   "Asema",
//   "Nuraiym",
//   "Cholpan",
//   "Jibek",
//   "Chyngyz",
//   "Baiel",
//   "Sultan",
//   "Bekzat",
//   "Nurlan",
// ];


// function ass (arr, a) {
//     let name = false

//     arr.forEach((el) => {
//         switch (true) {
//             case el === a: {
//                 name = true;
//                 return;
//             }

//             default: {
//                 return;
//             }
//         }
//     })
//     return name;
// }

// console.log(ass(numbers, "Marlen"));


///////////////////////////////////////////////////////////////////////////////////////////////
//Циклы //
///////////////////////////////////////////////////////////////////////////////////////////////

// for (let i = 0; i<= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// const numbers = [
//   "Marlen",
//   "Erlan",
//   "Ularbek",
//   "Asema",
//   "Nuraiym",
//   "Cholpan",
//   "Jibek",
//   "Chyngyz",
//   "Baiel",
//   "Sultan",
//   "Bekzat",
//   "Nurlan",
// ];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for(let i = 0; i < 10; i++) {
//     if(i %2 === 0) {
//         alert(i);
//     }
// }



// for(let arr = 0; arr <= 100 ;arr ++) {
//     if (arr %2 === 0) {
//         console.log(arr );
//     }
// }




// const res = "Marlen";
// const arr = "";

// for (let i = 0; i< res.length; i++) {
//     if (i % 2 ==0) {
//         res += arr[i].toUpperCase()
//     } else {
//         res += arr[i].toLowerCase()
//     }
// }


// console.log(res[i]);



// 1. Выведите столбец чисел от 1 до 50.
// for(let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// 2. Создайте переменную с пустым массивом,
// заполните массив 10-ю элементами X с помощью цикла.
// let arr = []
// for(let i = 0; i <= 10; i++) {
//     arr.push("Marlen")
// }

// console.log(arr);

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. 
//С помощью цикла for выведите все эти элементы в консоль.
// const arr = [5, 3, 1, 2, 7];
// for(let res = 0; res < arr.length; res++) {
//     console.log(arr[i]);
// }

// 4. Вам дан массив с элементами [5, 2, 1, 2]. 
//С помощью цикла for найдите произведение элементов этого массива.
// let arr = [5, 2, 1, 2]
// let res = 1

// for(let i =0; i < arr.length; i++) {
//     res = res * arr[i]
// }
// console.log(res);

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for(let arr = 0; arr <= 100; arr++) {
//     if (arr %2 === 0) {
//         console.log(arr );
//     }
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let sum = 0
// for(let i = 0; i< 100; i++ ) {
//     sum = sum + i
// }

// console.log(sum);

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8].
// С помощью цикла for найдите сумму элементов этого массива.
// Запишите ее в переменную result.
// let result =  [2, 4, 5, 6, 8]
// let num = 0
// for(let i = 0; result.length; i++) {
// num = num + result[i]

// }

// console.log(num);

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и 
//оператора if выведите на экран столбец тех элементов массива,
// которые больше 3-х, но меньше 10.
// let srs = [3, 4, 6, 12, 3, 5];
// for(let i = 0; i < srs.length; i++) {
//     if (srs[i] >3 && srs[i] <10) {
//         console.log(srs[i]);
//     }
// }

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. 
//Найдите сумму положительных элементов массива.
// let arr = 0;
// const str = [21, -12, 6, 7, -2, 65]
// for(let i = 0; i < str.length; i++) {
//     if (str[i] > 0) {
//         arr = arr + str[i]
//     }
// }
// console.log(arr);

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20].
// С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением,
// равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла.
// Если нет - ничего делать не надо.
// let arr = [5, 1, 3, 7, 6, 15, 3, 20];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === 4) {
//         console.log("Yes");
//         break
//     }
// }

// console.log(arr);

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000];
// for(let i =0; i< arr.length; i++) {
//  const res = arr[i].toString()
//  if(res.startsWith("1") || res.startsWith("2") || startsWith("5")){
//     console.log(+res);
//  }
//  }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let res = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arr = "";

// for(let i = 0; i < res.length; i++) {
//     if(i === 0) {
//         arr = arr + `-${res[i]}-`
//     } else {
//         arr = arr + `${res[i]}-`
//     }
// }

// console.log(arr);

// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).



// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.
// let ass = [1, 2, 3, 4, 5];
// let num = 0
// for(let i = 0; i < ass.length; i++) {
//     num = num + ass[i]
// }
// console.log(num);

// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// let sns = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// for(let i = 0; i < sns.length; i++) {
//     if (sns[i] >0 && sns[i] <10) {
//         console.log(sns[i]);
//     }
// }


// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// let arr = []

// for(let i = 0; i<= 10; i++) {
//     arr = arr + i
// }
// console.log(arr);
// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].Создайте цикл, который выводит нечетные числа, которые больше 10.
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

// for(let i = 0; i< arr.length; i++) {
//     if(i %2 !== 0) {
//         console.log(i);
//     }
// }

// // 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.
// let arr = 'jzvzszrzpz';
// const res = []

// for(let i = 0; i < arr.length; i++) {
//     res.push(arr[i].toUpperCase())
// }

// console.log(res);




// Вывести числа от 1 до 10.
// for(let i = 0; i<=10; i++) {
//     console.log(i);
// }

// Вывести четные числа от 2 до 20.
// for(let i = 1; i <= 20; i++) {
//     if(i %2 ===0) {
//         console.log(i);
//     }
// }

// Посчитать сумму чисел от 1 до 5.
// let num = 0
// for(let i = 0; i <5 ; i++) {
//     num = num + i
// }
// console.log(num);


// Вывести числа от 1 до 100, заменяя числа, кратные 3, на "Fizz", а числа, кратные 5, на "Buzz".
// for(let i = 0; i <= 100; i++) {
//     if(i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else if (i % 7 == 0) {
//         console.log("FizzBuzz");
//     } else {
//         console.log(i);
//     }
// }

// Найти сумму нечетных чисел от 1 до 50.
// let arr = 0;
// for(let i = 0; i<= 50; i++) {
//     if(i %2 !== 0) {
//         console.log(i);
//     }
//     arr += i
// }

// console.log(arr);

// Вывести каждую букву в строке "JavaScript" в обратном порядке.
// let arr = 'JavaScript';
// const res = []

// for(let i = 0; i < arr.length; i++) {
//     res.push(arr[i].toUpperCase())
// }

// console.log(res.reverse());



// Посчитать сумму чисел в массиве [1, 2, 3, 4, 5].
// let arr = [1, 2, 3, 4, 5];

// for(let i = 0; i <arr.length; i++) {
//     arr = arr + i
// }

// console.log(i);

// Вывести только четные числа из массива [1, 2, 3, 4, 5].
// let res = [1, 2, 3, 4, 5];
// for(let i = 0; i< res.length; i++) {
//     if(i %2 === 0) {
//         console.log(i);
//     }
// }

// Посчитать сумму квадратов элементов массива [2, 4, 6, 8, 10].
// let arr =  [2, 4, 6, 8, 10];

// for(let i = 0; i< arr.length; i++) {
//     arr = arr + i
// }

// console.log(i);


// Вывести квадраты чисел от 1 до 5.
// let i = 0;
// while(i <= 5) {
//     console.log(i ** 2);
//     i++
// }

// Вывести таблицу умножения на 7.
// let i = 0
// while(i <= 10) {
//     console.log(`7 * ${i} = ${i * 7}`);

//     i++
// }

// Вывести числа от 10 до 1 в обратном порядке
// let i = 10

// while (i >= 0) {
//     console.log(i); 
//     i--
// }

// Посчитать факториал числа 5.
// let i = 1;
// let sum = 1
// while(i <= 5) {
//     sum = sum * i
//     i++
// }
// console.log(sum)


// Посчитать количество гласных букв в строке "JavaScript".
// let str = "JavaScript" 
// let res = "aeiou"

// let i = 0;
// let a = ""
// while(i <=str.length) {
//     if(res.includes(str[i])) {
//         a += str[i]
//     }
//     i++
// }
// console.log(a);

// Вывести каждую вторую букву в строке "Hello, World!".
// Посчитать количество отрицательных чисел в массиве [-2, 0, 1, -5, 4].
// Вывести элементы массива [3, 6, 9, 12] в обратном порядке.
// Вывести каждый второй элемент массива ["a", "b", "c", "d", "e"].
// Посчитать количество букв "a" в строке  "JavaScript is awesome".


// function arr (name) {
//     const res = name.split("").reverse().jpin("")

//     if(res.toLowerCase() === name.toLowerCase()) {
//         return true;
//     }
//     return false
// }

// console.log(arr("Kazak"));



// function a (str) {
//     let res = ''

//     for(let i = str.length -1; i >= 0; i--) {
//      res += str[i]
//     }
//     return res.toLowerCase() === str.toLowerCase()
// }

// console.log(a("kazak"));





// let i =0
// while(i <= 100) {
//     if(i %2 === 0) {
//         console.log(i);
//     }
// i++
// }



// let i = 55

// do{
//     console.log(i);

//     i++
// } while(i <50) 


//for in - нам дает только индекс

// const numbers = [
//   "Marlen",
//   "Erlan",
//   "Ularbek",
//   "Asema",
//   "Nuraiym",
//   "Cholpan",
//   "Jibek",
// ];



// // for(index in numbers) {
// //     console.log(index);
// // }

// // for of - нам дает только страка
// for(el of numbers) {
//     console.log(el);
// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function arr (s) {
//     const str = s.split(" ").reduce((acc, el) => {
//         if(acc.length > el.length) {
//             return el
//         }
//         return acc
//     })
//     return str.length
// }

// console.log(arr("Marlen", "Asa"));



// var isFrozen = function (n) {
//     if(Number.isFinite(Math.sqrt(n))) {
//         return true
//     }
//     return false
// }

// console.log(isFrozen());





// function getSum(a, b) {
//   if (a === b) {
//     return a || b;
//   }
//   if (a > 0 && a > b && b > 0) {
//     let sum = 0;
//     for (let i = b; i <= a; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//   if (b < 0 && b < a) {
//     let sum = 0;
//     for (let i = a; i >= b; i--) {
//       sum += i;
//     }
//     return sum;
//   }
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(getSum(-5, -1));



// break
// continue





////////////////////////////////////////////////////////////////////////////////////
//Замыкание
////////////////////////////////////////////////////////////////////////////////////

// function createCounter () {
//     let count = 0

//     return function () {
//         count++;
//         return count
//     }
// }

// const arr4 = createCounter()

// arr4()
// arr4()
// arr4()
// arr4()
// arr4()
// arr4()
// arr4()

// console.log(arr4());



// Создайте функцию для работы с приватными переменными,
// используя замыкание. Функция должна позволять устанавливать значение переменной и получать его.

// function createPrivateVariable(initialValue) {
//     // Ваш код здесь
//     let data = initialValue

//     return {
//         getValue: function () {
//             return data
//         },
//         setValue: function(newData) {
//             data = newData
//             return 
//         }
//     }
// }


// const privateVar = createPrivateVariable(10);
// console.log(privateVar.getValue()); // 10
// privateVar.setValue(20);
// console.log(privateVar.getValue()); // 20


// Напишите функцию, которая использует замыкание для создания таймера. 
//Функция должна принимать время (в миллисекундах) и текст,
// а затем через указанное время выводить этот текст в консоль.

// function createTimer(time, text) {
//     // Ваш код здесь
//     return function () {
//         setTimeout(function() {
//             console.log(text);
//         }, time)
//         return "Podojdite"
//     }

// }

// const timer = createTimer(2000, "Прошло 2 секунды");
// console.log(timer());

// Через 2 секунды должно быть выведено сообщение "Прошло 2 секунды"


// Напишите функцию, которая возвращает другую функцию для подсчета количества вызовов.
// Внешняя функция должна инициализировать счетчик в 0 и возвращать внутреннюю функцию,
// которая увеличивает счетчик на 1 при каждом вызове.

// function createCounter() {
//     // Ваш код здесь

//     return function (sum) {
//         return sum
//     }

// }

// const counter = createCounter();
// counter()
// counter()
// counter()
// console.log(counter(1)); // 1
// console.log(counter(2)); // 2
// console.log(counter(3)); // 3


// Напишите функцию, которая создает замыкание и возвращает другую функцию.
// Внешняя функция должна принимать аргумент и передавать его внутренней функции.
// Внутренняя функция должна сохранять переданный аргумент и выводить его в консоль.

// function createClosure() {
//     // Ваш код здесь

//     return function (data) {
//         return data
//     }
// }


// const closure = createClosure();
// closure(10); // должно вывести 10
// console.log(closure(100));
// closure(20); // должно вывести 20
// console.log(closure(200));




// const createCounter = () => {
//     let count = 0

//     return {
//         incremment: function() {
//             count++
//             return count
//         },
//         decremment: function () {
//             count--;
//             return count
//         }
//     }
// }

// const counter = createCounter()

// console.log(counter.incremment());
// console.log(counter.incremment());
// console.log(counter.decremment());



//////////////////////////////////////////////////////
//Рекурсия - это функсция которая вызывветь само себя в своем теле
/////////////////////////////////////////////////////


// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16


// function pow(x, n) {
//   let result = 1;

//   // умножаем result на x n раз в цикле
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// alert( pow(2, 3) ); // 8



// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// alert( pow(1, 2, 3, 4, 5) ); // 8



// function pow (a, b) {
//     if(b == 1) {
//         return a
//     }
//     return a * pow(a, b -1)
// }

// console.log(pow(5, 5));




// function arr (number) {
//     return number.reduce((acc, el) => {
//         return acc + el
//     })
// }

// console.log(arr([1, 2, 3, 4, 5, 7, 8, 9]));
// console.log(arr([10, 20, 30, 40, 50]));




// const  arr =  (numbers) =>{
//     if(numbers.length === 1) {
//         return numbers[0]
//     }
//     return numbers[0] +arr(numbers.slice(1))
// }


// console.log(arr([1, 2, 3, 4, 5, 7, 8, 9]));
// console.log(arr([10, 20, 30, 40, 50]));




// function factorial (n) {
//     if(n == 1) {
//         return n
//     } 
//         return n * factorial(n -1)


// }
// alert(factorial(5));




// Vadani
// function arr (a) {
//     if(a == 1) {
//         return a
//     }
//     return a + arr(a -1)
// }

// alert(arr(10));




//Напишите рекурсивную функцию для проверки, является ли число четным.
// const  arr =  (numbers) =>{
//     if(numbers == 1 || numbers == -1) {
//         return  false
//     }
//     if(numbers > 0) {
//         return arr (numbers -2)
//     }
//     if(numbers < 0) {
//         return arr (numbers - -2)
//     }
//     return true
// }

// console.log(arr(6));



//// Напишите рекурсивную функцию для вычисления факториала числа.
// function factorial (n) {
//     if(n == 1) {
//         return n
//     } 
//         return n * factorial(n -1)


// }
// alert(factorial(5));


// Напишите рекурсивную функцию для нахождения суммы всех элементов массива.
// const  arr =  (numbers) =>{                   
//     if(numbers.length === 1) {
//         return numbers[0]
//     }
//     return numbers[0] +arr(numbers.slice(1))
// }


// console.log(arr([1, 2, 3, 4, 5, 7, 8, 9]));



// Напишите рекурсивную функцию для нахождения наибольшего числа в массиве.
// function arr(n){
//   if(n.length > 2){
//     const e = n[0];
//     n.splice(0, 1);
//     return arr([e, arr(n)])
//   } else {Чем являются функции в js?
// JavaScript функции являются объектами первого класса, то есть: они являются объектами и с ними можно взаимодействовать и передавать их точно так же как любой другой объект. Если быть точным, функции — это объекты Function . Больше подробностей и примеров можно найти в руководстве по функциям в JavaScript
//     return n[0] >= n[1] ? n[0] : n[1]
//   }
// }
// console.log(arr([1, 2, 3, 4, 5, 7, 8, 9]));


// Напишите рекурсивную функцию для нахождения наименьшего числа в массиве.
// function arr(n){
//   if(n.length < 2){
//     const e = n[0];
//     n.splice(0, 1);
//     return arr([e, arr(n)])
//   } else {
//     return n[0] <= n[1] ? n[0] : n[1]
//   }
// }
// console.log(arr([1, 2, 3, 4, 5, 7, 8, 9]));



// Напишите рекурсивную функцию для проверки, является ли строка палиндромом

// function isPalindrome(str) {
//     str = str.toLowerCase().replace("");
//     if (str.length <= 1) {
//       return true;
//     }
//     if (str[0] !== str[str.length - 1]) {
//       return false; 
//     }
//     return isPalindrome(str.slice( 1,str.length - 1));
//   }
//   console.log(isPalindrome("Aziza")); 
//   console.log(isPalindrome("Hello"));

// Напишите рекурсивную функцию для нахождения наибольшего общего делителя двух чисел.
// function arr(n){
//   if(n.length > 2){
//     const e = n[0];
//     n.splice(0, 1);
//     return arr([e, arr(n)])
//   } else {
//     return n[0] >= n[1] ? n[0] : n[1]
//   }
// }
// console.log(arr([1, 2, 3, 4, 5, 7, 8, 9]));


// Напишите рекурсивную функцию для проверки, является ли число четным.
// const rew = (n)=>{
// if (n == 1 || n == - 1){
//     return false
// }
// if (n >0){
//     return rew ( n - 2)
// }
// if(n < 0){
//     return rew(n - - 2)
// }
// return true
// }
// console.log(rew(10));
// console.log(rew(6));


// Напишите рекурсивную функцию для нахождения суммы цифр числа.
// const  arr =  (numbers) =>{
//     if(numbers.length === 1) {
//         return numbers[0]
//     }
//     return numbers[0] +arr(numbers.slice(1))
// }


// console.log(arr([1, 2, 3, 4, 5, 7, 8, 9]));


// Напишите рекурсивную функцию для обратного вывода строки.
// function few(str) {
//     if (str === "") {
//       return "";
//     }
//     const wer = str.charAt(0);
//     const rew = str.substring(1);
//     return few(rew) + wer;
//   }
//   const sub = "Hello, World!";
//   const reversedString = few(sub);
//   console.log(reversedString);

// Напишите рекурсивную функцию для нахождения всех перестановок строки.
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log( pow(5, 5) )


// Напишите рекурсивную функцию для проверки, является ли число простым.
// const rew = (n)=>{
// if (n == 1 || n == - 1){
//     console.log(" не является");
// }
// if (n >0){
//     return rew ( n - 2)
// }
// if(n < 0){
//     return rew(n - -  2)
// }
//  console.log("является");
// }
// console.log(rew(10));
// console.log(rew(6));

// Напишите рекурсивную функцию для возведения числа в степень.
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log( pow(2, 3) ); 

// Напишите рекурсивную функцию для нахождения N-го числа Фибоначчи.
// function arr (n) {
//     if(n<1) {
//         return 0
//     }
//     if(n>2) {
//         return 1
//     }
//     return arr(n -2) + arr(- 1)
// }
// console.log(arr(5));


// Напишите рекурсивную функцию для нахождения наибольшего элемента в дереве.
// function minNumberArrayRec(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   } else if (arr[0] > arr[1]) {
//     return minNumberArrayRec(arr.slice(1));
//   } else {
//     return minNumberArrayRec([arr[0]].concat(arr.slice(2)));
//   }
// }

// console.log(minNumberArrayRec("Marlen"));

// Напишите рекурсивную функцию для сортировки массива методом "разделяй и властвуй" (например, сортировка слиянием).
// Напишите рекурсивную функцию для нахождения всех путей в графе от одной вершины к другой.
// Напишите рекурсивную функцию для нахождения всех подмножеств заданного множества.
// Напишите рекурсивную функцию для нахождения всех возможных комбинаций заданного набора элементов.
// Напишите рекурсивную функцию для решения головоломки "Ханойские башни" с использованием трех штырей.

// function is (num) {
//     return (num %2 === 0) ? "Четный" : "Нечотный"
// }
// console.log(is(6));


// function arr (name) {
//     return name
// }

// console.log(arr("Marlen"));



////////////////
//Цикл
////////////////




//  for, while, do...waill,  for...in,  for...of
// i = i + 1,   // i += 1

////////////////////////////////////////////////////////
// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }


/////////////////////////////////////////////////////////
// let a = 0;

// while(a <= 5) {
//     console.log(a);
//     a++
// }

// //////////////////////////////////////////////////
// let arr = '';

// while(arr.length < 5) {
//     const res = prompt("Введите буквы") 
//     if(res.length === 0) {
//         continue;
//     }
//     arr = arr + res
//     console.log(arr);
// }

// ////////////////////////////////////////////////
//  let arr = 0
// do {
//     console.log(arr);
//     arr++
// } while (arr <= 3)




// let a = 0;

// while(a <= 3) {
//     console.log(a);
//     a++
// }


//////////////////////////////////////////////////////////
// const arr = ['a', 'b', 'c']

// for(let lettter of arr) {
//     console.log("letter", lettter);
// // }
////////////////////
// let a = 0;

// while(a <= 5) {
//     console.log(a);
//     a++
// }

// //////////////////////////////////////////////////
// let arr = '';

// while(arr.length < 5) {
//     const res = prompt("Введите буквы") 
//     if(res.length === 0) {
//         continue;
//     }
//     arr = arr + res
//     console.log(arr);
// }

// // ////////////////////////////////////////////////
//  let arr = 0
// do {
//     console.log(arr);
//     arr++
// } while (arr <= 3)




// let a = 0;

// while(a < 3) {
//     console.log(a);
//     a++
// }


//////////////////////////////////////////////////////////
// const arr = ['a', 'b', 'c']

// for(let lettter of arr) {
//     console.log("letter", lettter);
// }




// const arr = {
//     name: "Marlen",
//     age: 15,
//    metr: 1.66
// }

// for(let a in arr) {
//     console.log(a, arr[a]);
// }



//////////////////////////////////////////////////////////////////////
// const arr = prompt("Введите буквы")
// const e = Number[input]

// for(let i = 1; i <= 10 ; i++) {
//     console.log(e + " * " + i + " = " + i*e);
// }





// function arr (number) {
//     if(number < 10) {
//         return "0" + number
//     }
//     return number
// }



// function getCurrentTim() {
// const date = new Date()
// let hour = date.getHours()
// let min = date.getMinutes()
// let sec = date.getSeconds()
// if(sec < 10) sec = "0" + sec
// if(min < 10) min = "0" + min
// if(hour < 10 ) hour = "0" + hour



// const aee = `${hour}:${min}:${sec}`
// return aee
// }


// console.log(getCurrentTim());



// 17. Определение четных чисел в массиве:
//     ◦ Напишите функцию getEvenNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
// function getEvenNumbers(number) {
// return number.filter((el) => {
//     return el %2 === 0
// })
// } 

// console.log(getEvenNumbers([1,3, 4]));

// 18. Сложение элементов массива:
//     ◦ Напишите функцию sumArray, которая принимает массив чисел и возвращает их сумму.
// function sumArray(number) {
//     return number.reduce((acc, el) => {
//         return acc + el
//     })
// }

// console.log(sumArray([1,2 ,3 , 5]));

// 19. Проверка на пустоту:
//     ◦ Напишите функцию isEmpty, которая принимает массив или строку и возвращает true, если они пусты, и false в противном случае.
// const order = {};
// function isEmptyObj(object) {
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isEmptyObj(order));


// 20. Определение наличия свойства в объекте:
//     ◦ Напишите функцию isObjectPropertyPresent, которая принимает объект и свойство, и возвращает true, если свойство присутствует в объекте, и false в противном случае.
// const order = {};
// function isEmptyObj(object) {
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isEmptyObj(order));

// 21. Объединение объектов:
//     ◦ Напишите функцию mergeObjects, которая принимает два объекта и возвращает новый объект, содержащий свойства из обоих объектов.


// 22. Проверка числа на положительность:
//     ◦ Напишите функцию isPositiveNumber, которая принимает число и возвращает true, если оно положительное, и false в противном случае.
// function isEven(number) {
//   let x = Boolean();
//   if (number % 2 == 0) {
//     return  true
//   } else {
//     return false
//   }

// }

// console.log(isEven(-10));

// 23. Получение последнего элемента массива:
//     ◦ Напишите функцию getLastElement, которая принимает массив и возвращает его последний элемент.
// function getLastElement(a) {
// if(a.legnth === -1) {
//     return a[0]
// } else {
//     return a[5]
// }
// }

// console.log(getLastElement("Marlen"));

// 24. Сортировка массива:
//     ◦ Напишите функцию sortArray, которая принимает массив чисел и возвращает новый массив с отсортированными значениями.

// 25. Получение длины объекта:
//     ◦ Напишите функцию getObjectLength, которая принимает объект и возвращает количество его свойств.
// function getObjectLength(numbers) {
//     return  {
//         name: "Marlen",
//     }
// }

// console.log(getObjectLength.length);

// 26. Генерация уникального идентификатора:
//     ◦ Напишите функцию generateUniqueId, 
//которая возвращает уникальный идентификатор (например, случайную строку).
// function generateUniqueId(number){
// return  number = Math.random(toString("marlen","jibek","cholpan"))
// }
// console.log(generateUniqueId());

// 27. Удаление дубликатов из массива:
//     ◦ Напишите функцию removeDuplicates, 
//которая принимает массив и возвращает новый массив без повторяющихся элементов.
// function removeDuplicates(n) {
//     return n.map((el) => {
//         return el
//     })
// } 

// console.log(removeDuplicates([1, 2, 3, 4, 5]));

// 28. Сумма всех аргументов:
// ◦ Напишите функцию sumAllArguments, которая принимает любое количество аргументов и возвращает их сумму.

// function sumAllArguments(number){
// let arr = [...arguments]

// let res = arr.reduce((acc, el) => {
//     return acc + el
// }, 0)
// return res 
// }
// console.log(sumAllArguments(2,3,4,5,4,6,7,8,9));

// 29. Определение наличия ключа в объекте:
//     ◦ Напишите функцию isObjectKeyPresent, которая принимает объект и ключ, 
//и возвращает true, если ключ присутствует в объекте, и false в противном случае.
// function isObjectKeyPresent(obj, key) {
//     return key in obj
// }

// let arr = {
//     name: "Marlen",
//     age: 15
// }

// console.log(isObjectKeyPresent(arr));

// 30. Реверс строки или массива:
//     ◦ Напишите функцию reverseStringOrArray, 
//которая принимает строку или массив и возвращает его в обратном порядке.


// function reverseStringOrArray(str){
//    return str.split('').reverse().join('')
// }
// console.log(reverseStringOrArray('ularbek'));








///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Создайте массив arr с именами пяти друзей, затем выведите эти имена по одному, используя цикл for или while.
// Примерный вывод в консоль:
// let arr = [
// "Paul John ",
// 'George ',
// 'Ringo ',
// 'Yoko',
// ]
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Вам дан массив чисел:
// let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// for(let i = 0; i < arr.length; i++) {
//   if(i < 5) {
//     console.log(arr[i]);
//   }
// }

// выведите поочерёдно в консоль все элементы, которые меньше 5, используя цикл for или while.
// Пример вывода:
// 1 1 
// 2 
// 3


// Создайте массив из чисел arr.
// Напишите цикл for of, который выведет в консоль произведение всех элементов массива.
// Если в переменной arr хранится массив [2, 3, 4, 5]
// Вывод должен быть:
// 120

// т.к. 120 = 2 x 3 x 4 x 5


// let arr = [2, 3, 4, 5]
// let res = 1

// for(let task of arr) {
//     res *= task
// }

// console.log(res);

// Создайте объект в переменной obj.
// С помощью цикла for ... in выведите в консоль строки следующего формата ключ - это значение.
// Если в перемнной obj хранится такой объект:
// {'Бишкек': 'Кыргызстан',
// 'Минск': 'Беларусь', 
// 'Москва': 'Росси


// 'Киев': 'Украина'
// }

// То ваш цикл должен вывести в консоль:
// Бишкек - это Кыргызстан
// Минск - это Беларусь
// ...


//  let obj = {'Бишкек': 'Кыргызстан',
//  'Минск': 'Беларусь', 
//  'Москва': 'Россия',
//  'Киев': 'Украина'
//  }
//   for(let i in obj){

//   }
//      console.log(obj.Бишкек);
//      console.log(obj.Минск);




// Создайте 2 массива arr1 и arr2 с числами.
// С помощью цикла for ... of, объедините их вместе и выведите в консоль объединенный массив в одном console.log.
// Если в перемнной arr1 хранится массив [1, 2, 3] а в arr2 [4, 5, 6]
// Вывод должен быть:
// [ 1, 2, 3, 4, 5, 6 ]
// let arr = [1, 2, 3]
// let arr1 = [,4, 5, 6]
// for(let i of arr1){
// console.log(arr + arr1);
// }

// Использовать метод concat - нельзя

// Создайте массив из чисел arr.
// С помощью цикла for ... of и оператора if посчитайте сумму
// чётных элементов массива и выведите результат в консоль.
// Например, если к переменной arr присвоено данное значение: [2, 5, 9, 15, 0, 4]
// Вывод должен быть:
// 6


// т.к. 6 = 2 + 0 + 4

// let arr = [2, 5, 9, 15, 0, 4]
//    let sum = 0
// for(let i of arr){

//     if(i % 2 === 0 ){
//     sum +=i 
//     }
//     console.log(sum);
// }







// Task 1 Нам дана функция checkTask(arr) которая принимает массив с объектами с ключами name. 
//Нужно перебрать этот массив так, чтобы функция нам вернула просто массив с именами в виде строк.

// // Пример: Дан массив:


//     let arr = [
// {
//  name: 'Sultan',
//  },
//  {
//  name: 'Islam',
// },
//  {
// name: 'Taalai',
// },
//  {
//      name: 'Eldar',
//  },
// ]

// let res = []

// for(let i in arr) {
//    res.push(arr[i].name);
// }

// console.log(res);

// function declaration
// function check (a) {

// }
// check(3)


// ! arrow function
// const check = () => {

// }
// check()


// function expression

// let check = function (a,b) {
//     console.log(a + b);
// }
// check(2,3)


// Task 2
// // Есть массив с числами let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]. Составьте программу, 
//которая определяет кол-во отрицательных, кол-во положительных и кол-во нулей в массиве.
// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]
// let arr1 = []
// let res1 = []
// let res = arr.map((el) => {
//     if(el < 0) {
//      arr1.push(el)
//     } else {
//         res1.push(el)
//     }
// })

// console.log(arr1, res1);

// Task 3
// Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления
// не станет меньше 50. Какое число получится?
// // Посчитайте количество итераций, необходимых
// для этого (итерация - это проход цикла), и запишите его в переменную num.
// let n = 1000
// let res 
// for(res = 0;n >= 50; n++ ){
//  n /= 2
// }
// console.log(n);
// console.log(res);

// //Task 4
//  Даны числа от 35 до 87. Найти и напечатать те из них, 
//которые при делении на 7 дают остаток 1, 2 или 5.

//   for(let i = 35; i<= 87; i++){
//      if(i % 7 === 5){
//         console.log(i);
//      }else if(i % 7 === 2){
//         console.log(i);
//      }else if( i % 7 === 1){
//         console.log(i);
//      }

//   }


// //Task 5
// Даны 3 числа при помощи условных и логических операторов выведите наибольшее,
//  также учтите вариант, что числа могут быть равны
// let num1 = +prompt("Введите любой число");
// let num2 = +prompt("Введите любой число");
// let num3 = +prompt("Введите любой число");

// if(num1 > num2 && num1 > num3 ) {
//     console.log(num1);
// } else if(num2 > num1 && num2 > num3 ) {
//     console.log(num2);
// } else if(num3 > num1 && num3 > num2 ) {
//     console.log(num3);
// }


// if (num1 >= num2 && num2 <= num3 || num3 === num2) {
//     console.log("");
// } 




// function isPrime(element, index, array) {
//   var start = 2;
//   while (start <= Math.sqrt(element)) {
//     if (element % start++ < 1) {
//       return false;
//     }
//   }
//   return element > 1;
// }

// console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
// console.log([4, 5, 8, 12].find(isPrime)); // 5




// let arr = 9

// if(arr < 5) {
//     console.log("садик");
// } else if(arr < 10) {
//     console.log("школа");
// } else {
//     console.log("Универ");
// }



// let res = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// res.splice(1, 0, "Jibek")
// res.splice(5, 0, "Nuraiym")
// res.splice(11, 0, "Cholpan")

// console.log(res);





// function res (number) {
//     return number.sort((a, b) => {
//         return a - b
//     })
// }

// console.log(res([2, 1, 4, 3, 1, 6, 3, 4]));


// for(var i=0; i<10; i++) {
//   setTimeout(function() {
//     alert(i);
//   }, 100);
// }








// let array = ["kiwi", "kiwi", "pipler"];

// for (let i = 0; i < array.length; i++) {
//   let currentValue = array[i];

//   let firstIndex = array.indexOf(currentValue, i + 1);

//   if (firstIndex !== -1) {
//     array.

// splice(firstIndex, 1);
//     i--;
//   }
// }

// console.log(array);



// // 1. Сколько раз каждый элемент встречается в массиве:
// // {kiwi: 3, apple: 2, orange: 1}

// const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

// function task1 (arr) {
//     const restask1 = {}

//     arr.forEach((el) => {
//         if(res.hasOwnProperty(el)) {
//             res[el]++;
//         } else {
//             res[el] = 1;
//         }
//     })
//     return res;
// }

// console.log(task1(fruits));


// // 2. Создать массив который содержит только уникальные значения 
// // ['kiwi', 'apple', 'orange']

// const myFruits = ["kiwi", "apple", "kiwi", "kiwi", "orange", "kiwi", "apple"];

// function getOwnPropertyDescriptors (arr) {
//     const arguments = []

//     for(let i = 0; i < arr.length; i++) {
//    if(arguments.includes(arr[i])) {
//     continue
//    }
//    arguments.push(arr[i])
//     }
//     return arguments
// }

// console.log(getOwnPropertyDescriptors(myFruits));



// // 3. Создать функцию, которая сгруппирует студентов по возрасту.
// // На выходе получить объект, где ключ - возраст,
// // а значение - массив студентов
// // {
// //   '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
// //   '24': [{ name: 'mike', age: 24 }],
// //   '18': [{ name: 'stas', age: 18 }],
// // }
// const students = [
//   { name: "alex", age: 20 },
//   { name: "mike", age: 24 },
//   { name: "masha", age: 20 },
//   { name: "stas", age: 18 },
// ];


// function re (n) {
//  const res = []

//     students.forEach((student) => {
//     if(res.hasOwnProperty(student.age)) {
//         res[student.age].push(student)
//     } else {
//         res[student.age] = [student]
//     }
// })
//     return res
// }

// console.log(re(students));



// // 4. Написать функцию, которая принимает два аргумента:
// // массив из уникальных целых чисел и сумму в виде целого числа.
// // Если сумма двух любых чисел массива из аргумента равна числу,
// // которое приходит вторым аргументом, функция должна
// // вернуть новый массив из этих двух чисел в любом порядке.
// // Если решения нет, вернуть пустой массив.

// // [-1, 11] или [11, -1] - так как -1 + 11 = 10;



// // 6. Записать строку (символы строки) в обратном порядке (2 способа)
// // pizza => azzip

// let res = "pizza"
// let arr = res.split("").reverse().join(" ")
// console.log(arr);




