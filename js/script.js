window.onscroll = function() {

  scroll = document.documentElement.scrollTop;

  header = document.getElementById("header");

  //Resultados con scroll

  if (scroll > 20){
    header.classList.add('menu_mod');
  }else if(scroll < 20){
    header.classList.remove('menu_mod');
  }


}



// Menu responsive script 

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("site__move");
nav = document.getElementById("nav");

function mostrar_menu(){
    
    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}