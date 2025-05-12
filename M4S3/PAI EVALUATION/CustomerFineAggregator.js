const customers = [
  { name: "Aman", daysLate: 4, type: "Regular" },
  { name: "Priya", daysLate: 6, type: "VIP" },
  { name: "Dev", daysLate: 8, type: "Regular" },
  { name: "Riya", daysLate: 10, type: "VIP" }
];

let result ={}
let fines = customers.map(customer =>{
    let fine = customer.daysLate*20
    if(customer.type == "VIP"){
        fine =fine*0.7
    }
    return {name:customer.name, fine,daysLate:customer.daysLate}
})
.filter(c => c.daysLate >5)
.map(c => ({name:c.name,fine:Math.round(c.fine)}))

let totalCollect = fines.reduce((acc,curr) => acc +curr.fine, 0)

result.fines =fines
result.totalCollect =totalCollect
console.log(result)