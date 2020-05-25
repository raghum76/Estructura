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

function prioridad(d){
    if(d == "+" || d == "-"){
        return 1;
    }else if(d == "/" || d == "*"){
        return 2;
    }else if(d == "^"){
        return 3;
    }else if(d == "(" || d == ")"){
        return 4;
    }else{
        return 0;
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

for(let i = 0; i < infija.length; i++){
    //console.log(i + " => " +infija[i]);

    if(infija.length > 0){
        //aqui es mi duda
        if(typeof infija[i] == "number"){// todo esta guardado como caracter, entonces hasta que hagas la conversion a INT con el ParseInt sabrías si es numero 
            Arr.push(infija[i]);
        }else if(infija[i] == "-" || infija[i] == "+" || infija[i] == "*" || infija[i] == "/" || infija[i] == "^" || infija[i] == "("){
            var ope = infija[i];
            if(Operadores.count > 0){
                while(prioridad(Operadores.peek()) <= prioridad(ope) && Operadores.count > 0){
                    var tmpOpe = Operadores.pop();
                    Arr.push(tmpOpe);
                }
                Operadores.push(ope);

                if(prioridad(ope) > prioridad(Operadores.peek())){
                    Operadores.push(ope);
                }
            }else{
                Operadores.push(ope);
            }
        }
    }else{
        do{
            var agregar = Operadores.pop();
            Arr.push(agregar);
        }while(Operadores.count != 0);
    }
}

var tmpo = "";
for(var i = 0; i<infija.length; i++){
    tmpo += " " + Arr[i];
}

console.log("Expresion infija: " + tmpo);


