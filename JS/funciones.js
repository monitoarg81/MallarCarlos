document.getElementById('bperfil').addEventListener("click", function(){
    document.getElementById("tperfil").style.visibility="visible";
    document.getElementById("tpersonal").style.visibility="hidden";
    document.getElementById("tformacion").style.visibility="hidden";
    document.getElementById("texperiencia").style.visibility="hidden";
})

document.getElementById('bpersonal').addEventListener("click", function(){
    document.getElementById("tperfil").style.visibility="hidden";
    document.getElementById("tpersonal").style.visibility="visible";
    document.getElementById("tformacion").style.visibility="hidden";
    document.getElementById("texperiencia").style.visibility="hidden";
})

document.getElementById('bformacion').addEventListener("click", function(){
    document.getElementById("tperfil").style.visibility="hidden";
    document.getElementById("tpersonal").style.visibility="hidden";
    document.getElementById("tformacion").style.visibility="visible";
    document.getElementById("texperiencia").style.visibility="hidden";
})

document.getElementById('bexperiencia').addEventListener("click", function(){
    document.getElementById("tperfil").style.visibility="hidden";
    document.getElementById("tpersonal").style.visibility="hidden";
    document.getElementById("tformacion").style.visibility="hidden";
    document.getElementById("texperiencia").style.visibility="visible";
})