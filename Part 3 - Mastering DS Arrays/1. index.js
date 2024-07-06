class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(num){
    delete this.data[num];
    this.length--;
    return myNewArray;
  }
}

const myNewArray = new MyArray();
myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("mango");
myNewArray.push("banana");
console.log(myNewArray);
console.log();

/* console.log(myNewArray.get(1));
console.log(); */

/* console.log(myNewArray.pop());
console.log();
  */

/* console.log(myNewArray.shift());
console.log(myNewArray); */

console.log(myNewArray.deleteByIndex(3)); 



