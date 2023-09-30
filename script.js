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

//8. symbol -  символь


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

// .console.log(a);

// var a = "heloo"



// FUNTION & IF ELSE 


// FUNTION DECLERATTION

// function foo(a, b) {
//     console.log(a)

//     return a+b ;


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

// const name = "Marlen"

// if (name.length > 5) {
//     console.log(thue);
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
// console.log(playBanjo("Marlen"));

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
// console.log(a[length.a -1]);


 /////////////////////////////////////////////////////////////////////////////////                                                                                                                                                                                                                         
// function getName (name) {
//     return `men zavut ${name}`;
// }
// console.log(getName("Name"));


///////////////////////////////////////////////////////////////////////////////////
// function Marlen (a, b) {
// return a+b;
// }
// console.log(Marlen(2, 5))


////////////////////////////////////////////////////////////////////////////////////
// function Mar (number) {
//   if (number % 2===0) {
//   return ("Четный")
//   }
// return("Нечетный")
// }
// console.log(Mar(4))




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
// console.log(txt.replace("Mar", "bolsun"));
// console.log(txt.replace("len", "Mar"));

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
// console.log(jok(12));



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


// const str = "Motion Web It Acedemy";
// console.log(str.split("").reverse().join(""));



// function Marlen(name) {
//     return name.toLowerCase () === name.toLowerCase().split("").reverse().join("")
// }
// console.log(Marlen("Aziza"));



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
    //     return el > 100
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
// // const a =numbers.map((el) => {
// // return el *5;
// // })

// // console.log(a);



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
// const b = names.map((el, index ) => {
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
// indexedDB
// substring
// includes
// toUpperCase
// toLpperCase
// endsWith
// startWith
// indexOf
// Math.ads()
// Math.ceol()
// Math.floor()
// Math.round()
// Math.pow()
// Math.sqrt()
// Math.random
// replace
// join



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

// console.log(task4([1, 2, 3,4 ,5, 6, 7, 8, 9]));


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
//         return el [0].toLowerCase() =="b"
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

// function tasl1 (numbers) {
//     return numbers.filter((el) => {
//         return  el > 5 && el %2 === 0
//     })
// }
// console.log(tasl1([2, 4, 6, 7, 8, 10, 11]));




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
// 21) Напишите функцию, которая принимает массив строк и возвращает первую строку определенной длины. const words = ['apple', 'banana', 'cherry', 'date'];
// 22) Напишите функцию, которая принимает массив чисел и возвращает первое положительное число из массива. const numbers = [-2, -1, 0, 3, 5, 7];
// 23) Напишите функцию, которая принимает массив строк и возвращает первый элемент, начинающийся с определенной буквы. const words = ['apple', 'banana', 'cherry', 'date'];



    





// function task1 (arr) {
// const res = arr.map((el) => {
//     const splitedName = el.split("");
//     const result = splitedName.map((letter, index ) => {
//         if (index %2 ===0) {
//             return letter.toUpperCase()
//         }
//         return letter.toLowerCase()
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
//     console.log("");
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



// console.log(!true && true);\





//pop
//push
//shift
//unshift
//spice
//slice
//join
//split