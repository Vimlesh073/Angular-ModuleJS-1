export class ItemModel{
  isDeleted:boolean;
  constructor(public id:number, public name:string,public price:number,public url:string){
    this.isDeleted = false;
  }
  toggle(): void {
    this.isDeleted = !this.isDeleted;
  }
}
