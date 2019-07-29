
//Funccion abrir o cerrar punho
function abrirCerrar (accion,mienbro)
{
    let accionMienbro=accion;
    let miembroSeleccionado=mienbro;    
    if (accionMienbro === "Abrir" && miembroSeleccionado==="Mano"){
        estado="Mano";
        document.write("Abriendo la mano. Mano abierta !!!");
        console.log("Abriendo la mano. \n Palm lista !!!");
    }else if (accionMienbro === "Cerrar" && miembroSeleccionado==="Mano"){
        estado="Puño";
        document.write("Cerrando la mano.<br> Punch listo !!!");
        console.log("Cerrando la mano.\n Punch listo !!!");
    }else{
        estado="Estamos optimizando el código ... Nuevos resultados pronto... ;)";
    }

    return estado;
};

//Funccion mostrar Imagem
function mostrarImagen(Imagem) {
    y=Imagem;

    var x = document.createElement("IMG");
    x.setAttribute("src", `./img/${y}.jpg`);
    // `Hola me llamo ${persona.nombre} tengo ${persona.edad} años...` 
    return document.body.appendChild(x);
  };

 //Funccion si tu eliges rendirse 
function rendirse (resultAbrirCerrar, alvo)
{
    posicionMiembro=1;
    posicionAlvo=5;
    miembro1=resultAbrirCerrar;
    alvo1=alvo;
    while(posicionMiembro<=posicionAlvo){
        document.write("<br>" +posicionMiembro, "º movendo "  +miembro1, " até " +alvo1, " <br> ");
        console.log("\n " +posicionMiembro, "º movendo "   +miembro1,  "até " +alvo1, );
        mostrarImagen(posicionMiembro); 
        document.write("<br>");
        posicionMiembro++
    }     


return document.write(`Ok. Rompiste el monitor.¿Estás feliz ahora?<br><br> <strong><b>ABANDONAR</b> no te lleva a ningún lado y todavía te hace <b>perder oportunidades</b>. <br> Te daré una oportunidad más para elegir la opción <b>CORRECTA</b> <br> haga clic en:<br> <a href="http://127.0.0.1:5500/">INTENTAR NUEVAMENTE</a></strong>`);

 
};


 //Funccion si tu eliges rendirse 
 function continuar (resultAbrirCerrar, alvo)
 {
     posicionMiembro=7;
     posicionAlvo=10;
     miembro1=resultAbrirCerrar;
     alvo1=alvo;
     while(posicionMiembro<=posicionAlvo){
         document.write("<br>" +posicionMiembro, "º movendo "  +miembro1, " até " +alvo1, " <br> ");
         console.log("\n " +posicionMiembro, "º movendo "   +miembro1,  "até " +alvo1, );
         mostrarImagen(posicionMiembro); 
         document.write("<br>");
         posicionMiembro++
     } 
     
     
     return document.write(`<h1>Felicidades !!!</h1>
     No es el mejor de los códigos, pero es una señal de que lo estás intentando. 😊<br>
     <strong>Tus maestros, amigos y programadores te darán varios consejos.<br>
     Estoy seguro de que para el final del curso este código será mucho mejor.</strong><br> <a href="http://127.0.0.1:5500/">VUELVE</a></strong>`);

 
};
    



function decision(decidir){
    x=decidir;
    if (x==1){
        rendirse(abrirCerrar("Cerrar","Mano"),"Monitor");
    }else if(x==2){
        continuar(abrirCerrar("Abrir","Mano"),"Mano");
    }


}


