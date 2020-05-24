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
        delete this.data[this.count;]
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

const dato = new pila();
dato.push(5);
dato.push(4);
dato.push(3);
dato.push(6);
console.log("Numero de datos " + dato.count);
console.log("Datos: ");
//for(var i = dato.count; i>= 0;i--)
    console.log(dato.print());
console.log("Eliminamos el " + dato.pop());
console.log("Numero de datos " + dato.count);
console.log("Datos: ");
//for(var i = dato.count; i>= 0;i--)
    console.log(dato.print());
