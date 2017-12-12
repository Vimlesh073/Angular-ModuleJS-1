abstract class test{

    abstract draw():void;
    
}

class Shape{

    draw():void{


    }
}

class Square extends Shape{
    
        draw():void{
    
    
        }
    }
    


class Circle extends Shape{

    
    test():void{



    }
        draw():void{
    
    
        }
    }
    

    class Drawing{
        
            //upcasting
            drawingObject(shape:Shape):void{
        
                shape.draw();

                if(shape instanceof Circle)
                {
                    var c1:Circle = shape;//dwoncasting
                    c1.test();

                }
        
            }
        }
        
        

var drawObj:Drawing = new Drawing();

 drawObj.drawingObject(new Circle());
 drawObj.drawingObject(new Square());



