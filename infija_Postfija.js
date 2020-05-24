console.clear();
class pila{
    constructor(){
        this.data = {};
        this.count = 0;
    }

    push(info){
        this.data[this.count] = info;
        this.count++;
        return this.data;
    }

    pop(){
        this.count--;
        const elemento = this.data[this.count];
        delete this.data[this.count];
        return elemento;
    }

    peek(){
        return this.data[this.count-1];
    }

    count(){
        return this.count;
    }

    print(){
        return this.data;
    }
}

const Operadores = new pila();
const Arr = [];

let infija = [2,"+",1,"*",3,"*",4,"/",6,"+",4,"-",2,"+",9,"/",3];

while(infija){
    for(let i = 0; i<infija.length; i++){
        if(typeof infija === "number"){
            Arr.push(i);
        }else{
            Operadores.push(i);
        }
    }
}