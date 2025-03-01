function Largernum(num1, num2, num3) {
    return (num1 >= num2) ? 
           (num1 >= num3 ? num1 : num3) : 
           (num2 >= num3 ? num2 : num3);
}
console.log(Largernum(num1 = 45, num2 = 78, num3 = 33))