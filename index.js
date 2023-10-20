// function add(a, b, callback){
//     console.log(a+b);
//     callback();
// }
// function display() {
//     console.log('Callback function ichi');
// }

// add(4, 5, display);

// let arr = [1, 2, 3, 4, 5];

// // arr.splice(1, 0, 6, 7, 8);
// // arr.splice(1, 2, 6, 7, 8);
// // arr.splice(1, 4);

// console.log(arr);

// 1)

// const myArray = [1, 3, 2, 'apple', 'IELTS'];
// function deleteFromArray(array, number) {
//     if (array.length < number ){
//         console.log('Number is greater than array.length');
//     }
//     array.splice(2, number);

//     console.log(array);
// }
//  console.log(deleteFromArray(myArray, 2));

// 2)

// const array1 = [0, 1, 2, 5];
// const array2 = ['banana', 'apple', 'iphone', 'USA', 'UK'];

// function addArray(array1, array2){
//     if ( array1.length > array2.length){
//        return array1.concat(array2);
//     } else {
//         return array2.concat(array1);
//     }
// }
// let res =addArray(array1, array2)
// console.log(res);

// 3)

const arr = [1, 2, 3, 4, 5, 6];

function changeArray(array) {
  let firstD = 0;
  let lastD = array.length - 1;
  while (firstD < lastD) {
    const res = array[firstD];
    array[firstD] = array[lastD];
    array[lastD] = res;
    firstD++;
    lastD--;
  }
}
changeArray(arr);
console.log(arr);
