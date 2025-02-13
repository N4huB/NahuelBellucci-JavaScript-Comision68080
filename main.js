let respuesta
let estado = true

alert("Bienvenido a la plataforma de pedidos de medicamentos de la farmacia del Hospital Britanico")
while (estado){
    respuesta = prompt("¿Tiene medicacion autorizada? si/no")
    if (respuesta == "si"){
        respuesta = parseInt(prompt("¡De que manera prefiere la entrega de la medicacion? \n1-Retiro por mostrador \n2-Envio a domicilio"))
        if (respuesta == 1){
            alert("Puede acercarse de lunes a viernes de 8 a 18hs por la farmacia del hospital central")
            respuesta = prompt("Quiere consultar por otra medicacion? si/no")
            if (respuesta == "no"){
                alert("Fin del proceso")
                estado = false
            }
            else if(respuesta == "si"){
                estado = true
            }
        }
        else if(respuesta == 2){
            alert("Debe indicarnos un numero de telefono y una direccion y dentro de las 48hs nos vamos a comunicar con usted para coordinar la entrega.")
            respuesta = prompt("Quiere consultar por otra medicacion? si/no")
            if (respuesta == "no"){
                alert("Fin del proceso")
                estado = false
            }
            else if(respuesta == "si"){
                estado = true
            }
        }
    }
    else if (respuesta == "no"){
        respuesta = prompt("¿Tiene una receta o una planilla de cronicos? si/no")
        if (respuesta == "si"){
            alert("Debe enviarla al sector de autorizaciones, una vez autorizada debe comunicarse nuevamente por este medio para asi coordinar la entrega")
            respuesta = prompt("Quiere consultar por otra medicacion? si/no")
            if (respuesta == "no"){
                alert("Fin del proceso")
                estado = false
            }
            else if(respuesta == "si"){
                estado = true
            }
        }
        else if (respuesta == "no"){
            alert("Un medico debe prescribirle una receta o planilla de cronicos indicando la medicacion que necesita")
            respuesta = prompt("Quiere consultar por otra medicacion? si/no")
            if (respuesta == "no"){
                alert("Fin del proceso")
                estado = false
            }
            else if(respuesta == "si"){
                estado = true
            }
        }
    }
    
}