let ifpb = document.getElementById("ifpb")
let officecom = document.getElementById("officecom")
let ufpb = document.getElementById("ufpb")
let iframe = document.getElementById("iframe")

function mudarExperiencia(relato){
    if(relato == "ifpb"){
        ifpb.classList.add("actived")
        officecom.classList.remove("actived")
        ufpb.classList.remove("actived")
        iframe.src = "relatos/ifpb/ifpb.html"
    }
    else if(relato == "officecom"){
        ifpb.classList.remove("actived")
        officecom.classList.add("actived")
        ufpb.classList.remove("actived")
        iframe.src = "relatos/officecom/officecom.html"
    }
    else{
        ifpb.classList.remove("actived")
        officecom.classList.remove("actived")
        ufpb.classList.add("actived")
        iframe.src = "relatos/ufpb/ufpb.html"
    }
}