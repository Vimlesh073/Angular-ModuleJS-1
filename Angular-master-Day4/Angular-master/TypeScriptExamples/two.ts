abstract class Shape{
    abstract draw():void;
    // draw():void{
    //     console.log("Shape Draw...");
    // }
}

class Square extends Shape{
    draw():void{
        console.log("Square Draw...");
    }
}

class Circle extends Shape{
    radius():void{
        console.log("Circle Radius");
    }
    draw():void{
        console.log("Circle Draw...");
    }
}

class Drawing{
    // Upcasting
    drawingObject(shape:Shape):void{
        // Circle / Square / 
        shape.draw();
        if(shape instanceof Circle){
            var c1:Circle = shape;  // Downcasting
            c1.radius();
        }
    }
}

var drawingObj:Drawing = new Drawing();
drawingObj.drawingObject(new Circle());
drawingObj.drawingObject(new Square());

