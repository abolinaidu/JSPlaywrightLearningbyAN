class TestDataStorage<T>{
        private items : T[] = [];
    addItem(item: T): void {
        this.items.push(item);
    }
    getItems(): T {
       return this.items[0]!;
    }   
    getAllItems(): T[]{
        return this.items;
    }   
    count (): number {
        return this.items.length;
    }   
}

let codeStore = new TestDataStorage<number>();  
codeStore.addItem(100); 
codeStore.addItem(200);
console.log(codeStore.getItems()); 
console.log(codeStore.getAllItems()); 
console.log(codeStore.count());

let nameStore = new TestDataStorage<string>();
nameStore.addItem("Amit");
nameStore.addItem("John");  
console.log(nameStore.getItems());
console.log(nameStore.getAllItems());
console.log(nameStore.count());
