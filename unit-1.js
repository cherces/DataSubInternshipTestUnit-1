class AClass {
    numbers = []

    constructor(n){
        if (this.constructor.name === 'AClass') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }

        this.#fill(n)
    }
    getArray(){
        return this.numbers
    }

    #fill(n){
        for(let i = 0; i < n; ++i) {
            this.numbers[i] = Math.round( 1 - 0.5 + Math.random() * (20 - 1 + 1) );
        }
    }
    factorial(){
        let factorials = [];

        for(let i = 0; i < this.numbers.length; ++i) {
            factorials[i] = this.#numberFactorial(this.numbers[i])
        }

        return factorials
    }
    #numberFactorial(n) {
        return (n != 1) ? n * this.#numberFactorial(n -1) : 1
    }
    sort(){}
}

class Class1 extends AClass {
    
    sort() {
        if (this.getArray().length === 1) {
            return this.getArray()
        }
        else {
            let left = 0;
            let right = this.numbers.length - 1;

            this.quickSort(left, right);
        }

    }
    quickSort(left, right){
        let l = left;
        let r = right;
        let mid = this.numbers[Math.floor((l + r) / 2)];

        while(l < r) {
            while(this.numbers[l] < mid) {
                ++l;
            }
            while(this.numbers[r] > mid) {
                --r;
            }
            if (l <= r) {
                let lNum = this.numbers[l];
    
                this.numbers[l] = this.numbers[r];
                this.numbers[r] = lNum;
                
                ++l;
                --r;
            }
        }
        if (left < r) {
            this.quickSort(left, r)
        }
        if (right > l) {
            this.quickSort(l, right)
        }
    }
} 
class Class2 extends AClass {
    sort() {
        return this.getArray().sort( (a, b) =>  a - b);
    }
}


obj = new Class1(15)
obj.sort()
console.log(obj.getArray())
