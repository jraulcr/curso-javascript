
//NOTA: Para ejecutar el compilador constantemente escribimos en el terminal 'tsc -w *.ts'. Solo funcionara si esta 
//instalado Git Bash o Cygdrive. Con consola Windows o Poweshell, no funciona.
//Para pararlo lo haremos con CTRL - C

type alfanumerico = string | number;
let datos: alfanumerico = 'FulanoDeTal';
datos = 44;

//string
let cadena: string = "Juan Raúl Crespo";

//number
let numero: number = 12;

//booleano
let verdadero_falso: boolean = true;

//any (cualquer valor)
let cualquiera:  any = 'Hola';
cualquiera = 77;

//arrays
let lenguajes: Array<any> = ['JS', 'Java', 'PHP', 'HTML', 'CSS', 12, 20];

let years: number[] = [10, 20, 45, 80];

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, datos);

//Let y Var
var num1 = 10;
var num2 = 12;

if(num1 == 10){
    let num1 = 44;
    let num2 = 55;
    console.log(num1, num2); // Con 'Let' mantendrá los valores sin cambios aunque tenga el mismo nombre de variable. 
    //En el caso de Var los valores varian si se sobreescriben
}

console.log(num1, num2);