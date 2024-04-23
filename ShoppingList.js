class ShoppingItem {

    _itemName;
    _itemQuantity;

    constructor(itemName, itemQuantity) {
        this._itemName = itemName;
        this._itemQuantity = itemQuantity;
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


    constructor() {
        this.todaysShoppingList = [];
    
    }
    add(shoppingItem) {
        this.todaysShoppingList.push(shoppingItem)
        return this.todaysShoppingList.length;
    }
            

    get numItems() {
        return this.todaysShoppingList.length;
    }
    
    get listOfItems() {
        return this.todaysShoppingList;
    }

    list() {
        for (let i =0; i < this.todaysShoppingList.length; i++) {
            console.log(this.todaysShoppingList[i].itemName);
        }
    }

    removeItem(itemToBeRemoved) {
        for (let i = 0; i < this.todaysShoppingList.length; i++) {
            if (this.todaysShoppingList[i].itemName === itemToBeRemoved) {
                this.todaysShoppingList.splice(i, 1)
                return "Item removed from Shopping List";
            }
        }
        return "Item not found!";
    }
}

let tuesdayShopping = new ShoppingList();
tuesdayShopping.add (new ShoppingItem("Milk", "1"));
tuesdayShopping.add (new ShoppingItem("Eggs", "6"));
let item1 = new ShoppingItem("Milk", 1);
let item2 = new ShoppingItem("Eggs", 6);

tuesdayShopping.list();

console.log(item1.itemName);
console.log(item2.itemQuantity = 12);
console.log(tuesdayShopping.numItems);
console.log(tuesdayShopping.listOfItems);
console.log(tuesdayShopping.removeItem("Milk"));
console.log(tuesdayShopping.listOfItems);
// console.log(tuesdayShopping.

// console.log(tuesdayShopping);

// console.log(tuesdayShopping.itemQuantity = 12);

// console.log(tuesdayShopping.removeItem("item1"));


// if (this.todaysShoppingList[i]. itemName === shoppingItem) {
//     return "Item added to List"