class Rectangle{
    constructor(length, width) {
        this.name = 'Rectangle'
        this.length = length;
        this.width = width;
    }
    Area(){
        return this.length * this.width;
    }
    Perimeter(){
        return 2 * (this.length + this.width);
    }
}


module.exports = Rectangle;