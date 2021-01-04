const sayHello = require('../examples/dsl').sayHello;
const assert = require('assert');

//----------------------        BDD         ----------------------//
/*
BDD is the most common interface (Behavior Driven Development), develop then write test.
describe() and context() are aliases, both are used to group tests togethers. 
They provide a way to keep tests easier to read and organized.
*/
describe('BDD Test 1', function() {
    let helloFunction;
    context('nested group', function(){
        this.beforeAll(function(){
            helloFunction = sayHello();
        })
        //it() and specify() are aslo aliases, they are used to run tests
        it('sayHello should return hello', function(){
            assert.equal(helloFunction,'hello')
        })
        specify('sayHello should not say bye',function(){
            assert.notEqual(helloFunction,'bye')
        })
    });
    
})
context('BDD Test 2', function(){
    describe('nested group', function(){
        it('sayHello should return hello', function(){
            assert.equal(sayHello(),'hello');
        })

    })
})
//----------------------        TDD         ----------------------//

/*
TDD(Test Driven Development) is to write test then develop.
is also used by some developers in agile development 
suiteSetup maps to beforeAll in BDD, and setup maps to beforeEach as well.
*/

//Code commented as only one type of DSL can be run in the same test, to run 
// in TDD, comment non TDD tests and modify "test" script in package.json to be "test": "mocha -u tdd" 

/*
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
  */

//----------------------        Exports         ----------------------//
/*
The Exports interface is as follow
object values are suites, and function values are test-cases
The keys before, after, beforeEach, and afterEach are special-cased.
*/

//Code commented as only one type of DSL can be run in the same test, to run 
// in Exports, comment non Exports tests and modify "test" script in package.json to be "test": "mocha -u Exports"

/*
module.exports = {
    before: function() {
        let helloFunction = sayHello();
    },
  
    Array: {
      'Export Tests': {
        'it should return Hello': function() {
        assert.equal(helloFunction,'hello');
        }
      }
    }
  };
  */

  //----------------------        QUnit         ----------------------//
/*
The QUnit-inspired interface matches the “flat” look of QUnit,
where the test suite title is defined before the test-cases.
Like TDD, it uses suite() and test(),
but resembling BDD, it also contains before(), after(), beforeEach(), and afterEach()
*/

//Code commented as only one type of DSL can be run in the same test, to run 
// in QUnit, comment non QUnit tests and modify "test" script in package.json to be "test": "mocha -u QUnit"


// suite('QUnit tests');

// test('it should return Hello', function() {
//       assert.equal(sayHello(),'hello');
// });
  //----------------------        Require         ----------------------//
/*
The require interface allows you to require the describe and friend words directly using require
and call them whatever you want. This interface is also useful if you want
to avoid global variables in your tests.
*/
var testCase = require('mocha').describe;
var pre = require('mocha').before;
var assertions = require('mocha').it;
let helloFunction;

testCase('Require tests', function() {
    pre(function() {
        helloFunction = sayHello();
    });
    assertions('it should return Hello', function() {
        assert.equal(sayHello(),'hello');
    });
});

