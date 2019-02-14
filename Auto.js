export default class Auto {
    constructor(marca, modelo, color = "blanco", kilometraje = 0){
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._kilometraje = kilometraje;
        this._estado = "apagado";
    }
    get color(){
        return this._color;
    }
    set color(color){
         this._color = color.toUpperCase();
     }
     set modelo(modelo){
         if (modelo = 2000){
         this._modelo = 2000;
     } else {
        this_modelo = modelo;
     }
     }

    mostrarEstado(){
        console.log(`El auto ${this._marca} ${this._modelo} del
         año ${this._color} tiene un kilometraje de ${this._kilometraje} ${this._estado}`);
    }
    encender(){
        this._estado = "encendido";
        this.mostrarEstado();
    }
    apagar(){
        this._estado = "apagar";
        this.mostrarEstado();
    }
    avanzar(velocidad, tiempo){
        if(this._estado === "apagado"){
            console.log("no puede avanzar porque esta apagado")
        }else{
            let distancia = velocidad * tiempo;
            this._kilometraje = this._kilometraje + distancia
            this.mostrarEstado();
        }
    
    }
}
