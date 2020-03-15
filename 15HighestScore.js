function highestScore (students) {
    var highestScore={};
    for (var i=0;i<students.length;i++){
        if(highestScore[students[i].class]== undefined){
            highestScore[students[i].class] = {}
        }
        var temp=0;
        for(var j=0;j<students.length;j++){
            if(students[i].class == students[j].class){
                if(temp < students[j].score){
                    temp= students[j].score
                    highestScore[students[i].class]= students[j]
                
                }
            }   
        }
        // for(var k=0;k<students.length;k++){
            //     if(highestScore[students[k].class]==students[k].class){

    }
    for(var key in highestScore){
        delete highestScore[key].class
    }
    return highestScore;
}


  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}