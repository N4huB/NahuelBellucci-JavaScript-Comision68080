function generadorPedido(){
        // ------------------ Variables de ingreso --------------------//
    let cuantaUsuarioExistente
    let dniUsuario
    let usuarioEncontrado
    let estadoUsuario = false
    let consultaRegistro

    // ----------- Variables de seleccion de productos ----------- //
    let numeroIngresado
    let agregarProducto
    let cantidadProducto
    let precioTotal
    let totalCompra = 0
    const carritoCompras = []
    let cantidad
    let consulta

    // ----------- Variables de confirmacion de pedido ----------- //
    let confirmacionPedido

    let estadoPrograma = true
    // ------------- Lista de clientes -------------//
    const clientes = []

    // ------------------------------------------ //

    // ---------------- Funciones -----------------//
    function consultarUsuario(numeroDni, listaClientes){
        for (let i = 0; i < listaClientes.length; i++) {
            if (listaClientes[i].dni === numeroDni) {
                return listaClientes[i];
            }
        }
        return null;
    }
    function agregarUsuario() {
        const nuevoUsuario = {
            id: clientes.length + 1,
            dni: prompt("Ingrese el DNI del cliente:"),
            nombre: prompt("Ingrese el nombre del cliente:"),
            apellido: prompt("Ingrese el apellido del cliente:"),
            telefono: prompt("Ingrese el teléfono del cliente:"),
            direccion: prompt("Ingrese la dirección del cliente:"),
            localidad: prompt("Ingrese la localidad del cliente:")
        };
        clientes.push(nuevoUsuario);
        alert("Usuario generado con exito!");
    }

    // ------------------------------------------ //
    alert("Bienvenidos a Genesis2815 Store")
    while(true){
        cuantaUsuarioExistente = prompt("Tiene cuenta en nuestra tienda? SI / NO")
        if (cuantaUsuarioExistente && cuantaUsuarioExistente.toUpperCase() === "SI"){
            dniUsuario = prompt("Ingrese su numero de DNI:")
            usuarioEncontrado = consultarUsuario(dniUsuario, clientes)
            if (usuarioEncontrado){
                alert("Ingreso exitoso.")
                estadoUsuario = true
                break
            }
            else{
                alert("El numero de dni es incorrecto o no se encuentra registrado en nuestra base de datos")
            }
        }
        else if (cuantaUsuarioExistente && cuantaUsuarioExistente.toUpperCase() === "NO"){
            consultaRegistro = prompt("Quiere generar un usuario? SI / NO")
            if (consultaRegistro && consultaRegistro.toUpperCase() === "SI"){
                alert("Vamos a solicitarle algunos datos para generar el usuario.")
                agregarUsuario()
            }
            else if (consultaRegistro && consultaRegistro.toUpperCase() === "NO"){
                alert("Procedemos sin generear un usuario.")
                estadoUsuario = false
                break
            }
            else{
                alert("La opcion ingresada es incorrecta")
            }
        }
        else{
            alert("La opcion ingresada es incorrecta")
        }
    }

    // ------------------------------------------ //
    alert("Estos son los productos que actualmente tenemos en stock")
    while(estadoPrograma){
        const listaProductos = ["1   - Vaso Quencher 1.18Lt Stanley", 
                                "2   - Termo System 1Lt", 
                                "3   - Termo Polar 1Lt",
                                "4   - Termo Classic 1.3 Lt",
                                "5   - Go Flip 800 ml",
                                "6   - Flip Straw 650 ml",
                                "7   - Vaso Beer Pint 437 ml",
                                "8   - Mate Stanley 236 ml",
                                "9   - Bombilla Mate Stanley",
                                "10  - Vaso Coffee 473 ml"]
        let mensajeProductos = "";
        for (let i = 0; i < listaProductos.length; i++) {
        mensajeProductos += listaProductos[i] + "\n"; 
        }
        alert(mensajeProductos);
        numeroIngresado = prompt("Para consultar el precio indique el numero de producto");
        if (numeroIngresado){
            switch (numeroIngresado){
                case "1":
                    alert("$71.500")
                    agregarProducto = prompt("Quiere agregarlo al carrito de compra? SI / NO")
                    if (agregarProducto && agregarProducto.toUpperCase() === "SI" && estadoUsuario == true){
                        cantidadProducto = parseInt(prompt("ingrese cantidad."))
                        carritoCompras.push({Cantidad: cantidadProducto, Producto: "Vaso Quencher 1.18Lt Stanley", Total: (71500*cantidadProducto)})
                        break
                    }
                    else if (agregarProducto && agregarProducto.toUpperCase() === "NO"){
                        break
                    }
                    else if (estadoUsuario == false){
                        alert("Debe ingresar con su usuario para agregar un producto al carrito")
                        break
                    }
                    else{
                        alert("La opcion ingresada no es correcta")
                        break
                    }
                case "2":
                    alert("$81.000")
                    agregarProducto = prompt("Quiere agregarlo al carrito de compra? SI / NO")
                    if (agregarProducto && agregarProducto.toUpperCase() === "SI" && estadoUsuario == true){
                        cantidadProducto = parseInt(prompt("ingrese cantidad."))
                        carritoCompras.push({Cantidad: cantidadProducto, Producto: "Termo System 1Lt", Total: (81000*cantidadProducto)})
                        break
                    }
                    else if (agregarProducto && agregarProducto.toUpperCase() === "NO"){
                        break
                    }
                    else if (estadoUsuario == false){
                        alert("Debe ingresar con su usuario para agregar un producto al carrito")
                        break
                    }
                    else{
                        alert("La opcion ingresada no es correcta")
                        break
                    }
                case "3":
                    alert("$65.000")
                    agregarProducto = prompt("Quiere agregarlo al carrito de compra? SI / NO")
                    if (agregarProducto && agregarProducto.toUpperCase() === "SI" && estadoUsuario == true){
                        cantidadProducto = parseInt(prompt("ingrese cantidad."))
                        carritoCompras.push({Cantidad: cantidadProducto, Producto: "Termo Polar 1Lt", Total: (65000*cantidadProducto)})
                        break
                    }
                    else if (agregarProducto && agregarProducto.toUpperCase() === "NO"){
                        break
                    }
                    else if (estadoUsuario == false){
                        alert("Debe ingresar con su usuario para agregar un producto al carrito")
                        break
                    }
                    else{
                        alert("La opcion ingresada no es correcta")
                        break
                    }
                case "4":
                    alert("$63.000")
                    agregarProducto = prompt("Quiere agregarlo al carrito de compra? SI / NO")
                    if (agregarProducto && agregarProducto.toUpperCase() === "SI" && estadoUsuario == true){
                        cantidadProducto = parseInt(prompt("ingrese cantidad."))
                        carritoCompras.push({Cantidad: cantidadProducto, Producto: "Termo Classic 1.3 Lt", Total: (63000*cantidadProducto)})
                        break
                    }
                    else if (agregarProducto && agregarProducto.toUpperCase() === "NO"){
                        break
                    }
                    else if (estadoUsuario == false){
                        alert("Debe ingresar con su usuario para agregar un producto al carrito")
                        break
                    }
                    else{
                        alert("La opcion ingresada no es correcta")
                        break
                    }
                case "5":
                    alert("$42.500")
                    agregarProducto = prompt("Quiere agregarlo al carrito de compra? SI / NO")
                    if (agregarProducto && agregarProducto.toUpperCase() === "SI" && estadoUsuario == true){
                        cantidadProducto = parseInt(prompt("ingrese cantidad."))
                        carritoCompras.push({Cantidad: cantidadProducto, Producto: "Go Flip 800 ml", Total: (42500*cantidadProducto)})
                        break
                    }
                    else if (agregarProducto && agregarProducto.toUpperCase() === "NO"){
                        break
                    }
                    else if (estadoUsuario == false){
                        alert("Debe ingresar con su usuario para agregar un producto al carrito")
                        break
                    }
                    else{
                        alert("La opcion ingresada no es correcta")
                        break
                    }
                case "6":
                    alert("$42.500")
                    agregarProducto = prompt("Quiere agregarlo al carrito de compra? SI / NO")
                    if (agregarProducto && agregarProducto.toUpperCase() === "SI" && estadoUsuario == true){
                        cantidadProducto = parseInt(prompt("ingrese cantidad."))
                        carritoCompras.push({Cantidad: cantidadProducto, Producto: "Flip Straw 650 ml", Total: (42500*cantidadProducto)})
                        break
                    }
                    else if (agregarProducto && agregarProducto.toUpperCase() === "NO"){
                        break
                    }
                    else if (estadoUsuario == false){
                        alert("Debe ingresar con su usuario para agregar un producto al carrito")
                        break
                    }
                    else{
                        alert("La opcion ingresada no es correcta")
                        break
                    }
                case "7":
                    alert("$35.500")
                    agregarProducto = prompt("Quiere agregarlo al carrito de compra? SI / NO")
                    if (agregarProducto && agregarProducto.toUpperCase() === "SI" && estadoUsuario == true){
                        cantidadProducto = parseInt(prompt("ingrese cantidad."))
                        carritoCompras.push({Cantidad: cantidadProducto, Producto: "Vaso Beer Pint 437 ml", Total: (35500*cantidadProducto)})
                        break
                    }
                    else if (agregarProducto && agregarProducto.toUpperCase() === "NO"){
                        break
                    }
                    else if (estadoUsuario == false){
                        alert("Debe ingresar con su usuario para agregar un producto al carrito")
                        break
                    }
                    else{
                        alert("La opcion ingresada no es correcta")
                        break
                    }
                case "8":
                    alert("$33.500")
                    agregarProducto = prompt("Quiere agregarlo al carrito de compra? SI / NO")
                    if (agregarProducto && agregarProducto.toUpperCase() === "SI" && estadoUsuario == true){
                        cantidadProducto = parseInt(prompt("ingrese cantidad."))
                        carritoCompras.push({Cantidad: cantidadProducto, Producto: "Mate Stanley 236 ml", Total: (33500*cantidadProducto)})
                        break
                    }
                    else if (agregarProducto && agregarProducto.toUpperCase() === "NO"){
                        break
                    }
                    else if (estadoUsuario == false){
                        alert("Debe ingresar con su usuario para agregar un producto al carrito")
                        break
                    }
                    else{
                        alert("La opcion ingresada no es correcta")
                        break
                    }
                case "9":
                    alert("$29.500")
                    agregarProducto = prompt("Quiere agregarlo al carrito de compra? SI / NO")
                    if (agregarProducto && agregarProducto.toUpperCase() === "SI" && estadoUsuario == true){
                        cantidadProducto = parseInt(prompt("ingrese cantidad."))
                        carritoCompras.push({Cantidad: cantidadProducto, Producto: "Bombilla Mate Stanley", Total: (29500*cantidadProducto)})
                        break
                    }
                    else if (agregarProducto && agregarProducto.toUpperCase() === "NO"){
                        break
                    }
                    else if (estadoUsuario == false){
                        alert("Debe ingresar con su usuario para agregar un producto al carrito")
                        break
                    }
                    else{
                        alert("La opcion ingresada no es correcta")
                        break
                    }
                case "10":
                    alert("$25.500")
                    agregarProducto = prompt("Quiere agregarlo al carrito de compra? SI / NO")
                    if (agregarProducto && agregarProducto.toUpperCase() === "SI" && estadoUsuario == true){
                        cantidadProducto = parseInt(prompt("ingrese cantidad."))
                        carritoCompras.push({Cantidad: cantidadProducto, Producto: "Vaso Coffee 473 ml", Total: (25500*cantidadProducto)})
                        break
                    }
                    else if (agregarProducto && agregarProducto.toUpperCase() === "NO"){
                        break
                    }
                    else if (estadoUsuario == false){
                        alert("Debe ingresar con su usuario para agregar un producto al carrito")
                        break
                    }
                    else{
                        alert("La opcion ingresada no es correcta")
                        break
                    }
            }
        }
        else{
            alert("La opcion ingresada es incorrecta")
        }
    // ---------------------------------------------- //

        consulta = prompt("Quiere consultar por otro producto? SI / NO");
        if (consulta && consulta.toUpperCase() === "SI") {
            estadoPrograma = true
        } 
        else if (consulta && consulta.toUpperCase() === "NO"){
            estadoPrograma = false
        }
        else {
            alert("La opcion ingresada no es correcta")
        }
    }
    // ---------------------------------------------- //

    if (carritoCompras.length > 0) {
        let mensajeCompleto = "";
        for (let i = 0; i < carritoCompras.length; i += 1) {
            const detalleCompra = carritoCompras[i]
            mensajeCompleto += `
                Cantidad: ${detalleCompra.Cantidad} || Producto: ${detalleCompra.Producto} || Total: $ ${detalleCompra.Total}
            `
        }
        alert(mensajeCompleto)
        for (let i = 0; i < carritoCompras.length; i += 1) {
            totalCompra += carritoCompras[i].Total
        }
        alert("El total de la compra es: $ " + totalCompra)
        alert("El pedido se ha generado con exito")
        for (let i = 0; i < clientes.length; i += 1){
            const datosCliente = clientes[i]
            const mensaje = `
                ID: ${datosCliente.id}
                DNI: ${datosCliente.dni}
                Nombre: ${datosCliente.nombre}
                Apellido: ${datosCliente.apellido}
                Telefono: ${datosCliente.telefono}
                Direccion: ${datosCliente.direccion}
                Localidad: ${datosCliente.localidad}
            `;
            alert("Datos para el envio:\n" + mensaje)
        }
        alert("Gracias por su Compra");
    } else {
        alert("Gracias por su visita");
    }
}

generadorPedido()













