"use strict";

// This

// 1) Обычная функция: this = window, но если use strict - undefined

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);


// 2) Контекст у методов обьекта - сам обьект
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout(); // 1 пункт
//     }
// };
// obj.sum();

// 3) this в конструкторах и классах - это новый экземпляр обьекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`); // this ссылается на обьект ivan
//     };
// }
// let ivan = new User("Ivan", 23);

// 4) Ручная привязка this: call, apply, bind

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: "John"  
// };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); // Новая функция с привязанным контекстом
// console.log(double(3));
// console.log(double(13));

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => { // В случае function() - контекст вызова - сам елемент, в этом случае имеем доступ к this (this.style.backgroundColor)
    e.target.style.backgroundColor = "red";
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => { // Стрелочная функция берет контекст у родителя, у нее нету своего контекста
            console.log(this.num); // Ссылается на obj, так как sayNumber ссылается на obj
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2; // Если помещается в одну строку - можно так сократить (a (функция) принимает 1 аргумент - можно без скобок)

console.log(double(4));