//struktur kontrol / flow control / percabangan 

	// struktur if else 
		//if
		var program_berjalan = false;
		if (program_berjalan){
			console.log("program berjalan")
		}
	//if.. else 
		var nilai= 80;
		if(nilai >75){
			console.log("lulus");
		}
		else{
			console.log("tidak lulus");
		}
	//if..elseif..else
/*

	var bulan =1;
	if (bulan == 1){
		console.log("januari");
	}
	else if (bulan ==2){
		console.log('februari');
	}
	else {
		console.log("desember");
	}
	
	 switch case(condition){
		case {value}:
	//statement
	break;
	
	default:
	//statement
	break;
	
		}
*/
	var bulan = 1;
	
	switch(bulan){
		case 1:
		console.log("januari");
		break;
		case 2:
		console.log("februari");
		break;
		case 3:
		console.log("maret");
		break;
		case 4:
		console.log("april");
		break;
		case 5:
		console.log("mei");
		break;
		case 6:
		console.log("juni");
		break;
		case 7:
		console.log("juli");
		break;
		case 8:
		console.log("agustus");
		case 9:
		console.log("september");
		break;
		case 10:
		console.log("oktober");
		break;
		case 11:
		console.log("november");
		break;
		default:
		console.log("desember");
		
		
	}