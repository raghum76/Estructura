class pila{
    constructor(data){
        this.data = {};
        this.count = 0;
    }

    push(info){
        this.data[this.count] = element;
        this.count++;
        return this.data;
    }

    pop(){
        this.count--;
        const element = this.data[this.count];
        return element;
    }

    
}

