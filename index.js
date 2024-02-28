//  1
function ConversorDeTemperatura(celsius){
    var fahrenheit = (celsius * 9/5) + 32
        return fahrenheit;
}

var temperaturaCelsius = 30;
var temperaturaFahrenheit =  celsiusParaFahrenheit(temperaturaCelsiu);
console.log(temperaturaCelsius+ "graus Celsius equivalem a" + temperaturaFahrenheit + "graus fahrenheit.");


//2

function ConversorDeBitcoin(bitcoin, TaxaDeconversao) {
    var valorEmReal = bitcoin * TaxaDeconversao;
    return valorEmReal;
}

// exemplo de uso da função

var bitcoin = 0.5
var TaxaDeconversao = 200000;
var valorEmReal = ConversorDeBitcoin(bitcoin, TaxaDeconversao);
console.log(bitcoin + "bitcoin equivalem aproximadamente R$" + valorEmReal.toFixed(2) + ".");


// 3


function ComparaSenhas(senha1, senha2) {
    if (senha1 === senha2) {
        return "Senhas correspondentes com sucesso.";
    } else {
        return "Erro: As senhas não correspondem.";
    }
} 

console.log(ComparaSenhas("senha123", "senha123"));
console.log(ComparaSenhas("senha123", "senha456"));