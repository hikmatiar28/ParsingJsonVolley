//TUGAS MEMBUAT PROGRAM PEMBAYARAN TIKET PARKIR

const r = require("readline-sync");
function parkir(){
var plat_nomor = r.question("Masukkan Plat nomor Kendaraan : ");
console.log("Jenis Kendaraan : \n" + "1 = Mobil\n" + "2 = Motor");
var jenis_kendaraan = r.question("Pilih [1/2] : ");
var input_jk = false;
while(input_jk == false){
		if(jenis_kendaraan == "1" || jenis_kendaraan == "2"){
			input_jk = true;
		}
		else{
			console.log("Data yang anda masukan salah, Silahkan masukan kembali");
			jenis_kendaraan = r.question("Pilih [1/2] : ");
		}
}
var jam_masuk = r.question("Jam Masuk : ");
jam_masuk = parseInt(jam_masuk)
input_jam_masuk = false ;
while (input_jam_masuk == false){
	if(jam_masuk >= 0 && jam_masuk < 24){
		input_jam_masuk = true;
}
	else{
		console.log("\Silahkan masukan jam yg benar ")
		jam_masuk=r.question('jam masuk');
		jam_masuk= parseInt(jam_masuk)
	}
}

var jam_keluar = r.question("Jam Keluar : ");
jam_keluar = parseInt(jam_keluar)
input_jam_keluar = false ;
while (input_jam_keluar == false){
	if(jam_keluar >= 0 && jam_keluar < 24){
		input_jam_keluar = true;
}
	else{
		console.log("\Silahkan masukan jam yg benar ")
		jam_keluar=r.question('jam ');
		jam_keluar= parseInt(jam_keluar)
	}
}
 
	switch(jenis_kendaraan){
		case '1' :
		jenis_kendaraan = "Mobil";
		jam_pertama = 5000;
		jam_berikut = 3000;
		lama_parkir = jam_keluar - jam_masuk;
		if(lama_parkir > 1){
			total = ((lama_parkir - 1) * jam_berikut) + jam_pertama;
		}
		else{
			total = jam_pertama;
		}
		break;
	
		case '2' :
		jenis_kendaraan = "Motor";
		jam_pertama = 3000;
		jam_berikut = 1500;
		lama_parkir = jam_keluar - jam_masuk;
		if(lama_parkir > 1){
			total = ((lama_parkir - 1) * jam_berikut) + jam_pertama;
		}
		else{
			total = jam_pertama;
		}
	
		break;

		default :
		console.log("Data yang anda masukkan salah")
		break
	
	}
	console.log ('\n-----------------------------------');
	console.log("Parkir yang harus dibayar : " + " Rp. " + total);
	console.log("Terimakasih telah berkunjung");
	console.log ('-----------------------------------\n');
 }

	
	parkir();
	var i = 1 ;
	while (i < 2){
		parkir();
		i++;
	}