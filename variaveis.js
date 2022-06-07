//quando declaro o var, o java traz para cima antes de ler
// hoisting se for variavel let tem que declarar antes do console
numberOne = 3;
console.log(numberOne + 2);
var numberOne;


// let vai permanecer qquando atribuido global

var firstName = "João";
var lastName = "Souza";

if (firstName === "Pedro") {
    let firstName = "Pedro";
    let lastName = "Silva";
}
console.log(firstName, lastName);


// constantes, declarada em SNAPE_UPPER-CASE, escopo de bloco e não faz hoisting
//não podemos reatribuir/redeclarar o valor de uma constante 
// const precisa ser atribuida antes de ser iniciada, não posso iniciar sem atribuir o valor 
const FIRST_NAME ="Samara";

