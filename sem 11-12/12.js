//12.Векторный тип
console.log("Task12")
function Vector(x, y) {
    this.x = x;
    this.y = y;
    this.plus = function(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    };
    this.minus = function(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    };
}

Object.defineProperty(Vector.prototype, "length", {
    get: function() { 
        return Math.sqrt( this.x * this.x + this.y * this.y );
    }
});
    



// Ваш код
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
  
  