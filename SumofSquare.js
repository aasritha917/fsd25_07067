function sumOfSquareNumbers(k) {
    for (let a = 0; a * a <= k; a++) {
        let bSquared = k - (a * a); 
        let b = Math.sqrt(bSquared); 

        if (Number.isInteger(b)) { 
            return true;
        }
    }
    return false; 
}


console.log(sumOfSquareNumbers(25)); 
console.log(sumOfSquareNumbers(7));  
console.log(sumOfSquareNumbers(10)); 
