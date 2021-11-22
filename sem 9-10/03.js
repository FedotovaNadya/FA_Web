n=8
symb = "#"
space=" "
result = ""
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if ((i+j)%2==0){
            result+=symb
        }
        else{
            result+=space
        }
    }
    result+="\n"
}
console.log(result)