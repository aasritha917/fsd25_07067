function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0)
}

function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0)
}

function sortAndConcat(arr1, arr2) {
    let sortedArr1 = arr1.slice().sort((a, b) => a - b)
    let sortedArr2 = arr2.slice().sort((a, b) => a - b)
    return sortedArr1.concat(sortedArr2)
}

let arr1 = [15, 42, 8, 23, 74]
let arr2 = [33, 10, 55, 2, 61]

console.log("Filtered Even Numbers (arr1):", filterEvenNumbers(arr1));
console.log("Sum of arr1:", sumOfArray(arr1));
console.log("Sum of arr2:", sumOfArray(arr2));
console.log("Sorted and Concatenated Array:", sortAndConcat(arr1, arr2));
