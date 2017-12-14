const ItemOperations={
        itemArray:[],
        
        add(itemObject){
            this.itemArray.push(itemObject);
        },
        delete(){
             this.itemArray = this.itemArray.filter(itemObject=>!itemObject.markForDelete);   
        },
        countMark(){
            var markArr = this.itemArray.filter(itemObject=>itemObject.markForDelete);
            return markArr.length;
        },
        searchById(id){
           return  this.itemArray.filter(itemObject=>itemObject.id ==id)[0]    
        },
        sort(){

        }
}