prim = false;

for (var i = 1 ;i <= 100;i++){
	if (i == 2){
		prim = true;
		}
	else{
		for(j =2;j < i;j++){
			if(i % j == 0){
			prim =false;
			break;
			}
		prim= true;
		}
		
	}
	if (prim == true){
		console.log(i);
		} 
}	
