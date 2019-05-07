//Gaji honorer perhari = 100.000 
// 100.000 = 8 jam
// 1 jam stelah 1 hari kerja = 1.500
// 1 jam = 1.500

	/*
	var gajipok = 150000
	var lembur = 0;
	var lemburperjam = 1500;
	var jamkerjanormal = 8;
	
	const r = require ('readline-sync')
	var jmlhjamkerja = r.question("masukan jumalh jam kerja  :")
	
	if(jmlhjamkerja > jamkerjanormal){
		lembur = jmlhjamkerja - jamkerjanormal;
		gaji = (lembur * lemburperjam) + gajipok;
	}else{
		lembur = (jmlhjamkerja * 0) + gajipok;
		gaji = lembur;
	}
	console.log("Gaji pokok ditambah gaji lembur adalah : = " +"Rp."+ gaji)
	*/
	
	
	var gajipok = 100000
	var lembur = 0;
	var lemburperjam = 1500;
	var jamkerjanormal = 8;
	var tanggal = 0;
	var jam = 0;
	
	const r = require('readline-sync');
	var Nama_karyawan =r.question("Nama karyawan : ");
	var jmlharikerja =r.question("Masukan jumlah jam hari kerja :");
	var arr = [];
	for(var i = 0; i < jmlharikerja ; i++){
		hari= i+1
		jmlhjamkerja =r.question("Masukan jumalah jam kerja hari ke "+hari+" : ")
		

	if(jmlhjamkerja > jamkerjanormal){
		lembur = jmlhjamkerja - jamkerjanormal;
		gaji = (lembur * lemburperjam) + gajipok;
		arr[i]= gaji;
	}else{
		lembur = (jmlhjamkerja * 0) + gajipok;
		gaji = lembur;
		arr[i]= gaji;
	}
	}
	
	var akhir = arr.length;
	var total = 0;
	for(var i= 0; i< akhir; i++){
		hari =i+1;
		console.log("gaji hari ke - "+ hari+" " + arr[i]);
		total=total+arr[i];
	}
	
	
	console.log("Gaji total keseluruhan" +" : "+ total );