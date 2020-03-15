function countProfit(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];

    //     var obj ={};
    //     obj.product = listBarang[0];
    //     console.log(obj)
    // }
    var res = [];
    var pembeliStacattu = [];
    var pembeliUnik = [];
    var pembeliZoro = [];
    var stockStacattu = listBarang[0][2];
    var stockZoro = listBarang[1][2];
    var stockUnik = listBarang[2][2];
    var untung =0;
    //looping untuk membaca  shoppers.
    for (var i = 0; i < shoppers.length; i++) {
        var temp = '';
        //kondisi untuk mempush nama dan mengurangi stock jika stock ada utk di beli.
        if (shoppers[i].product == 'Sepatu Stacattu' && shoppers[i].amount <= stockStacattu) {
            temp += shoppers[i].name;
            pembeliStacattu.push(temp);
            stockStacattu -= shoppers[i].amount;
        } else if (shoppers[i].product == 'Baju Zoro' && shoppers[i].amount <= stockZoro) {
            temp += shoppers[i].name;
            pembeliZoro.push(temp);
            stockZoro -= shoppers[i].amount;
        } else if (shoppers[i].product == 'Sweater Uniklooh' && shoppers[i].amount <= stockUnik) {
            temp += shoppers[i].name;
            pembeliUnik.push(temp);
            stockUnik -= shoppers[i].amount;
        }
    }
    //push data ke listBarang.
    listBarang[0].push(pembeliStacattu, stockStacattu)
    listBarang[1].push(pembeliZoro, stockZoro)
    listBarang[2].push(pembeliUnik, stockUnik)
    console.log(listBarang[0])
    for (var h = 0; h < listBarang; h++) {
        var obj = {};
        obj.product = listBarang[h][0];
        obj.shoppers = listBarang[h][3];
        obj.leftOver = listBarang[h][4];
        obj.totalProfit = (listBarang[h][2] - listBarang[h][4]) * listBarang[h][1];
        console.log(obj)
        res.push(obj);
    }
    // return res;
}

// return listBarang;
// push var yg sudah ada, ke dalam object.
// for (var j = 0; j < listBarang; j++) {
//     itemList = {};

//     itemList.product = listBarang[j][0];
//     itemList.shoppers = listBarang[j][3];
//     itemList.leftOver = listBarang[j][4];
//     itemList.totalProfit = (listBarang[j][2] - listBarang[j][4]) * listBarang[j][1]
//     // console.log(itemList);
//     res.push(itemList);
// }
// return res;
// var itemListStacattu={}
// itemListStacattu.product= listBarang[0][0]
// itemListStacattu.shoppers=pembeliStacattu;
// itemListStacattu.leftOver= listBarang[0][4]
// itemListStacattu.totalProfit= (listBarang[0][2]-listBarang[0][4])*listBarang[0][1]

// var itemListZoro ={}
// itemListZoro.product=listBarang[1][0]
// itemListZoro.shoppers= pembeliZoro;
// itemListZoro.leftOver=listBarang[1][4]
// itemListZoro.totalProfit=(listBarang[1][2]-listBarang[1][4])*listBarang[1][1]

// var itemListUnik ={}
// itemListUnik.product=listBarang[2][0]
// itemListUnik.shoppers= pembeliUnik;
// itemListUnik.leftOver=listBarang[2][4]
// itemListUnik.totalProfit=(listBarang[2][2]-listBarang[2][4])*listBarang[2][1]

// res.push(itemListStacattu,itemListZoro,itemListUnik)
// return res;
// }

//test case untuk push pembeli dan push stock
// return [[pembeliStacattu,stockStacattu],[pembeliZoro,stockZoro],[pembeliUnik,stockUnik]]



// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
{ name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
{ name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro' ,
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]

                     //     var countProfit =[];
                     //     var pembeliStacattu=[]
                     //     var pembeliZoro=[]
                     //     var pembeliUnik=[]
                     //     //looping untuk membaca shoppers
                     //     for(var i=0;i<shoppers.length;i++){
                     //         var temp='';
                     //         //kondisi untuk mengecek nama barang
                     //         if(shoppers[i].product=='Sepatu Stacattu' && shoppers[i].amount<listBarang[0][2]){
                     //             temp+=shoppers[i].name;
                     //             pembeliStacattu.push(temp);
                     //             var stockStacattu= listBarang[0][2]-shoppers[i].amount
                     //         }else if(shoppers[i].product=='Baju Zoro'&& shoppers[i].amount<listBarang[1][2]){
                     //             temp+=shoppers[i].name;
                     //             pembeliZoro.push(temp);
                     //             var stockZoro= listBarang[1][2]-shoppers[i].amount
                     //         }else if(shoppers[i].product=='Sweater Uniklooh'&& shoppers[i].amount<listBarang[2][2]){
                     //             temp+=shoppers[i].name;
                     //             pembeliUnik.push(temp)  
                     //             var stockUnik=listBarang[2][2]-shoppers[i].amount
                     //         }
                     //     }
                     // return[pembeliStacattu,stockStacattu],[pembeliUnik,stockUnik],[pembeliZoro,stockUnik]
                     // }