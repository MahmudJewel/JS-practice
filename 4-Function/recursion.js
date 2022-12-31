function printNumber(num){
    console.info(num)
    num = num-1
    if(num>0){
        printNumber(num)
    }
}
printNumber(5)