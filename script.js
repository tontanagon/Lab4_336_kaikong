// plus button
function plus1(){
  var counter1 = Number(document.getElementById("result1").innerText);
  document.getElementById("result1").innerHTML = counter1+1;
}function plus2(){
  var counter2 = Number(document.getElementById("result2").innerText);
  document.getElementById("result2").innerHTML = counter2+1;
}function plus3(){
  var counter3 = Number(document.getElementById("result3").innerText);
  document.getElementById("result3").innerHTML = counter3+1;
}function plus4(){
  var counter4 = Number(document.getElementById("result4").innerText);
  document.getElementById("result4").innerHTML = counter4+1;
}


// minus button
function minus1(){
  var counter1 = Number(document.getElementById("result1").innerText);
  if (counter1 > 0 ) {
    document.getElementById("result1").innerHTML = counter1-1;
  }
}function minus2(){
  var counter2 = Number(document.getElementById("result2").innerText);
  if (counter2 > 0 ) {
    document.getElementById("result2").innerHTML = counter2-1;
  }
}function minus3(){
  var counter3 = Number(document.getElementById("result3").innerText);
  if (counter3 > 0 ) {
    document.getElementById("result3").innerHTML = counter3-1;
  }
}function minus4(){
  var counter4 = Number(document.getElementById("result4").innerText);
  if (counter4 > 0 ) {
    document.getElementById("result4").innerHTML = counter4-1;
  }
}

//refreshPage
function refreshPage(){
    window.location.reload();
} 

//calculator for pricr
function cal(){
  var counter1 = Number(document.getElementById("result1").innerText);
  var counter2 = Number(document.getElementById("result2").innerText);
  var counter3 = Number(document.getElementById("result3").innerText);
  var counter4 = Number(document.getElementById("result4").innerText);
  var sum1 = 15*counter1;
  var sum2 = 15*counter2;
  var sum3 = 15*counter3;
  var sum4 = 15*counter4;
  var rsum = sum1+sum2+sum3+sum4;

  var text1 = (document.getElementById("cBBQ").innerText);
  var text2 = (document.getElementById("cKOREAN").innerText);
  var text3 = (document.getElementById("cMALA").innerText);
  var text4 = (document.getElementById("cORIGINAL").innerText);

  if (counter1>0) {
    document.getElementById("cBBQn").innerHTML = text1 ;
    document.getElementById("cBBQr").innerHTML = counter1 +" ชื้น";
    document.getElementById("cBBQs").innerHTML = sum1 +" ฿";

  }else{
    document.getElementById("cBBQn").innerHTML = "";
    document.getElementById("cBBQr").innerHTML = "";
    document.getElementById("cBBQs").innerHTML = "";
  }


  if (counter2>0) {
    document.getElementById("cKOREANn").innerHTML = text2;
    document.getElementById("cKOREANr").innerHTML = counter2 +" ชื้น";
    document.getElementById("cKOREANs").innerHTML = sum2 +" ฿";
  }else{
    document.getElementById("cKOREANn").innerHTML = "";
    document.getElementById("cKOREANr").innerHTML = "";
    document.getElementById("cKOREANs").innerHTML = "";
  }


  if (counter3>0) {
    document.getElementById("cMALAn").innerHTML = text3;
    document.getElementById("cMALAr").innerHTML = counter3 +" ชื้น";
    document.getElementById("cMALAs").innerHTML = sum3 +" ฿";
  }else{
    document.getElementById("cMALAn").innerHTML = "";
    document.getElementById("cMALAr").innerHTML = "";
    document.getElementById("cMALAs").innerHTML = "";
  }


  if (counter4>0) {
    document.getElementById("cORIGINALn").innerHTML = text4;
    document.getElementById("cORIGINALr").innerHTML = counter4 +" ชื้น";
    document.getElementById("cORIGINALs").innerHTML = sum4 +" ฿";
  }else{
    document.getElementById("cORIGINALn").innerHTML = "";
    document.getElementById("cORIGINALr").innerHTML = "";
    document.getElementById("cORIGINALs").innerHTML = "";
  }
  if (counter1 == 0 && counter2 == 0 && counter3 == 0 && counter4 == 0) {
    document.getElementById("cBBQn").innerHTML = "รอคำสั่งซื้ออยู่นะจ๊ะ";
  }


  if (rsum>100) {
  document.getElementById("sum").innerHTML = "ราคาทั้งหมด " + (rsum-(rsum/10)) + " ฿" + "   ลดแล้ว " + rsum/10 +" ฿";
  }else{
    document.getElementById("sum").innerHTML = "ราคาทั้งหมด " + rsum + " ฿";

  }  
}