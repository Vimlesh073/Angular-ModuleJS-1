import { CrudService } from './../services/crudservice';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ItemModel } from '../models/itemmodel';


@Component({
  selector: 'app-crud-detail',
  templateUrl: './crud-detail.component.html',
  styleUrls: ['./crud-detail.component.css']
  //,providers:[CrudService]
})
export class CrudDetailComponent implements OnInit {
  itemList:ItemModel[]=[];

  @Output()
  calltoparent:EventEmitter<ItemModel[]> = new EventEmitter<ItemModel[]>();
  constructor(private crudService:CrudService) { }

  ngOnInit() {
  }

  add(id:number,name:string,price:number, url:string):void{
    console.log(`Id is ${id} Name is ${name} Price is ${price} and Url is ${url}`);
    const itemObject = new ItemModel(id,name,price,url);
    this.crudService.add(itemObject);
    this.itemList = this.crudService.getItems();
    this.calltoparent.emit(this.itemList);
    console.log('record added ',this.itemList);
  }

}
