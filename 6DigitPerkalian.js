function digitPerkalianMinimum(angka) {
    var faktor = [];
    // looping untuk membagi angka dari 1-angka tsb.
    for (var i = 0; i <= angka; i++) {
        //kondisi untuk mengpush angka jika angka mod i adalah 0. 
        var temp = '';
        var bagi = 0;
        if (angka % i == 0) {
            bagi = angka / i;
            temp = `${i}${bagi}`
            faktor.push(temp);
        }
    }
    //console.log(faktor)
    //menghitung length di tiap string dalam array.
    var digit = [];
    for (var j = 0; j < faktor.length; j++) {
        var temp2 = 0;
        temp2 = faktor[j].length
        digit.push(temp2)

    }
    //sorting digit tersedikit 
    for (var k = 0; k < digit.length; k++) {
        for (var l = 0; l < digit.length; l++) {
            if (digit[l] > digit[l + 1]) {
                var temp3 = digit[l];
                digit[l] = digit[l + 1]
                digit[l + 1] = temp3;
            }
        }
    }
    return digit[0];
}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
