function naikAngkot(arrPenumpang) {
var res=[]
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    for(var j=0;j<arrPenumpang.length;j++){
        var naikAngkot={}
        for(var i=0;i<rute.length;i++){
            if(rute[i]==arrPenumpang[j][1]){
                var Naik=i;
            }if(rute[i]==arrPenumpang[j][2]){
                var Turun=i;
            }
        }
     var bayar= Math.abs((Turun-Naik )*2000)  
     naikAngkot.penumpang = arrPenumpang[j][0];
     naikAngkot.naikDari = arrPenumpang[j][1];
     naikAngkot.tujuan = arrPenumpang[j][2];
     naikAngkot.bayar= bayar;
    res.push(naikAngkot)
    }
return res;
}  

  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]