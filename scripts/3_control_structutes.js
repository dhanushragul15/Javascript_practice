// // Control Structure  -> Programming paradingms which control flow of execution

// // 1. Condition
// // 1. if

// // const AGE_LIMIT = 18;
// // let age = 17;
// // if(age >= AGE_LIMIT){
// //     console.log("Yeay, you can drive");
// // }

// // // 2. if...else

// // let userAuthenticated = true;
// // if (userAuthenticated) {
// //     console.log("Welcome to your profile");
// // } else {
// //     console.log("Please login to continue....");
// // }

// // // 3. else if

// // const heavy_driving_age_limit = 21;
// // age = 30;
// // if (age >= heavy_driving_age_limit){
// //     console.log("you can drive trucks");
// // } else if (age >= AGE_LIMIT){
// //     console.log("you can drive car");
// // } else{
// //     console.log("you can ride cycle");
// // }

// // // 4. Nested if

// // let Age = 30;
// // let haslicence = true;

// // if (Age >= 18){
// //     if (haslicence){
// //         console.log("you can drive a car");
// //     } else {
// //         console.log("you need to get a licance");
// //     }
// // } else {
// //     console.log(`you can drive in ${18 - Age} yeard.`);
// // }

// // // smplifying the above, we can also write
// // if(Age >= 18 && haslicence){
// //     console.log("you can drive");
// // }

// //  Falsy valuse
// // 1. false
// // 2. 0
// // 3. -0
// // 4. 0n
// // 5. ""
// // 6. null
// // 7. understand
// // 8. NaN

// // 5. switch - matching one variable against multiple fixed values

// // let menu =`
// // Welcome
// // 1.Balance
// // 2.Data
// // 3.Recharge
// // 0.Eixt
// // `
// // let chioce = prompt(menu);
// // let balance = 20;
// // let data_balance = 200;
// // chioce = Number(chioce)
// // switch (chioce){
// //     case 1:
// //         console.log(`you have Rs.${balance} in your talktime`);
// //         break;
// //     case 2:
// //         console.log(`you have ${data_balance} MB left`);
// //         break;
// //     case 3:
// //         console.log(`please go to the nearest store.`);
// //         break;
// //     case 0:
// //         console.log("thank you for viviting us .\nBye");
// //         break;
// //     default:
// //         console.log(`chack your input`);
// //         break;
// // }

// // 2.Loops - Repeated Excution of code block

// // for loop

// // for (expr1; expr2; expr3){
// //        code block;
// // }

// // expr1 :> Executes once before first iteration
// // - Usually used for counter variable initialization
// // expr1 :> Executes before started each iteration
// // - Usually used for checking termination condition
// // expr1 :> Executes after each iteration
// // - Usually used for increment/decrement on counter variable

// // printing 1 - 5

// // for(i=1; i<=5; i++){
// //     console.log(i);
// // }

// // for(let i = 1; i<=5;){
// //     console.log(i++);
// // }

// // for(let i = 1; ; ) {
// //     console.log(i++);

// //     if (i > 5){
// //         break;
// //     }
// // }

// // // *
// // // * *
// // // * * *
// // // * * * *
// // // * * * * *
// // for (let i = 1; i <=5; i++){
// //     row ="";
// //     for (let j = 1; j<=i; j++){
// //         row += "* ";
// //     }
// //     console.log(row);
// // }

// // for (let i = 1; i <= 5; i++){
// //     console.log(`* `.repeat(i));
// // }

// // //         *
// // //       * *
// // //     * * *
// // //   * * * *
// // // * * * * *

// // for (let i = 1; i <= 5; i++){
// //     console.log('  '.repeat(5 - i) + `* `.repeat(i));
// // }

// //     *  
// //    * *
// //   * * *
// //  * * * *
// // * * * * *
// //  * * * *
// //   * * *
// //    * *
// //     *  

// // for (let row = 1; i < 10; row++){
// //     if (row < 5){
// //         console.log("  ".repeat(5-row) + "* ".repeat(row));
// //     } else {
// //         console.log("  ".repeat(row-5) + "* ".repeat(10-row));
// //     }
// // }

// // const students = [
// //     'abhay',
// //     'sujay',
// //     'vijay'
// // ]
// // students.push("siraj");

// // console.log(students);

// // // print all students with serial number alongside.

// // for (let i = 0; i < students.length; i++){
// //     console.log(`${i + 1} - ${students[i]}`);
// // }

// // for (let student of students){
// //     console.log(student);
// // }

// // for (let [student_index, student] of students.entries()){
// //     console.log(`${student_index + 1} - ${student}`);
// // }

// // for (let student_index in students){
// //     console.log(`${parseInt(student_index) + 1} - ${students[student_index]}`);
// // }


// // While loop
// //  while (truth value){
// //   code block
// // }

// // let i = 1;
// // while(i <= 10){
// //     console.log(i++);
// // }

// // let students = [
// //     'akassh' ,
// //     'prakash' ,
// //     'prabhas'
// // ]

// // while(students.length != 0){
// //     console.log(students.pop());
// // }

// // do while loop
// // do{
// //    code block
// // }
// // while (truth_value)

// // fine factorial

// // let's find the factorial of 5

// // let [fact, n] = [1, 5];
// // fact = 1;
// //  while(n > 1){
// //     fact *= n--; // fact = fact * n; n = n -1
// //  } 
// //  console.log(fact);

// //  let a1 = [1, 2, 3];
// //  let a2 = [4, 5, 6];

// //  let c = [...a1, ...a2];
// //  console.log(c);

// //  let [a, b, ...rest] = c;
// //  console.log(rest);

// // fibonacci series
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ....

// // fib(n) = fib(n - 1) + fib(n - 2);

// // let n = 5;
// // let [first, second] = [0, 1];
// // let result;
// // for(let count = 0; count < 5; count++){
// //     result = first;
// //     let next = first + second;

// //     first = second;
// //     second = next;
// // }
// // console.log(result);

// //  -----

// // 3.Exception Handling : Exection of ricky code block expecting exceptions

// // Example
// // try {
// //     console.log(x);
// // }
// // catch(e) {
// //     console.log(`Handling the error : ${e}`);
// // }

// function widthdrawMoney(balance, amount) {
//     try {
//         // Ricky code block
//         if (amount <= 0) {
//             throw new error("Amount must be greater then zero");
//         }

//         if (amount > balance) {
//             throw new error("Insufficent Balance")
//         }

//         balance -= amount;
//         console.log(`Your withdrawal of Rs.${amount} was successful.
//         Balance is Rs.${balance}`);
//     }
//     catch (err) {
//         // error handling
//         console.log(`Transaction Failed ! ${err}`);
//     }
//     finally {
//         // clean-up
//         console.log("Thank you !!!")
//     }
// }
// widthdrawMoney(balance = 3000, amount = 2000);