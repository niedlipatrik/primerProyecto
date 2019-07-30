const modal=document.querySelector('.modal p')
// const myModal=document.getElementById('myModal')
const myModal=document.querySelector('#myModal');
const botonClose=document.querySelector('.close');
botonClose.onclick=()=>myModal.style.display='none';
window.onclick = function(event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
  }
//Funccion abrir o cerrar punho
function abrirCerrar (accion,mienbro)
{
    let accionMienbro=accion;
    let miembroSeleccionado=mienbro;    
    if (accionMienbro === "Abrir" && miembroSeleccionado==="Mano"){
        estado="Mano";
        // document.write("Abriendo la mano. Mano abierta !!!")
        console.log("Abriendo la mano. \n Palm lista !!!");
    }else if (accionMienbro === "Cerrar" && miembroSeleccionado==="Mano"){
        estado="Puño";
        // document.write("Cerrando la mano.<br> Punch listo !!!");
        console.log("Cerrando la mano.\n Punch listo !!!");
    }else{
        estado="Estamos optimizando el código ... Nuevos resultados pronto... ;)";
    }

    return estado;
};

//Funccion mostrar Imagem
function mostrarImagen(Imagen) {
    var img = document.createElement("IMG");
    img.setAttribute("src", `./img/${Imagen}.jpg`);
     modal.appendChild(img);
  };

 //Funccion si tu eliges rendirse 
                function rendirse (resultAbrirCerrar, alvo)
{
    posicionMiembro=2;
    posicionAlvo=5;
    miembro1=resultAbrirCerrar;
    alvo1=alvo;
    while(posicionMiembro<=posicionAlvo){
        const paso=document.createElement('p')
         paso.innerHTML= "Realizando Function: Mover "  +miembro1+ " até " +alvo1
         modal.appendChild(paso)
         console.log(" Reazlizando Function:" +posicionMiembro, "º Moviendo "   +miembro1,  "até " +alvo1, );
        mostrarImagen(posicionMiembro); 
        posicionMiembro++;
    }     

const final=document.createElement('div')
 final.innerHTML=`Ok. Rompiste el monitor.¿Estás feliz ahora?<br><br> <strong><b>ABANDONAR</b> no te lleva a ningún lado y todavía te hace <b>perder oportunidades</b>. <br> Te daré una oportunidad más para elegir la opción <b>CORRECTA</b> <br> haga clic en:<br> <a href="http://127.0.0.1:5500/">INTENTAR NUEVAMENTE</a></strong>`;

 modal.appendChild(final)
};


 //Funccion si tu eliges Continuar 
 function continuar (resultAbrirCerrar, alvo)
 {
     posicionMiembro=7;
     posicionAlvo=10;
     miembro1=resultAbrirCerrar;
     alvo1=alvo;
     while(posicionMiembro<=posicionAlvo){
         const paso=document.createElement('p')
         paso.innerHTML= "Realizando <b>Function</b>: Mover  "  +miembro1+ " até " +alvo1
         modal.appendChild(paso)
         mostrarImagen(posicionMiembro); 
         console.log("\n " +posicionMiembro, "º Moviendo "   +miembro1,  "até " +alvo1, );
         posicionMiembro++
     } 
     
     const final=document.createElement('div')
      final.innerHTML=`<h2>Felicidades !!!</h2>
     No es el mejor de los códigos, pero es una señal de que lo estás intentando. 😊<br>
     <strong>Tus maestros, amigos y programadores te darán varios consejos.<br>
     Estoy seguro de que para el final del curso este código será mucho mejor.</strong><br> <a href="http://127.0.0.1:5500/">VUELVE</a></strong>`
     modal.appendChild(final);
    
 
};
    



function decision(decidir){
    myModal.style.display='block'
    x=decidir;
    if (x==1){
        rendirse(abrirCerrar("Cerrar","Mano"),"Monitor");
    }else if(x==2){
        continuar(abrirCerrar("Abrir","Mano"),"Mano");
    }

}
