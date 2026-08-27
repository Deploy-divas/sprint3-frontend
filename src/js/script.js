// menu hamburguer

document.addEventListener('DOMContentLoaded', () => {
    const menuIcone = document.getElementById('menu-icone');
    //querySelector: seletor
    const navMenu = document.querySelector('nav');

    if(menuIcone && navMenu){
        menuIcone.onclick=()=>{
            navMenu.classList.toggle('active');
            menuIcone.classList.toggle('open');
        }
    }
    
})


//hero
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        header.classList.add("com-cor");
    } else {
        header.classList.remove("com-cor");
    }
});


//contato

const form = document.getElementById("form"); 


function contato(){
    if (form.checkValidity()){
        const nome = document.getElementById("nome").value; 
        alert(`Obrigada por nos contatar, ${nome}! Sua mensagem foi enviada e será respondida assim que possivel`)
    }
}