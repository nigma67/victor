function eje1(){

    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    console.log(meses);
}

function eje2(){

    var valores = [
        true, 5, false, "hola", "adiós", 2
    ];

    var suma = (valores[1] + valores[5]);
    var resta = (valores[1] - valores[5]);
    var multiplicacion = (valores[1] * valores[5]);
    var división = (valores[1] / valores[5]);
    var potencia = (valores[1] ** valores[5]);

    console.log("Suma: ", suma);
    console.log("Resta: ", resta);
    console.log("Multiplicación: ", multiplicacion);
    console.log("División: ", división);
    console.log("Potencia: ", potencia);

    if(valores[3] > valores[4]){
        console.log("El mayor es: ", valores[3]);
    }
    else if(valores[3] < valores[4]){
        console.log("El mayor es: ", valores[4]);
    }
    var resultadoTrue = valores[0] || valores[2];
    var resultadoFalse = valores[0] && valores[2];

    console.log("Afirmación (true): ", resultadoTrue);
    console.log("Afirmación (false): ", resultadoFalse);

}

function eje3(){

    var numero1 = 5;
    var numero2 = 8;

    if(numero1 < numero2) {
    console.log("numero1 no es mayor que numero2");
    }

    if(numero2 >= 0) {
    console.log("numero2 es positivo");
    }

    if(numero1 < 0 || numero1 !== 0) {
    console.log("numero1 es negativo o distinto de cero");
    }

    if((numero1 + 1) < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }

}

function eje4(){

var letras = ['T', 'R', 'W', 'A', 'G', 'M',
'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Ingrese su DNI:");

if(isNaN(numero) || numero==null || numero=="" || numero < 0 || numero > 99999999){
    console.log("Valor inválido");
}

else{
    var resultadoD = numero % 23;

console.log("Resto: ", resultadoD);
console.log("Letra: ", letras[resultadoD]);

}
}

function eje5(){

var numero = prompt("Ingrese un número: ");
let cuenta = 1;
for (let i = numero; i > 0; i--){
    cuenta = cuenta * i;
    console.log(numero, "! = ", numero, "x", i);
}

console.log("Resultado: ", cuenta);

}

function eje6(params) {
    let numero = prompt("Ingresar número");
    
    if (numero % 2 === 0) {
    console.log("Su número es: Par");
}
else{
    console.log("Su número es: Impar");
}
}

function eje7(){

var algo = prompt("Ingrese algo (menos un número): ");

if(!isNaN(algo) || algo == null || algo == " " ){

    console.log("Valor Invlálido");

}else{
    if(algo === algo.toUpperCase()){
        document.writeln("Está escrito con mayúsculas");
    }else if(algo === algo.toLowerCase()){
        document.writeln("Está escrito con minúsculas");
    }else {
        document.writeln("Es una mezcla")
    }
}

}

function eje8(){

    let texto = prompt("Ingresa un texto: ");
    let str = texto.replaceAll(" ", " ").toLocaleLowerCase();
    let arrStr = str.split("").reverse().join("");

    if (str == arrStr){
        console.log("Es palíndromo");
    }
    else{
        console.log("No es palíndromo")
    }

}

function eje10(params){
    let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0];

    for(var i = 0; i <= 3600; i++){
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        let Sumita = dado1 + dado2;
        arr[Sumita] = arr[Sumita] + 1
    }

    for(var i = 2; i <= 12; i++){
        console.log("El numero ", i, "salió: ", arr[i], "veces");
    }
}

// ejercicio 9
function eje9(params){
    let p1 = new Estudiante("Juan", 30, "masculino", "Matemáticas", "1A");
    console.log(p1.registrar());
    p1.obtDetalles();
}


function Persona(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

Persona.prototype.obtDetalles = function() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`);
};

function Estudiante(nombre, edad, genero, curso, grupo){
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
}
Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;
Estudiante.prototype.registrar = function(){
    console.log(`${this.nombre} ha sido registrado en el curso ${this.curso}, grupo ${this.grupo}.`);
}


function Profesor(nombre, edad, genero, asignatura, nivel){
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}
Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;
Profesor.prototype.asignar = function(){
    console.log(`${this.nombre} ha sido registrado en la asignatura ${this.asignatura}, nivel ${this.nivel}.`);
}

