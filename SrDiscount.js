function SrDiscount(age){
    return(age<0 || isNaN(age))? "Invalid age":(age>=60 ?"Eligible for Senior Discount" :"Not Eligible for Senior Discount")
}
console.log(SrDiscount(60))