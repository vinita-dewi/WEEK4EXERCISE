function shoppingTime(memberId, money) {
var itemList = [
    {
        nama: 'Sepatu Brand Stacattu',
        harga: 1500000
    },
    {
        nama: 'Baju Brand Zoro',
        harga :500000
    },
    {
        nama: 'Baju Brand H&N',
        harga: 250000
    },
    {
        nama: 'Sweater Brand Uniklooh',
        harga: 175000
    },
    {
        nama: 'Casing Handphone',
        harga: 50000
    }
]
var listPurchased =[];
var struk={}
var totalSpent=0
if(memberId == '' || memberId== undefined){
    return 'Mohon Maaf, Toko X hanya berlaku untuk member saja'
}else if(money<50000){
    return 'Mohon Maaf, Uang tidak cukup'
}else{
    //looping untuk mengurangi jumlah uang
    for(var i=0;i<itemList.length;i++){
        if(money>=itemList[i].harga){
            listPurchased.push(itemList[i].nama)
            totalSpent+=itemList[i].harga
        }
    }
    //masukkan data ke struk
    struk.memberId= memberId;
    struk.money= money;
    struk.listPurchased= listPurchased;
    struk.changeMoney= money-totalSpent;
    return struk
    }

}

  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja