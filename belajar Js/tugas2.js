//Tugas
//soal
/*
nilai ujian -> angka 89

Ubah angka -> huruf 
85 - 100	: A
70 - 84		: B
55 - 69		: C
40 - 54		: D
0 - 39		: E

STUDI KASUS NILAI = 40
*/

console.log("JAWABAN");
	
	var nilai = 120;
	
	if(nilai >= 85 && nilai <= 100){
		console.log("A")
	}
	else if (nilai >= 70 && nilai <= 84){
		console.log("B")
	}
	else if (nilai >= 55 && nilai <= 69){
		console.log("C")
	}
	else if(nilai >=  40 && nilai <= 54){
		console.log("D")
	}
	else if(nilai >=0 && nilai <=39){
		console.log("E")
	}
	else {
		console.log("maaf data yg di inputkan tidak valid")
	}