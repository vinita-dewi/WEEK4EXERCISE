function cariMedian(arr) {
    var temp=0;
    var index=0;
    //looping untuk mengsortir array
    for(var l=0;l<arr.length;l++){
        for(var i=0;i<arr.length;i++){
            if(arr[l]>arr[l+1]){
                var temp2=arr[l]
                arr[l]=arr[l+1]
                arr[l+1]=temp2
            }
        }
    }
    //kondisi untuk array length genap/ganjil
    if(arr.length%2==0){
        //jika genap, maka cari 2 index yg di tengah > cari nilai tengah antar 2 index itu
        index=Math.floor(arr.length/2)
        var temp=((arr[index]+arr[index-1])/2)
        return temp;
    }else if(arr.length%2 !== 0){
        //jika ganjil, maka cari index yang di tengah. 
        index=Math.floor((arr.length)/2)
        return arr[index];
    }
}

  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5