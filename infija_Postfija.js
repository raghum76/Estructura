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

function PDP(d){
    if(d == "+" || d == "-"){
        return 1;
    }else if(d == "/" || d == "*"){
        return 2;
    }else if(d == "^"){
        return 3;
    }else{
        return 0;
    }
}

function PFP(d){
        if(d == "+" || d == "-"){
            return 1;
        }else if(d == "*" || d == "/"){
            return 2;
        }else{
            return 4;
        }
}

const Operadores = new pila();
const Arr = [];

let infija = [2,"+",1,"*",3,"*",4,"/",6,"+",4,"-",2,"+",9,"/",3];
var tmp = "";
for(var i = 0; i<infija.length; i++){
    tmp += " " + infija[i];
}

console.log("Expresion infija: " + tmp);



var tmp = "";
for(var i = 0; i<infija.length; i++){
    tmp += " " + Arr[i];
}

console.log("Expresion infija: " + tmp);


