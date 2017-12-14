import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruitNames:string[]= ["Apple","Orange"];
  title = 'ANGULAR WORLD';
  name:string;  // Instance Variable
  counter:number=0;
  flag:boolean= false;
  myclass = "";
  lastname="";
  price:number=0;
  qt:number=0;
  constructor(){
  this.name = "";
  }
  increment(){
  this.counter++;
  if(this.counter>10){
    this.myclass="red";
    this.flag = true;
  }
  }
  takeName(event){
    let start = "Mr ";
    this.name = start +event.target.value;
  }
}
