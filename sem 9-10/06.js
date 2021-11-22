function range(a, b, c=1){

    res=[]
    if (a<=b){
    for (let index = a; index <=b; index+=c) {
        res.push(index)
    }   
}  
    else{
        if ((a>=b) && (c<0) ){
            for (let index = a; index >=b; index+=c) {
                res.push(index)
            }   
        }
    }
    return res
}

function sum(array){
    res=0
    for (let index = 0; index < array.length; index++) {
        res += array[index];
    }
    return res
}

a=range(5,2,-1)

console.log(a)

console.log(sum(a))