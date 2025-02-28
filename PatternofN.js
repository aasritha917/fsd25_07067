let n=3
let square = n* n
for(let i =1;i<=square;i++){
    process.stdout.write(i + " ");
    if(i%n===0){
        console.log()
    }
}