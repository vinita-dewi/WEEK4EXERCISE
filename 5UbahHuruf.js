function ubahHuruf(kata) {
    var hasil='';
    for(var i=0;i<kata.length;i++){
        switch (kata[i]){
            case 'a':
                hasil+= 'b';
                break;
            case 'b':
                hasil+='c';
                break;
            case 'c':
                hasil+='d';
                break;
            case 'd':
                hasil+='e';
                break;
            case 'e':
                hasil+='f';
                break;
            case 'f':
                hasil+='g';
                break;
            case 'g':
                hasil+='h';
                break;
            case 'h':
                hasil+='i';
                break;
            case 'i':
                hasil+='j';
                break;
            case 'j':
                hasil+='k';
                break;
            case 'k':
                hasil+='l';
                break;
            case 'l':
                hasil+='m';
                break;
            case 'm':
                hasil+='n';
                break;
            case 'n':
                hasil+='o';
                break;
            case 'o':
                hasil+='p';
                break;
            case 'p':
                hasil+='q';
                break;
            case 'q':
                hasil+='r';
                break;
            case 'r':
                hasil+='s';
                break;
            case 's':
                hasil+='t';
                break;
            case 't':
                hasil+='u'
                break;
            case 'u':
                hasil+='v';
                break;
            case 'v':
                hasil+='w';
                break;
            case 'w':
                hasil+='x';
                break;
            case 'x':
                hasil+='y';
                break;
            case 'y':
                hasil+='z';
                break;
            case 'z':
                hasil+='a';
                break;
        }
    }
return hasil;
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu