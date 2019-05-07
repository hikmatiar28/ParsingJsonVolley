//TUGAS PEMBUATAN PROGRAM PEMBELIAN TIKET BUS
/*
const r = require("readline-sync");
var multiple = r.question("Jumlah Pembelian : ");
var i = 0;
while(i < multiple){
	var nama = r.question("Nama Pemesan : ");
	console.log("Pilihan Rute Bus : ");
	console.log("\t1 = Jakarta - Bandung\n" + "\t2 = Bandung - Jakarta\n" + "\t3 = Jakarta - Tasikmalaya");
	var ruteBus = r.question("Pilih Rute Bus = ");
*/

const r = require("readline-sync");
function bus(){
var nama = r.question("Masukkan Nama Pemesan : ");
console.log("Pilihan Rute Bus : ");
console.log("\t1 = Jakarta - Bandung\n" + "\t2 = Bandung - Jakarta\n" + "\t3 = Jakarta - Tasikmalaya");
var rutebus = r.question("Pilih [1/2/3] : ");
//console.log("Pilihan jenis kelas : ");
//console.log("\t1 = AC\n" + "\t2 = Non AC");
//var kelas = r.question("Pilih [1/2] : ");

	switch(rutebus){
		case '1' :
			var rute = "Jakarta - Bandung";
			var kelas = r.question("\tKelas AC/NAC : ");
			var jmlkursi = r.question("\tJumlah Kursi : ");
				if(kelas == "AC" || kelas == "ac"){
					harga = 130000;
						total = harga * jmlkursi
				}
				else if(kelas == "NAC" || kelas == "nac"){
					harga = 90000;
				}
				else{
				console.log("Tidak ada kelas lain selain AC/Non AC");
				}
				total = harga * jmlkursi;
				break;
		
		case '2' :
			var rute = "Bandung - Jakarta";
			var kelas = r.question("\tKelas AC/NAC : ");
			var jmlkursi = r.question("\tJumlah Kursi : ");
				if(kelas == "AC" || kelas == "ac"){
					harga = 150000;
						total = harga * jmlkursi
				}
				else if(kelas == "NAC" || kelas == "nac"){
					harga = 70000;
				}
				else{
				console.log("Tidak ada kelas lain selain AC/Non AC");
				}
				total = harga * jmlkursi;
				break;
	
		case '3' :
			var rute = "Jakarta - Tasikmalaya";
			var kelas = r.question("\tKelas AC/NAC : ");
			var jmlkursi = r.question("\tJumlah Kursi : ");
				if(kelas == "AC" || kelas == "ac"){
					harga = 70000;
						total = harga * jmlkursi
				}
				else if(kelas == "NAC" || kelas == "nac"){
					harga = 50000;
				}
				else{
				console.log("Tidak ada kelas lain selain AC/Non AC");
				}
				total = harga * jmlkursi;
				break;
				
			default :
			console.log("Tidak ada data yang sesuai");
			break;
		
	}
	console.log("Harga tiket bus yang harus dibayar sebesar : " + " Rp. " + total);
	console.log("Silahkan melakukan pembayaran di Alfamart/Indomart terdekat");
}
	bus();
	var jalan = true;
	while (jalan == true ){
		ask = r.question("Input data baru ? Y/N :" )
		console.log("Terimakasih, Selamat menikmati perjalanan");
		if (ask == "Y" || ask =="y"){
			bus();
			jalan = true;
		}else{
			jalan = false;
		}
	}
	
	






