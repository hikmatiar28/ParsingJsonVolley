/*
const readline

const rl=readline.creatInterface((
	input :procces.stdin,
	output :process.stout
	)):
	
rl.question('what do you think of node.js?', (answer) =>{
	// TODO:log the answer in a database
	console.log(;thank you for your valuable feedback: $(answer)');
	
	rl.close();
	));
*/
//r=readline
const r=require('readline-sync');
console.log("hallo ini siapa ? silakan masukan data diri anda:")
var nama_depan = r.question("Nama depan : ");
var nama_belakang =r.question("Nama belakang : ");
console.log("Hallo!"+nama_depan +" "+nama_belakang);