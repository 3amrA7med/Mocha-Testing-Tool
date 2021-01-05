const sayHello = require('./examples/dsl').sayHello;
const assert = require('assert');


//----------------------        TDD         ----------------------//

/*
TDD(Test Driven Development) is to write test then develop.
is also used by some developers in agile development 
suiteSetup maps to beforeAll in BDD, and setup maps to beforeEach as well.
*/

// suite correspnonds to describe
 suite('TDD Tests', function() {
    let helloFunction;

    setup(function() {
        helloFunction = sayHello();
    });
  
    suite('Indexed', function() {
        //test corresponds to it
      test('it should return Hello', function() {
        assert.equal(helloFunction,'hello');
      });
    });
  });
  
