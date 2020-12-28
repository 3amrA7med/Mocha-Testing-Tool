var should = require('should');
var expect = require('expect.js');
var assert = require('better-assert');
const ShapesList = require('../examples/shapesList.module');
const Rectangle = require('../examples/rectangle.module');
const Square = require('../examples/square.module');
const Circle = require('../examples/circle.module');

var  shapes, circle, square, square2, rectangle;

/***********************************************************************/
describe('should assert', ()=>{
    before(()=>{
        shapes = new ShapesList();
        circle = new Circle(5);
        square = new Square(4);
        rectangle = new Rectangle(3,4);
        shapes.addShape(circle);
        shapes.addShape(square);
        shapes.addShape(rectangle);
    });

    it('Circle Object', () => {
        circle.should.be.an.instanceOf(Circle);
    });

    it('Circle radius', ()=>{
        circle.should.have.property('radius', 5);
    });

    it('Circle name', () => {
        circle.should.have.property('name', 'Circle');
    });

    it('Circle area', () => {
        circle.Area().should.be.exactly((5^2) * Math.PI);
    });

    it('Circle perimeter', () => {
        circle.Perimeter().should.be.exactly(2 * Math.PI * 5);
    });

    it('ShapesLists list and length (two assertion in one statement)', () => {
        shapes.list.should.be.instanceOf(Array).and.have.lengthOf(3);
    });
});

/***********************************************************************/
describe('expect assert',() => {
    before(()=>{
        shapes = new ShapesList();
        circle = new Circle(5);
        square = new Square(4);
        rectangle = new Rectangle(3,4);
        shapes.addShape(circle);
        shapes.addShape(square);
        shapes.addShape(rectangle);
    });

    it('square Object', () => {
        expect(square).to.be.a(Square);
    });

    it('square sidelength', ()=>{
        expect(square.sideLength).to.eql(4);
    });

    it('square name', () => {
        expect(square.name).to.eql('Square');
    });

    it('square area', () => {
        expect(square.Area()).to.eql(4 * 4);
    });

    it('square perimeter', () => {
        expect(square.Perimeter()).to.eql(4 * 4);
    });

    it('ShapesLists list and length', () => {
        expect(shapes.list.length).to.eql(3);
        expect(shapes.list).to.be.an(Array)
    });

    it('square2 is not defined', () => {
        expect(square2).to.be(undefined)
    });
});

/***********************************************************************/
describe('better-assert assert',() => {
    before(()=>{
        shapes = new ShapesList();
        circle = new Circle(5);
        square = new Square(4);
        rectangle = new Rectangle(3,4);
        shapes.addShape(circle);
        shapes.addShape(square);
        shapes.addShape(rectangle);
    });

    it('square width and length', ()=>{
        assert(rectangle.length == 3);
        assert(rectangle.width == 4);
    });

    it('rectangle name', () => {
        assert(rectangle.name == 'Rectangle');
    });

    it('rectangle area', () => {
        assert(rectangle.Area() == 12);
    });

    it('rectangle perimeter', () => {
        assert(rectangle.Perimeter() == 14);
    });

    it('ShapesLists length', () => {
        assert(shapes.list.length == 3);
    });
});


/***********************************************************************/
describe('better-assert assert',() => {
    before(()=>{
        shapes = new ShapesList();
        circle = new Circle(5);
        square = new Square(4);
        rectangle = new Rectangle(3,4);
        shapes.addShape(circle);
        shapes.addShape(square);
        shapes.addShape(rectangle);
    });

    it('square width and length', ()=>{
        assert(rectangle.length == 3);
        assert(rectangle.width == 4);
    });

    it('rectangle name', () => {
        assert(rectangle.name == 'Rectangle');
    });

    it('rectangle area', () => {
        assert(rectangle.Area() == 12);
    });

    it('rectangle perimeter', () => {
        assert(rectangle.Perimeter() == 14);
    });

    it('ShapesLists length', () => {
        assert(shapes.list.length == 3);
    });
});