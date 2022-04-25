//Unidad 3-1

//1)
var noValgoNi5 = 4;
console.log(noValgoNi5);


//2)
var miAnioDeNacimiento = 1989;
//console.log(miAnioDeNacimiento);

var meGustariaTener80Anios = 80;
//console.log(meGustariaTener80Anios);

var voyATener80ElAnio = (miAnioDeNacimiento + meGustariaTener80Anios);
console.log(`En el año ${voyATener80ElAnio} cumplire 80 años`);


//3)
var costoDeUnaTele = 10000;

var ahorros = 9000;

var dineroQueMeFalta = (costoDeUnaTele - ahorros);
console.log(`El dinero que me falta es ${dineroQueMeFalta}`);

//4)
var diasPorAnio = 365;

var cantidadDeAniosEnUnaDecada = 10;

var cantidadDeDiasEnUnaDecada = (diasPorAnio * cantidadDeAniosEnUnaDecada)

console.log(`La cantidad de dias en 10 años son ${cantidadDeDiasEnUnaDecada}`);

//5)
var cantidadDePorciones = (24 / 8);
console.log(`La cantidad de pizzas que tengo son ${cantidadDePorciones}`);

//6)
var  miAnimalFavorito = 'Perro';

var sonIguales = 'Perro' == miAnimalFavorito;

console.log(sonIguales);

//7)
var flan = 'flan';

var flanDos = 'flan con dulce de leche'

console.log((flan != flanDos));

//8)
var soyMayorDeEdad = 32 > 17;

console.log(soyMayorDeEdad);

//9)
var soyMenorDe25 = 32 < 25;

console.log(soyMenorDe25);

//10)
var estamosEnEnero = ('Marzo' === 'Enero');

console.log(estamosEnEnero);

//11)
var noEstamosEnEnero = ('Marzo' !== 'Enero');

console.log(noEstamosEnEnero);

//12)
var miNotaEnElParcial = 8;

var notaMinimaParaAprobar = 6;

var estoyAprobado = (miNotaEnElParcial >= notaMinimaParaAprobar);

console.log(estoyAprobado);

//13)
var esHoraDeAlmorzar = 13 <= 12;

console.log(esHoraDeAlmorzar);


//Unidad 3-2

//1)
//console.log("Definicion de algoritmo: Un algoritmo es una secuencia de pasos finitos bien definidos que resuelven un problema."); 

//2) 
//console.log("Definicion de pseudocodigo: El pseudocódigo es una forma de escribir los pasos que va a realizar un programa de la forma más cercana al lenguaje de programación que vamos a utilizar posteriormente. ");

//3)
//a)
var base = 20;

var altura = 15;

var superficieDelRectangulo = base * altura;

console.log(`La superficie del rectangulo es ${superficieDelRectangulo}`);


var superficieDelTriangulo = (base * altura) / 2;

console.log(`La superficie del triangulo es ${superficieDelTriangulo}`);


var radio = 30;

var superficieDelCirculo = Math.PI * Math.pow(radio, 2);

console.log(`La superficie del circulo es ${superficieDelCirculo}`);


/*var figura = prompt("Ingrese cual figura quiere calcular la superficie, ej: triangulo, rectangulo o circulo");
var base = prompt("ingrese base en cm ej:40");
var altura = prompt("ingrese altura en cm ej:20");
var radio = prompt("ingrese el radio del circlo")

function superficie(){
    if(figura == "triangulo"){
        console.log((base * altura) / 2);
    }else if(figura == "rectangulo"){
        console.log(base*altura);
    }else{
        figura == "circulo";
        console.log(Math.PI * Math.pow(radio, 2));
    }
}

console.log(superficie()); */

//b)
var num1 = 8;

var num2 = 15;

var num3 = 19;

var producto = num1 * num2 * num3;
console.log(`El producto es: ${producto}`);

var suma = num1 + num2 + num3;
console.log(`La suma es: ${suma}`);

var promedio = suma / 3;
console.log(`El promedio es: ${promedio}`);

//c)
var camisa = 3000;

var pantalon = 3500;

var remera = 2200;

var campera = 6650;

var medias = 800;

var compra = camisa + pantalon + remera + campera + medias
console.log(`El valor de la compra es de:$ ${compra}`);

var descuento = compra * 0.15
console.log(`El descuento es de:$ ${descuento}`);

var total = compra - descuento;
console.log(`El valor total es de:$ ${total}`);

//d)
var pesos = 1000;

var dolares = pesos / 200;

console.log(`Los dolares que tengo son: ${dolares}`);

//e)
var compra = 5000;

var iva = 0.21;

var valorIva = compra * 0.21;
console.log(`El valor del IVA es de: ${valorIva}`);


var suma = 0;
var edad = 15;
suma = suma + edad;
console.log(suma);
edad = 45;
suma = suma + edad;
console.log(suma)
edad = 25;
suma = suma + edad;
console.log(suma);