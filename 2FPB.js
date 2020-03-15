function fpb(angka1, angka2) {
var pembagiA=[];
var pembagiB=[];
//kondisi mencari angka mana yg lebih besar.
    if(angka1>angka2){
        //looping untuk membagi angka 1 dengan angka 1-angka terbesar(angka1)
        for(var i=0;i<=angka1;i++){
        var temp=0;
        //kondisi untuk mengpush i, jika angka1 habis dibagi oleh i.
        if(angka1%i == 0){
            temp=i;
            pembagiA.push(temp)
        }
        //kondisi untuk mengpush i, jika angka2 habis dibagi oleh i. 
        if(angka2%i ==0){
            temp=i;
            pembagiB.push(temp);
        }
        }
    }else{
        //looping untuk membagi angka 1 dengan angka 1-angka terbesar(angka2)
        for(var h=0;h<=angka2;h++){
        var temp=0;
        //kondisi untuk mengpush h, jika angka2 habis dibagi oleh h. 
        if(angka1%h ==0){
            temp=h;
            pembagiA.push(temp);
        }
        if(angka2%h ==0){
            temp=h;
            pembagiB.push(temp);
        }
        }
    }
// console.log([pembagiA,pembagiB])
var same=[]

//looping untuk mencari angka terbesar yang sama. 
for(var j=0;j<pembagiA.length;j++){
    var temp=0;
    for(var k=0;k<pembagiB.length;k++){
        if(pembagiA[j] == pembagiB[k]){
            temp=pembagiA[j];
            same.push(temp);
        }
    }
}
//return angka terbesar
return same[same.length-1]
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1