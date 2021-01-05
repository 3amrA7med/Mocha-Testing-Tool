const assert = require('assert'); 
const ShapesList = require('../examples/shapesList.module');
const Rectangle = require('../examples/rectangle.module');
const Square = require('../examples/square.module');
const Circle = require('../examples/circle.module');

let shapes, circle, square, rectangle;

// For exclusive test add .only after the the desired block identfier.
describe('Testing shapesList', function() {

    before('define shapes object one time before integration testing',function() {
        // runs once before the first test in this block
        shapes = new ShapesList();
    });
    
    it('Add circle to list', () => {
        circle = new Circle(3);
        shapes.addShape(circle);
        assert.equal(shapes.list.length, 1);        
    });

    // Exclusive test
    // it.only('Add circle to list', () => {
    //     circle = new Circle(3);
    //     shapes.addShape(circle);
    //     assert.equal(shapes.list.length, 1);        
    // });

    it('Add square and reactangle to same list', () => {
        square = new Square(3);
        rectangle = new Rectangle(4,5);
        shapes.addShape(square);
        shapes.addShape(rectangle);   
        assert.equal(shapes.list.length, 3);     
    });   

    it('Delay the test for a given time', function(done) {
        this.timeout(5000);
        setTimeout(done, 3000);
        square = new Square(3);
        shapes.addShape(square);
        assert.equal(shapes.list.length, 4);     
    })

    // Inclusive, Act as pending
    it.skip('Compute stats skipped', () => {
        shapes.computeStats()
        assert(shapes.list.avgAreas, 1);
    })

    //Exclusive, only test excuted
    it.only('Compute stats failed error', () => {
        shapes.computeStats()
        assert(shapes.list.avgAreas, 1);
    })

    after("Check list elements count after all tests", function() {
        delete shapes;
    })
});