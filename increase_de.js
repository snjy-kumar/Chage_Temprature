//HTML goer like
// <label id="myLabel">0</label><br>
// <button id="inButton"> Increase </button>
// <button id="deButton"> Decrease </button>

let count = 0;

document.getElementById("inButton").onclick = function(){
  count+=1;
  document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("deButton").onclick = function(){
  count-=1;
  document.getElementById("myLabel").innerHTML = count;
}
