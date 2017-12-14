import { Component } from '@angular/core';
@Component({
  selector:'salary-calc',
  templateUrl:'./salary.component.html',
  styleUrls:['./salary.component.css']
})
export class SalaryComponent{
  id:number = 1001;
  basicSalary:number;
  hra:number;
  ta:number;
  da:number;
  tax:number;
  pf:number;
  gs:number;
  ns:number;
  color:string;
  constructor(){
    this.basicSalary = this.hra = this.ta = this.da = this.tax = this.gs = this.ns = 0;
  }
  takeSalary(event){
  this.basicSalary = parseInt(event.target.value);
  }
  computeIt(){
    this.hra = this.basicSalary * 0.30;
    this.da = this.basicSalary * 0.20;
    this.ta = this.basicSalary * 0.10;
    this.pf = this.basicSalary *0.05;
    this.gs = this.basicSalary + this.hra + this.da + this.ta- this.pf;
    this.tax = this.gs * 0.10;
    this.ns = this.gs - this.tax;
    this.color = this.ns>40000?"green":"red";
  }
}
