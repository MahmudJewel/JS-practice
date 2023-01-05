// modified: https://gist.github.com/nicbell/6081098
// Object.compare = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const comp = (a, b) => {
    if(JSON.stringify(a) === JSON.stringify(b)){
        return true
    }
    else{
        return false
    }
};

a = { k: 1, k2:2 };
b = { k: 1, k2:2 };
// b = { k: 1 };
console.log(comp(a,b))

