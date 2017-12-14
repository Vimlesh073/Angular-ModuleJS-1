namespace A{
    export function show(){
        console.log("this is show");
    }
}
A.show();

namespace A{
    export namespace B{
        export function display(){
            console.log("this is disp");
        }
    }
}
A.B.display();
