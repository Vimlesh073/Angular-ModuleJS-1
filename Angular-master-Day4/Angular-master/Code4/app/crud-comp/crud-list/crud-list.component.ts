import { Component, OnInit,Input } from '@angular/core';
import { ItemModel } from '../models/itemmodel';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
  @Input()
  list:ItemModel[];
  constructor() { }

  ngOnInit() {
  }

  toggleDelete(item:ItemModel){
    item.toggle();
  }

}
