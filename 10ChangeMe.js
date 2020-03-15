function changeMe(arr) {
    var count=0;
    for(var i=0;i<arr.length;i++){
    var data ={};
    var age = 2020-arr[i][3]
    count++
    data.firstName = arr[i][0]
    data.lastName = arr[i][1]
    data.gender =arr[i][2]
    data.age= age;    
    if(arr[i][0] == undefined){
        data.firstName = 'Invalid First Name';
    }
    if(arr[i][1] == undefined){
        data.lastName = 'Invalid Last Name';
    }
    if(arr[i][2] == undefined){
        data.gender = 'Invalid Gender';
    }
    if(arr [i][3] == undefined){
        data.age = 'Invalid date of Birth';
    }
    console.log(`${count}. ${data.firstName} ${data.lastName}`)
    console.log(data)
}
}

  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""