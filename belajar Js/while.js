//while

/*var i=0;
	while (i <= 15){
		console.log(i);
		i++
	}
	
	var i=20
	do {
		console.log(i);
		i++
	}while(i<=10);
	*/
	
	var array = [30,20,80,50,10,60,3]
	var jum = array.length;
	var terbesar=0;
	var i=0;
	while (i<jum ){
		if(array[i]>array[terbesar])
			terbesar= i;
		i++;
		
	}
	console.log(array [terbesar])
	console.log(terbesar)
	
	var array = [30,20,80,50,10,60,3]
	var jum = array.length;
	var terkecil=0;
	var i=0;
	do {
		if (array[i]<array[terkecil]){
		terkecil= [i];
		}
		i++;
	}while (i<jum );
	
	console.log(array [terkecil])
	console.log(terkecil)
	