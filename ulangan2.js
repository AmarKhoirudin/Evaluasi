document.write('<br>')
document.write('======SOAL 2======')
document.write('<br>')
document.write('===== Genap  ======')
document.write('<br>')
var n=20;
var ganjil=[];
var genap=[];

function tes(){
  
  for(var i=0; i<= n; i++){
    
    if(i % 2 == 0){
      genap.push(i)
     
    }else{
      ganjil.push(i)
    }
    
  }
  document.write(genap)
  document.write('<br>')
  document.write('===== Ganjil ======')
  document.write('<br>')
  document.write(ganjil)
}
tes()
