function k_to_c(k) {
	var c =k-273;
	return c;
}

function k_to_f(k){
	var f = 9/5 * k_to_c(k)+32
	return f;
	
}

function c_to_f(c){
	var k= c +273;
	return f;
	
}
/*
var k = 293;
var f =k_to_f(k)
console.log(f)
*/

const readline = require("readline-sync");
var k = readline.question("masukkan derajat kelvin : ");
var c = readline.question("masukkan derajat celcius : ");
var num1 = parseInt(k);
var num2 = parseInt(c);
var hasil2 = k_to_f(k);
console.log("hasil konversi dari kelvin ke fahrenheit adalah : " +hasil2);
