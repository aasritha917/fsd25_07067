function fun(){
    let time=0
    let intervalId = setInterval(() => {
    console.log("Loading...")
    time ++

    if(time == 5){
        clearInterval(intervalId)
        console.log("Loaded Successfull!")
    }
        }, 1000);
    
}
fun()