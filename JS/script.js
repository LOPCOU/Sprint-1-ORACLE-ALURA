const input = document.querySelector(".input");
const output = document.querySelector(".output");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function but_do(){
    const t_do = encriptacion(input.value)
    output.value = t_do
    document.getElementById("respuesta").style.zIndex = "2";
    if (input.value == ""){
        document.getElementById("respuesta").style.zIndex = "0";
    }
}


function encriptacion(texto_e){
    let mat = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto_e = texto_e.toLowerCase()
    for(let i=0; i<mat.length;i++){
        if(texto_e.includes(mat[i][0])){
            texto_e = texto_e.replaceAll(mat[i][0],mat[i][1])
        }
    }
    return texto_e
}

function but_undo(){
    const t_un = desencriptacion(input.value)
    output.value = t_un
    document.getElementById("respuesta").style.zIndex = "2";
    if (input.value == ""){
        document.getElementById("respuesta").style.zIndex = "0";
    }
}


function desencriptacion(texto_d){
    let mat = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto_d = texto_d.toLowerCase()
    for(let i=0; i<mat.length;i++){
        if(texto_d.includes(mat[i][1])){
            texto_d = texto_d.replaceAll(mat[i][1],mat[i][0])
        }
    }
    return texto_d
}

//copiar

function copiar(){
    var inn = document.getElementById("output").value;
    navigator.clipboard.writeText(inn);
    alert("Se ha copoado " + copyText.value +" con exito");
}