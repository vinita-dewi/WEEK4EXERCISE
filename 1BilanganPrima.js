function angkaPrima(angka) {
    var res=[] /*variabel yang mengandung angka pembagi bil tersebut*/
    //looping dari angka 1- angka tersebut
    for(var i=1;i<=angka;i++){
        //i di kosongkan setiap awal looping.
        var temp=0;
        //kondisi untuk mengpush i, jika hasil modular nya 0.
        if(angka%i ==0){
            temp=i;
            res.push(temp)
        }
    }
    //kondisi yang mereturn true jika panjang res hanya 2 
    //karena angka hanya habis dibagi oleh 1 dan angka tsb.
    if(res.length==2){
        return true;
    }else{
        return false;
    }
}


  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false