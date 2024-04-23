class ShoppingItem {

    _itemName;
    _itemQuantity;

    constructor(itemName) {
        this._itemName = itemName;
        this._itemQuantity = this.itemQuantity;
    }

    get itemName() {
        return this._itemName;
    }

    get itemQuantity() {
        return this._itemQuantity;
    }

    set itemQuantity(itemQuantity) {
        this._itemQuantity = itemQuantity;
    }
}


class ShoppingList { 

    _todaysShoppingList

    constructor(todaysShoppingList) { 
        this._todaysShoppingList = todaysShoppingList;
        this.todaysShoppingList = [];

    }
    add(shoppingItem) {
        this.todaysShoppingList.push(shoppingItem)
        return this.todaysShoppingList.length;
    }

    get numItems() {
        return this._numItems;
    }
    
    get listOfItems() {
        return this._listOfItems;
    }

    removeItem(itemToBeRemoved) {
        for (let i = 0; i < this.todaysShoppingList.length; i++) {
            if (this.todaysShoppingList[i].itemName === itemToBeRemoved) {
                this._todaysShoppingList.splice(i, 1)
                return "Item removed from Shopping List";
            }
        }
        return "Item not found!";
    }
}

let item1 = new ShoppingItem("Milk", "1");
let item2 = new ShoppingItem("Eggs", "6");
console.log(item1.itemName); 