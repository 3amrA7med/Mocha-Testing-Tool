const getUsers = require('../examples/asyncFunctions').getUsers;


var assert = require('assert');

describe('Get data from API, test using async await', function() {
    this.slow(50);

    it('should return 10 users', async function() {
        const res = await getUsers();
        assert.equal(res.data.length, 10);
    });

});

describe('Get data from API, test Async function with call back', function() {
   this.slow(400);

    it('should return 10 users', function(done) {
        getUsers().
        then(res => {
          assert.equal(res.data.length, 10);
          // done() with no parameters means the test succeeded
          done();
        }).
        // If you pass a parameter to done(), Mocha considers that an error
        catch(err => done(err));
    });

});

describe('Get data from API, Return a promise', function() {
     this.slow(5000);
 
     it('should return 10 users', function() {
        return getUsers().
        then(res => assert.equal(res.data.length, 10));

    });
 
 });