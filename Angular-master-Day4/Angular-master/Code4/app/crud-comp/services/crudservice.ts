import { Injectable } from "@angular/core";
import { ItemModel } from "../models/itemmodel";

@Injectable()
export class CrudService{
  itemArray:ItemModel[]=[];
  add(itemModelObject:ItemModel):void{
  this.itemArray.push(itemModelObject);
  }

  getItems():ItemModel[]{
    return this.itemArray;
  }
}
