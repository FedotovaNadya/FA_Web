function Card(from, to){
    this.from = from 
    this.to = to
    this.show = function () {
        return `${this.from}, ${this.to}`
    };

}

cl =new Card("Екатеринбург", "Москва")
console.log(cl.show())
