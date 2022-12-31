function findFacto(num){
    if (num===0){
            return 1
    }
    else{
        return num*findFacto(num-1)
    }
}
console.info(findFacto(6)) // 720