const assert = require('assert'); 
const ShapesList = require('../examples/shapesList.module');
const Rectangle = require('../examples/rectangle.module');
const Square = require('../examples/square.module');
const Circle = require('../examples/circle.module');

let shapes, circle, square, rectangle;

describe('Integration Testig: between shapes', function() {

    before('define shapes object one time before integration testing',function() {
        // runs once before the first test in this block
        shapes = new ShapesList();
    });
    it('Add circle to list', () => {
        circle = new Circle(3);
        shapes.addShape(circle);
        assert.equal(shapes.list.length, 1);        
    });

    it('Add square and reactangle to same list', () => {
        square = new Square(3);
        rectangle = new Rectangle(4,5);
        shapes.addShape(square);
        shapes.addShape(rectangle);
        assert.equal(shapes.list.length, 3);        
    });

    it('Compute stats')
   

    after("Check list elements count after all tests", function() {
        delete shapes;
    })
});