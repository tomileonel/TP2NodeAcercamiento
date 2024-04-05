import { getCurrencyAbbreviation } from 'currency-map-country';

function obtenerMoneda(codigoPais) {
    const moneda = getCurrencyAbbreviation(codigoPais);
    return moneda || null; 
}

let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

