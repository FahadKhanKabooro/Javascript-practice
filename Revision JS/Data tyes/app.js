// let age = 25;
// age = 'twenty five';
// console.log(age);


// primitive data types => Sirf Single value store kr sakte ho
// 1.Number
// let age = 25;
// let temp = -25;
// let price = 50.47;

// 2 String 
// let name = 'Haseeb';

// 3 Boolean
//  TRue / False
// let isLoggedIn = true;
// let hasPerssiom = false;

// 4 undefined
// let age ;
// console.log(age)

// 5 BigInt

// 6 Symbol

// Unique

// 7 Structural type 
// Object
// 1 Function => Non Data Structure > Call BAck /Callable 
// 2 Arrays => collection of values [1,2,3,4...], [names,letters and any strings]
// const array = [123,'names',true,44.4566]
// console.log(array)

// 3 Maps => keys and value Pairs like 
//  4 Set only unique values stored from collections or arrays
// 5 Dates
// 6 Structural root
// 7 null is a data type it means a null value



//              New Topic OPERATORS
// 1 . Assignment Operator
// 2 . Compression Operator
// 3. Arithmetic Operator
// 4. Bitwise Operator
// 5. Logical Operators
// 6. String Operators
// 7. Condetional (Ternary) Operators
// 8. Comma Operator
// 9. Unary Operators
// 10.Relational Operators

//  Assignment Operator
// let x = 10;
// let y ;
// y = x;
// console.log(y) Compound operator
// let x = 10;
// let y = 20;
// x = x + y;
// console.log(x);

//  Arithmetic operators
// let x = 10;
// x = x+1;
// x++;
// x--;

// console.log(x**3);

// Logical Operators
// 1 Logical AND &&

// let happy = true && true;
// console.log(happy)
// let happy = true && false;
// console.log(happy)

// let hasLoggedIn = true;
// let hasPermission = true;
// if(hasLoggedIn && hasPermission){
//     // delete item
//     console.log('item is deleted')
// }

// 2 Logical OR ||

// const happy = true || false;
// const happy =  false || true ;
// console.log(happy)

// let hasLoggedIn = true;
// let hasPermission = false;
// if(hasLoggedIn || hasPermission){
//     // delete item
//     console.log('item is deleted')
// }

// 3 Logical Operator Not 

// const happy = true;
// console.log(!happy)

// let hasLoggedIn = true;

// if(!hasLoggedIn){
//     // delete item
//     console.log('Redirect to login page')
// }

// Conditional Operators (ternary Operators)
const userRole = 'admin';

// if (userRole === 'admin'){
//     console.log('wellcome admin')
// } else{
//     console.log('hello guest')
// }
// TErnary Operator
userRole === 'admin' ? console.log('hello Admin') : console.log('hello user');
userRole === 'Admin' ? console.log('hello Admin') : console.log('hello user');


