document.write('<br>')
document.write('========SOAL 1A=====')
document.write('<br>')
for(y=1; y<6; y++){
    for(x=1; x<6; x++){
      document.write('+')
    }
    document.write('<br>')
  }

  document.write('<br>')
  document.write('========SOAL 1B=====')
  document.write('<br>')
  
  var n= 7
  for(i=0;i<n;i++){
  for(y=0;y<n;y++){
    if(i==3||y==3){
      document.write('+')
    }else{document.write(' - ')
         }
  }
  document.write('<br>')
  }
    
