import { Component, OnInit } from '@angular/core';
import { ItemModel } from './models/itemmodel';

@Component({
  selector: 'app-crud-comp',
  templateUrl: './crud-comp.component.html',
  styleUrls: ['./crud-comp.component.css']
})
export class CrudCompComponent implements OnInit {
  title:string;
  itemModel:ItemModel[]=[];
  constructor() {
    this.title = 'CRUD-App Example';
  }

  ngOnInit() {
  }

  getItemArray(itemModel:ItemModel[]):void{
    this.itemModel = itemModel;
    console.log('Get Item Array of Parent is Called ',this.itemModel);
  }

}
