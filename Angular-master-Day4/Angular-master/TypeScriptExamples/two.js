var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        console.log("Shape Draw...");
    };
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.draw = function () {
        console.log("Square Draw...");
    };
    return Square;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.radius = function () {
        console.log("Circle Radius");
    };
    Circle.prototype.draw = function () {
        console.log("Circle Draw...");
    };
    return Circle;
}(Shape));
var Drawing = /** @class */ (function () {
    function Drawing() {
    }
    Drawing.prototype.drawingObject = function (shape) {
        // Circle / Square / 
        shape.draw();
        if (shape instanceof Circle) {
            var c1 = shape;
            c1.radius();
        }
    };
    return Drawing;
}());
var drawingObj = new Drawing();
drawingObj.drawingObject(new Circle());
drawingObj.drawingObject(new Square());
