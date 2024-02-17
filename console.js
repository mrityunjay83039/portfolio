// // console.log(2 + '2' - '2');

// // console.log(typeof typeof 1);

// // console.log(3 > 2 > 1);

// let a = [1, 2, 3];
// let b = [1, 2, 3];
// console.log(a == b, a === b);

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//  setTimeout(function() {
//    console.log('Index: ' + i + ', element: ' + arr[i]);
//  }, 3000);
// }

// Index:  3 , element: 21
// Index:  3 , element: 21
// Index:  3 , element: 21
// Index:  3 , element: 21

// let a = { x: 1 };
// let b = a;         /// {x: 1}

// b.x = 2;            // {x: 2}
// console.log(a.x);  // 2

// const array = [1, 2, 3, 4];  // sum

// let result = array.reduce((sum, curr)=>{
//     return sum + curr;
// })

// console.log(result);

const employee = {
  name: "Alice",
  age: 30,
  position: "Developer",
};

const colors = ["red", "blue", "green"];

const {name, age, position} = employee;
const [red, blue, green] = colors;

console.log(`${name}, ${age}, ${red}, ${blue}`);

// output - Alice, 30, red, blue;
