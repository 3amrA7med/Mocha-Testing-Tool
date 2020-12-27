class Square{
    constructor(sideLength) {
        this.name = 'Square'
        this.sideLength = sideLength;
    }
    Area(){
        return this.sideLength * this.sideLength;
    }
    Perimeter(){
        return 4 * this.sideLength;
    }
}

module.exports = Square;