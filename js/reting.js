window.onload = function(){
    if(localStorage.getItem('v_b')!=null){
         v_b=localStorage.getItem('v_b');
           document.getElementById('result_v_b').innerText=v_b; 
       }
       if(localStorage.getItem('b')!=null){
         b=localStorage.getItem('b');
           document.getElementById('result_b').innerText=b; 
       }
       if(localStorage.getItem('s')!=null){
         s=localStorage.getItem('s');
       document.getElementById('result_s').innerText=s; 
       }
       if(localStorage.getItem('g')!=null){
         g=localStorage.getItem('g');
           document.getElementById('result_g').innerText=g; 
       }
       if(localStorage.getItem('v_g')!=null){
         v_g=localStorage.getItem('v_g');
           document.getElementById('result_v_g').innerText=v_g; 
       }
}
function hide(){
    var submit=document.getElementById("submit");
    var reset=document.getElementById("reset");
    if(submit.style.display !='none'){
        submit.style.display ="none";
        reset.style.display ="block";
    }
    else{
        submit.style.display  ="block";
        reset.style.display ="none";
    }
}
function disabled(){  
document.getElementById("radio_vb").disabled = true;
document.getElementById("radio_b").disabled = true;
document.getElementById("radio_ss").disabled = true;
document.getElementById("radio_g").disabled = true;
document.getElementById("radio_vg").disabled = true;
}  
function abled(){  
    document.getElementById("radio_vb").disabled = false;
    document.getElementById("radio_b").disabled = false;
    document.getElementById("radio_ss").disabled = false;
    document.getElementById("radio_g").disabled = false;
    document.getElementById("radio_vg").disabled = false;
    }   
function check(){
var radio=document.getElementsByName('radio');
   if (radio[0].checked) {
       r_v_b=++document.getElementById('result_v_b').innerText;
       localStorage.setItem('v_b', r_v_b); 
       disabled();
   } 
   if (radio[1].checked) {
       r_b=++document.getElementById('result_b').innerText;
      localStorage.setItem('b', r_b);
      disabled();
    }
   if (radio[2].checked) {
       r_s=++document.getElementById('result_s').innerText;
       localStorage.setItem('s', r_s); 
       disabled();
    }
   if (radio[3].checked) {
       r_g=++document.getElementById('result_g').innerText;
       localStorage.setItem('g', r_g);
       disabled();
    }
   if (radio[4].checked) {
       r_v_g=++document.getElementById('result_v_g').innerText;
      localStorage.setItem('v_g', r_v_g);
      disabled();
   }
   hide();
}
function escaped(){
var radio=document.getElementsByName('radio');
   if (radio[0].checked) {
       r_v_b=--document.getElementById('result_v_b').innerText;
       localStorage.setItem('v_b', r_v_b); 
       document.getElementById("radio-1").disabled = false;
   } 
   if (radio[1].checked) {
       r_b=--document.getElementById('result_b').innerText;
      localStorage.setItem('b', r_b);
      document.getElementById("radio-2").disabled = false;
    }
   if (radio[2].checked) {
       r_s=--document.getElementById('result_s').innerText;
       localStorage.setItem('s', r_s); 
       document.getElementById("radio-3").disabled = false;
    }
   if (radio[3].checked) {
       r_g=--document.getElementById('result_g').innerText;
       localStorage.setItem('g', r_g);
       document.getElementById("radio-4").disabled = false;
    }
   if (radio[4].checked) {
       r_v_g=--document.getElementById('result_v_g').innerText;
      localStorage.setItem('v_g', r_v_g);
      document.getElementById("radio-5").disabled = false;
   }
   abled();
   hide();
}