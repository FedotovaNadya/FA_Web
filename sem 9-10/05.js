function countBs(s){
    symb="B"
    count = 0
    for (let index = 0; index < s.length; index++) {
        ch = s.charAt(index)
        if (ch==symb){
            count++
        }
    }
    return count
}

function countChar(s, symb="B"){
    count = 0
    for (let index = 0; index < s.length; index++) {
        ch = s.charAt(index)
        if (ch==symb){
            count++
        }
    }
    return count
}

res=countBs("BafdfkljBlasfkjB")

console.log(res)

res=countChar("BafdfkljBlasfkjB", "a")

console.log(res)
