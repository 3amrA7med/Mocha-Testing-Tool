const assert = require('assert'); 
const Car = require('../examples/example');

// Make the car variable global
let car;

beforeEach(()=>{
    car = new Car();
})
describe('CAR', ()=>{
    it('Park Function', ()=>{
        assert.equal(car.park(), 'stopped');
    });
    it('Drive Function', ()=>{
        assert.equal(car.drive(), 'vroom');
    });
});