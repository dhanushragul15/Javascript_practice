// Function  : Re-usable code -block; Unit of Logic;

// 1.Regula function :

// function <functionName>(parameter1, parameter2){
// Logic
// return <return value>
// }

// fibonacci number in function

// function fib(n){
//     if (n == 1) {
//         return 0;
//     }

//     if (n == 2){
//         return 1;
//     }

//     return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(5));

// // 2. Anonymous Function

// const f = function(x, y){
//     return x + y;
// }

// // 3.Arrow Function

// const t = (x, y) => {
//     return x + y;
// }

// sayHello();
// Here we are able to call the function before definition because of function hoisting

// function SayHello(){
// console.log("hello")
// }

// function sayHello(name){
//     console.log(`Hello, ${name}!`);
// }
// sayHello("Ragul");

// function sayHello(name, gender){
//     console.log(`Hello ${gender == 'male' ? "Mr,"}`)
// }

// const teacher_data = {
//     name :"Arun" ,
//     students : [
//         {
//             id : 1,
//             name : "Kiran",
//             present : true
//         },
//         {
//             id : 2,
//             name : "Vimal",
//             present : false
//         },
//         {
//             id : 3,
//             name : "tarun",
//             present : true
//         },
//         {
//             id : 4,
//             name : "Reshmi",
//             present : true
//         },

//     ]
// }
// function capitalize(string){
//     return `${string[0].toupperCase()}${string.slice(1,string.length)}`;
// }

// function sayHello(data){
//     let teacher = data.name;
//     let students = data.students.filter((student) => student.present);
//     data.student.forEach((student) => student.name = capitalize(student.name));

//     let message = `Hi ${teacher}, the following students are waiting for you :`;
//     for(let [index, student] of student.entries()){
//         if(index == student.length - 1){
//             message += `and ${student.name}.`;
//         } else {
//             message += `${student.name},`;
//         }
//     }
//     console.log(message);
// }

// sayHello(teacher_data);

// paslindrome
function reverseNum(num) {
    let last_digit, reverse = 0;
    while (num > 0) {
        last_digit = num % 10;
        reverse = (reverse * 10) + last_digit;
        num = Math.floor(num / 10);
    }
    return reverse;
}
function isPalindrome(num) {
    return num == reverseNum(num);
}

console.log(isPalindrome(12321));

// Defaul Parameter

function sum(a, b = 10) {
    return a + b;
}

console.log(sum(5));

