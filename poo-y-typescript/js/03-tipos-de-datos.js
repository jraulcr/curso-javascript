//NOTA: Para ejecutar el compilador constantemente escribimos en el terminal 'tsc -w *.ts'. Solo funcionara si esta 
//instalado Git Bash o Cygdrive. Con consola Windows o Poweshell, no funciona.
//Para pararlo lo haremos con CTRL - C
var datos = 'FulanoDeTal';
datos = 44;
//string
var cadena = "Juan Raúl Crespo";
//number
var numero = 12;
//booleano
var verdadero_falso = true;
//any (cualquer valor)
var cualquiera = 'Hola';
cualquiera = 77;
//arrays
var lenguajes = ['JS', 'Java', 'PHP', 'HTML', 'CSS', 12, 20];
var years = [10, 20, 45, 80];
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, datos);
//Let y Var
var num1 = 10;
var num2 = 12;
if (num1 == 10) {
    var num1_1 = 44;
    var num2_1 = 55;
    console.log(num1_1, num2_1); // Con 'Let' mantendrá los valores sin cambios aunque tenga el mismo nombre de variable. 
    //En el caso de Var los valores varian si se sobreescriben
}
console.log(num1, num2);
