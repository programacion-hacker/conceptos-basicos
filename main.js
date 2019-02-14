import Auto from "./Auto.js";

let auto1 = new Auto("ford", 2010, "rojo", 100);
let auto2 = new Auto("nissan", 2018, "blanco");
let auto3 = new Auto("vw", 2010,);

console.log(`color ${auto1._color}`);
console.log(`color ${auto2._color}`);
auto1.color = "verde";
auto2.color = "azul";
auto1.modelo = 1999;

auto2.encender();
auto3.encender();

auto1.encender();
auto1.avanzar(50,2);
auto1.apagar();
auto1.avanzar(50,1);
