
> inbox@1.0.0 markdown /mnt/c/Users/abdur/Desktop/Final Year/First Term/Testing/Project/Mocha-Testing-Tool
> mocha --no-config --reporter markdown || true

	Message in the contract:  INBOX SMART CONTRACT
	Message in the contract:  INBOX SMART CONTRACT
	Message in the contract:  Changed
test didn't pass at length =  6 retrying..
test didn't pass at length =  5 retrying..
# TOC
   - [should assert](#should-assert)
   - [expect assert](#expect-assert)
   - [better-assert assert](#better-assert-assert)
   - [Module Test: Inbox](#module-test-inbox)
   - [CAR](#car)
   - [BDD Test 1](#bdd-test-1)
     - [nested group](#bdd-test-1-nested-group)
   - [BDD Test 2](#bdd-test-2)
     - [nested group](#bdd-test-2-nested-group)
   - [Require tests](#require-tests)
   - [Get data from API, test using async await](#get-data-from-api-test-using-async-await)
   - [Get data from API, test Async function with call back](#get-data-from-api-test-async-function-with-call-back)
   - [Get data from API, Return a promise](#get-data-from-api-return-a-promise)
   - [Testing retries](#testing-retries)
   - [Testing shapesList](#testing-shapeslist)
<a name=""></a>
 
<a name="should-assert"></a>
# should assert
Circle radius.

```js
circle.should.have.property('radius', 5);
```

Circle name.

```js
circle.should.have.property('name', 'Circle');
```

<a name="expect-assert"></a>
# expect assert
square Object.

```js
expect(square).to.be.a(Square);
```

square sidelength.

```js
expect(square.sideLength).to.eql(4);
```

square name.

```js
expect(square.name).to.eql('Square');
```

square area.

```js
expect(square.Area()).to.eql(4 * 4);
```

square perimeter.

```js
expect(square.Perimeter()).to.eql(4 * 4);
```

ShapesLists list and length.

```js
expect(shapes.list.length).to.eql(3);
expect(shapes.list).to.be.an(Array)
```

square2 is not defined.

```js
expect(square2).to.be(undefined)
```

<a name="better-assert-assert"></a>
# better-assert assert
square width and length.

```js
assert(rectangle.length == 3);
assert(rectangle.width == 4);
```

rectangle name.

```js
assert(rectangle.name == 'Rectangle');
```

rectangle area.

```js
assert(rectangle.Area() == 12);
```

rectangle perimeter.

```js
assert(rectangle.Perimeter() == 14);
```

ShapesLists length.

```js
assert(shapes.list.length == 3);
```

<a name="better-assert-assert"></a>
# better-assert assert
square width and length.

```js
assert(rectangle.length == 3);
assert(rectangle.width == 4);
```

rectangle name.

```js
assert(rectangle.name == 'Rectangle');
```

rectangle area.

```js
assert(rectangle.Area() == 12);
```

rectangle perimeter.

```js
assert(rectangle.Perimeter() == 14);
```

ShapesLists length.

```js
assert(shapes.list.length == 3);
```

<a name="module-test-inbox"></a>
# Module Test: Inbox
deploys a contract.

```js
assert.ok(inbox.options.address);
```

deployed contract has a default message.

```js
async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_MESSAGE);
    }
```

can change the message in the deployed contract.

```js
async () => {
        await inbox.methods.setMessage('Changed')
            .send({ from: accounts[0], gas: '1000000' });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Changed');
    }
```

<a name="car"></a>
# CAR
Park Function.

```js
assert.equal(car.park(), 'stopped');
```

Drive Function.

```js
assert.equal(car.drive(), 'vroom');
```

<a name="bdd-test-1"></a>
# BDD Test 1
<a name="bdd-test-1-nested-group"></a>
## nested group
sayHello should return hello.

```js
assert.equal(helloFunction,'hello')
```

sayHello should not say bye.

```js
assert.notEqual(helloFunction,'bye')
```

<a name="bdd-test-2"></a>
# BDD Test 2
<a name="bdd-test-2-nested-group"></a>
## nested group
sayHello should return hello.

```js
assert.equal(sayHello(),'hello');
```

<a name="require-tests"></a>
# Require tests
it should return Hello.

```js
assert.equal(sayHello(),'hello');
```

<a name="get-data-from-api-test-using-async-await"></a>
# Get data from API, test using async await
<a name="get-data-from-api-test-async-function-with-call-back"></a>
# Get data from API, test Async function with call back
<a name="get-data-from-api-return-a-promise"></a>
# Get data from API, Return a promise
<a name="testing-retries"></a>
# Testing retries
Checking the length of the rectangle and retrying if not valid.

```js
let rectangle = new Rectangle(4,5);
if(actual_length != 4)
    console.log('test didn\'t pass at length = ', actual_length, 'retrying..');
assert.equal(rectangle.length, actual_length);
```

<a name="testing-shapeslist"></a>
# Testing shapesList
Add circle to list.

```js
circle = new Circle(3);
shapes.addShape(circle);
assert.equal(shapes.list.length, 1);
```

Add square and reactangle to same list.

```js
square = new Square(3);
rectangle = new Rectangle(4,5);
shapes.addShape(square);
shapes.addShape(rectangle);   
assert.equal(shapes.list.length, 3);
```

Delay the test for a given time.

```js
this.timeout(5000);
setTimeout(done, 3000);
square = new Square(3);
shapes.addShape(square);
assert.equal(shapes.list.length, 4);
```

