function graduates(students) {
    //     var graduates={}
    //     for(var i=0;i<students.length;i++){
    //         if(graduates[students[i].class]== undefined){
    //             graduates[students[i].class]=[]
    //         }
    //         for(var j=0;j<students.length;j++){
    //             if(students[j].score>75){
    //                 graduates[students[i].class].push({names :students[i].name, score: students[j].score})  
    //            }
    //         }
    //     }

    // return graduates;
    var graduates = {};
    var foxes = [];
    var wolves = [];
    var tigers = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i].class == 'foxes' && students[i].score > 75) {
            foxes.push({
                name: students[i].name,
                score: students[i].score
            });
        } else if (students[i].class == 'wolves' && students[i].score > 75) {
            wolves.push({
                name: students[i].name,
                score: students[i].score
            });
        } else if (students[i].class == 'tigers' && students[i].score > 75) {
            tigers.push({
                name: students[i].name,
                score: students[i].score
            });

        }
        if(foxes.length > 0) {
            graduates.foxes = foxes;
        }if(wolves.length > 0) {
            graduates.wolves = wolves;
        }if(tigers.length > 0) {
            graduates.tigers = tigers;
        }
    }
    return graduates;
}

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}