//selction sort

var arr=[64,25,1,11,22]
var n = arr.length;

var temp= 0;
for(i=0; i <n;i++){
	var index_terkecil=i;
	for (j=i+1;j<n;j++){
	if(arr[j]>arr[index_terkecil]){
		index_terkecil=j;
		
		}
	}


	if(arr[i]< arr[index_terkecil]){
		temp=arr[i];
		arr[i]=arr[index_terkecil];
		arr[index_terkecil]= temp;
	}
}
console.log(arr);
