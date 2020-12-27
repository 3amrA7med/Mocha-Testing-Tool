const assert = require('assert'); 
const ShapesList = require('../examples/shapes');
//const Rectangle = require('../examples/shapes');
//const Square = require('../examples/shapes');
const Circle = require('../examples/shapes');

let shapes;

describe('before and after hooks', function() {
    before('define shapes object',function() {
        // runs once before the first test in this block
        shapes = new ShapesList();
    });
    it('Add circle to list', () => {
        // should set the timeout of this test to 1000 ms; instead will fail
        //this.timeout(1000);
        // let circle = new Circle(3);
        // shapes.addShape(circle);
        // assert.equal(shapes.list.length, 1);        
    });
});