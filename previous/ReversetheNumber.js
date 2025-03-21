let num = 971;
let reversedNum = 0;

while (num > 0) {
    let lastDigit = num % 10; 
    reversedNum = reversedNum * 10 + lastDigit; 
    num = Math.floor(num / 10); 
}

console.log(reversedNum); 