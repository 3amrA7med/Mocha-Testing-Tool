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