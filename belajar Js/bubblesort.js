
var arr = [5,1,4,2,8,];

var n = arr.length;
var temp = 0;
var step=0;
for (var i =0; i < n ; i++){
	var tukar=false
	for (var j = 0;j <n -1; j++){
		if (arr[j]> arr[j+1]){
			temp = arr[j+1];
			arr[j+1]= arr[j];
			arr[j]=temp;
			tukar = true;
		}
	}

if(tukar == false){
	break;
	}
	step = i +1;
}
console.log("jumlah langkah" + step);
console.log(arr);

