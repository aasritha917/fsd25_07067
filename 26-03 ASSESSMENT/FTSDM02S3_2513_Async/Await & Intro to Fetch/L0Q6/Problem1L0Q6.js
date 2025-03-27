function Timer(duration,onComplete){
    setTimeout(()=>{
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}
Timer(2000, (message) => console.log(message));