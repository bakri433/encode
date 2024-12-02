var text = document.getElementById("codes");
var result = document.getElementById("results");
var ac = document.getElementById("true");
var list = document.getElementById("list");
var rem = document.getElementById("false");
var save = document.getElementById("save");
var era=  document.getElementById("remove");

function encode(){
    if(list.value=="ato"){
        result.innerHTML = window.atob(text.value);

    }else if(list.value=="bto"){
        result.innerHTML = window.btoa(text.value);
        
    }
}

ac.onclick = function(){encode()} ;
list.onchange = encode();
console.log(encode);
rem.onclick = function(){
    text.value = "";
    result.innerHTML = "";
}
save.onclick = function(){
    localStorage.setItem("text",text.value);
    

}
era.onclick = function(){
    localStorage.clear();
}
onload = function(){text.value=localStorage.getItem("text");}
