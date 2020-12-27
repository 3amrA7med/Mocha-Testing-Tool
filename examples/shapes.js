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

class Circle {
    constructor(radius) {
        this.name = 'Circle'
        this.radius = radius;
    }

    Area(){
        return Math.PI*(this.radius^2);
    }

    Perimeter(){
        return 2 * Math.PI * this.radius;
    }
}

class ShapesList{
    constructor(){
        this.list = [];
        this.avgAreas = 0;
        this.avgPerimeters = 0;
    }

    addShape(shape){
        this.list.push(shape);
    }

    computeStats(){
        let areaSum, perimeterSum = 0;
        this.list.forEach((shapeItem) => {
            areaSum += shapeItem.Area();
            perimeterSum += shapeItem.Perimeter();
        });
        if(this.list.length)
        {
            this.avgAreas = areaSum / this.list.length;
            this.avgPerimeters = perimeterSum / this.list.length;
        }
    }
}

module.exports = ShapesList;
module.exports = Square;
module.exports = Circle;
module.exports = Rectangle;