//1)
/*let numA = prompt("Ingrese su numero");

let numB = prompt("Ingrese otro numero");

function elMenorNumero2() {
  if (numA > numB) {
    alert(`El menor numero es ${numB}`);
  }
  else if (numB > numA) {
    alert(`El menor es ${numA}`);
  } else {
    alert("Los numeros son iguales");
  }
}

elMenorNumero2();*/

function elMenorNumero(num1, num2) {
  if (num1 > num2) {
    return `El menor es ${num2}`;
  } else if (num2 > num1) {
    return `El menor es ${num1}`;
  } else {
    return "Los numeros son iguales";
  }
}

console.log(elMenorNumero(45465, 0));

//2)

function esPar(numero) {
  if (numero % 2 == 0) return "El numero es par";
  else {
    return "El numero es impar";
  }
}
console.log(esPar(10));

//3)
var ganeLaCarrera = false;

if (ganeLaCarrera == false) console.log("Perdiste");
else {
  console.log("Ganaste");
}

//4)
var posicionEnLaCarrera = 6;

if (posicionEnLaCarrera == 1) {
  console.log("FELICITACIONES, SALISTE 1RO");
} else if (posicionEnLaCarrera == 2) {
  console.log("Te falto poquito para ganar");
} else if (posicionEnLaCarrera == 3) {
  console.log("Sos un orgullo para tu familia");
} else if (posicionEnLaCarrera > 3) {
  console.log("Volve a tu casa");
} else {
  console.log("No tires fruta");
}

//5)
function posicionEnLaCarrera2(numero) {
  if (numero == 1) {
    return "FELICITACIONES, SALISTE 1RO";
  } else if (numero == 2) {
    return "Te falto poquito para ganar";
  } else if (numero == 3) {
    return "Sos un orgullo para tu familia";
  } else if (posicionEnLaCarrera > 3) {
    return "Volvé a tu casa";
  } else {
    return "No tires fruta";
  }
}

console.log(posicionEnLaCarrera2(6));

//6)

// VER !!!!
function calculo(importeTotal) {
  descuento = importeTotal * 0.2;

  if (importeTotal > 1000) {
    return importeTotal - descuento;
  } else {
    return importeTotal;
  }
}

console.log(calculo(100050));

// VER !!!!

//7)
let montoVendido = parseFloat(prompt("Ingrese monto vendido"));
let codVendedor = prompt("Ingrese codigo de vendedor");

function prueba() {
  if (codVendedor < 100) {
    let comisiones = montoVendido * 0.3;
    alert(
      `El codigo del vendedor es: ${codVendedor}.
         El monto vendido son : $ ${montoVendido}. 
         Las comisiones son : $  ${comisiones}. `
    );
  } else if (codVendedor >= 100 && codVendedor < 200) {
    comisiones = montoVendido * 0.2;
    alert(
      `El codigo del vendedor es: ${codVendedor}.
         El monto vendido son : $ ${montoVendido}. 
         Las comisiones son : $  ${comisiones}. `
    );
  } else {
    comisiones = montoVendido * 0.1;
    console.log(comisiones);
    alert(
      `El codigo del vendedor es: ${codVendedor}.
     El monto vendido son : $ ${montoVendido}. 
     Las comisiones son : $  ${comisiones}. `
    );
  }
}

prueba();

//8)
let dia = prompt("introduzca un numero");

function semana() {
  if (dia == 1) {
    alert(`Lunes`);
  } else if (dia == 2) {
    alert("Martes");
  } else if (dia == 3) {
    alert("Miercoles");
  } else if (dia == 4) {
    alert("Jueves");
  } else if (dia == 5) {
    alert("Viernes");
  } else if (dia == 6) {
    alert("Sabado");
  } else if (dia == 7) {
    alert("Domingo");
  }
}

semana();

//9)

function cuenta(persona) {
  if (persona < 8) {
    return persona * 1.5;
  } else {
    return persona * 0.5;
  }
}

console.log(cuenta(8));

//10)

function prueba2(monto) {
  if (monto > 100) {
    descuento = monto * 0.15;
    return `El monto con el descuento es ${monto - descuento}`;
  } else {
    return monto;
  }
}

console.log(prueba2());
