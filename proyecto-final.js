let elementosAcordeon = document.getElementsByClassName("acordeon");

for(let i = 0; i< elementosAcordeon.length; i++){
    elementosAcordeon[i].addEventListener("click", function(){
    this.classList.toggle("active");
    let contenido = this.nextElementSibling;
    if(contenido.style.display == "block"){
        contenido.style.display = "none";
    }else{
        contenido.style.display = "block";
    }
})
}