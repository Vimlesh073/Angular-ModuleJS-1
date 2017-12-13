import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'app';
  name:string="";
  counter:number=0;
  flag:boolean=false;
  price:number=0;
  qt:number=0;
  salary:number=0;
  hra:number;
  da:number;
  ta:number;
  pf:number;
  gs:number;
  tax:number;
  total:number;
  color:string;

  constructor(){

    this.name ="";
    this.flag=false;
  }

  takeName(event){
    this.name = event.target.value;

    
  }

  increment(){

    this.counter++;

    if(this.counter>5){
      this.flag=true;
    }

  }

  setVal(event)
  {
    this.salary = event.target.value;
  }
  computeSal(){

    this.hra = this.salary*.30;
    this.da = this.salary*.20;
    this.ta = this.salary*.10;
    this.pf = this.salary*.05;
    
    this.tax = this.salary*.10;

    this.gs = this.salary-this.tax;
    
    this.total = this.hra+this.da+this.ta+this.pf;

    if(this.total>40000){
      this.color="red";
    }
    else{
      this.color="yellow";

    }

  }


}
