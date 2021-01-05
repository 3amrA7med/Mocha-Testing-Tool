const assert = require('assert'); 
const Car = require('../examples/car');

// Make the car variable global
let car;


describe('CAR', ()=>{
    beforeEach(()=>{
        car = new Car();
    })
    it('Park Function', ()=>{
        assert.equal(car.park(), 'stopped');
    });
    it('Drive Function', ()=>{
        assert.equal(car.drive(), 'vroom');
    });
});