const Rectangle = require('../examples/rectangle.module');
const assert = require('assert'); 
//Length initially = 7, keeps retrying and decreasing until it reaches 4
let actual_length = 7;

//retries feature does re-run a failed test and its corresponding beforeEach/afterEach hooks,
//but not before/after hooks. this.retries() has no effect on failing hooks.
describe('Testing retries', function() {
    //set retries to 3
    this.retries(3)
    beforeEach(function(){
        // on each run, length decreases by one until it reaches 4 which passes the test.
        actual_length--;   
    })
    it('Checking the length of the rectangle and retrying if not valid', () => {
        let rectangle = new Rectangle(4,5);
        if(actual_length != 4)
            console.log('test didn\'t pass at length = ', actual_length, 'retrying..');
        assert.equal(rectangle.length, actual_length);
    }); 
})