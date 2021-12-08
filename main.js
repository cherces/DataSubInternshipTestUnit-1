const {quickSort} = require("./quickSort");
const {mergeSort} = require("./mergeSort");
const {factorial} = require("./utils/factorial");

class AClass {
    _numbers = []

    constructor(n){
        if (this.constructor.name === 'AClass') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }

        this.#fill(n)
    }
    #fill(n){
        for(let i = 0; i < n; ++i) {
            this._numbers[i] = Math.round( 1 - 0.5 + Math.random() * (20 - 1 + 1) );
        }
    }
    factorial(arr){
        return factorial(arr);
    }
    sort(){}
}

class Class1 extends AClass {
    
    sort() {
        if (this._numbers.length <= 1) {
            return this._numbers
        }
        else {
            return this.factorial(quickSort(this._numbers, 0, this._numbers.length - 1));
        }

    }
} 
class Class2 extends AClass {
    sort() {
        if (this._numbers.length <= 1) {
            return this._numbers;
        }
        else {
            return factorial(mergeSort(this._numbers));
        }
    }
}


obj1 = new Class1(15)
console.log(obj1.sort())
obj2 = new Class2(15)
console.log(obj2.sort())
