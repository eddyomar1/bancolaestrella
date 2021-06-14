// jas

var ofl = document.getElementById('ofl');

setInterval(() => {
  if(navigator.onLine==false){
 ofl.style.bottom = '0px';}

 if(navigator.onLine==true){
 ofl.style.bottom = '-100px';}

}, 5000);




// setTimeout(hdr_ns, 5000);

// hdr.addEventListener("click", function(event){
// hdr_ns();
// });



setTimeout(() => {
  location.reload();
}, 60000*60);
