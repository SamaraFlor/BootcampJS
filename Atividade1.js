//Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
// que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar);
//solução 1
function verificaPalindromo(string) {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('ana');


// solução 2

function verificar(string){
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length/2; i++){
        if (string[i] !== string [string.length -1-i]){ 
        return false;
    }
}
return true;
}

console.log(verificar("gato"));