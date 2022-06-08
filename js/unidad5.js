// //UNIDAD 5
// //1. Crear un programa que me pida correo y contraseña, debe dar un alerta si los dos datos ingresados son validos
// var contraseña = prompt('ingrese una contraseña');

//  function prueba(){
//    if (correo = correo) {
//      console.log('true');
//    } else {
//      console.log('correo incorrecto');
//    }
//  }

//  prueba('jgoro@gmail.com')

//  var ingreseCorreo = prompt('ingrese un correo');
//  var ingreseContrasena = prompt('ingrese una contraseña');
//  let correo = 'jgorosito@gmail.com';
//  let contrasena = '1234';

//  function datos() {
//    if (ingreseCorreo !== correo || ingreseContrasena !== contrasena) {
//     alert('Datos invalidos');
//    } else {
//      alert('Datos validos');
//    }
//  }

//  datos(ingreseCorreo, contrasena);

 
// //2. Crear un programa que solo permita ingresar a una persona a un bar si el usuario
// // es mayor de 18 años y su color de remera es roja

//  let ingreseSuEdad = prompt('Ingrese su edad');
//  let remera = prompt('Ingrese el color de su remera')

//  function pasa() {
//    if (ingreseSuEdad > 18 && remera == 'roja') {
//      console.log('puede pasar');
//    } else {
//      console.log('no puede pasar');
//    }
//  }

//  pasa({ ingreseSuEdad, remera });


 /**3. Crear un programa que pida dos notas, evalue el promedio. Debe mostrar un alerta de "Materia aprobada" 
  * si las dos primeras notas son mayores a 7 y si el promedio es mayor a 7 */

  let nota = Number(prompt('ingrese su primer nota'));
  let nota1 = Number(prompt('ingrese su segunda nota'));
  let promedio = (nota + nota1) / 2;
 
  function prom() {
    if (promedio >= 7) {
      alert('Aprobado');
    } else if (promedio <= 7) {
      alert('Desaprobado');
    } else {
      alert('ingrese un dato correcto');
    }
  }
  prom()
