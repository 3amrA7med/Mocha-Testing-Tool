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

module.exports = Circle;