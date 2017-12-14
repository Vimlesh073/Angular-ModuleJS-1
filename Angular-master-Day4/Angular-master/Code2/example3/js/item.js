class Item{
    constructor(id, name, price, pdate,color,url){
        this.id = id;
        this.name = name;
        this.price = price;
        this.pdate = pdate;
        this.color = color;
        this.url = url;
        this.markForDelete = false;
    }
    toggle(){
        this.markForDelete = !this.markForDelete;
    }
}