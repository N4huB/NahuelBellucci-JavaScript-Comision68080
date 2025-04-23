<<<<<<< HEAD
  let productos = [];
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  fetch("data/productos.json")
    .then(res => res.json())
    .then(data => {
      productos = data;
      mostrarProductos(productos);
    })
    .catch(error => console.error("Error al cargar productos:", error));

  function mostrarProductos(lista) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    lista.forEach(producto => {
      const { id, title, price, image } = producto;
      const div = document.createElement("div");
      div.className = "col-md-4 producto";
      div.innerHTML = `
        <img src="${image}" alt="${title}" />
        <h5>${title}</h5>
        <p>$${price}</p>
        <button class="btn btn-primary" onclick="agregarAlCarrito(${id})">Agregar</button>
      `;
      contenedor.appendChild(div);
    });
  }

  function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
    Swal.fire({
      icon: 'success',
      title: '¡Agregado!',
      text: `${producto.title} fue agregado al carrito.`
    });
  }

  function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id); 
    actualizarCarrito();
  }

  function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalEl = document.getElementById("total");
    lista.innerHTML = "";

    carrito.forEach(({ id, title, price }) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.textContent = `${title} - $${price}`;
      
      const eliminarBtn = document.createElement("button");
      eliminarBtn.className = "btn btn-danger btn-sm";
      eliminarBtn.textContent = "Eliminar";
      eliminarBtn.onclick = () => eliminarDelCarrito(id);

      li.appendChild(eliminarBtn);
      lista.appendChild(li);
    });

    const total = carrito.reduce((acc, item) => acc + item.price, 0);
    totalEl.textContent = total.toFixed(2);

    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  const buscador = document.getElementById("buscador");
  buscador.addEventListener("input", e => {
    const texto = e.target.value.toLowerCase();
    const filtrados = productos.filter(p => p.title.toLowerCase().includes(texto));
    mostrarProductos(filtrados);
  });

  window.addEventListener("load", () => {
    actualizarCarrito();
  });
=======
// ############################ CONTENEDOR HEADER ############################# //
const contHeader = document.getElementById("header");
contHeader.style.display = "flex";
contHeader.style.flexDirection = "column";
contHeader.style.alignItems = "center";

// --------------------------- TITULO PRINCIPAL ------------------------------- //
const tituloPrincipal = document.createElement("h1");
tituloPrincipal.textContent = "Genesis2815 STORE";
tituloPrincipal.style.marginBottom = "150px";

contHeader.appendChild(tituloPrincipal);

// ########################### CONTENEDOR MAIN ################################ //
const contMain = document.getElementById("main");
contMain.style.display = "flex";
contMain.style.flexDirection = "column";
contMain.style.alignItems = "center";

// ####################### CONTENEDOR SALUDO INICIAL ########################## //
const contInicial = document.createElement("div");
contInicial.style.display = "flex";
contInicial.style.flexDirection = "column";
contInicial.style.alignItems = "center";

// -------------------------- MENSAJE BIENVENIDA ------------------------------ //
const mensajeBienvenida = document.createElement("p");
mensajeBienvenida.textContent = "Bienvenido a Genesis2915 Store";
mensajeBienvenida.style.marginBottom = "50px";
contInicial.appendChild(mensajeBienvenida);

// ---------------------------- BOTON INGRESAR -------------------------------- //
const botonIngresar = document.createElement("button");
botonIngresar.textContent = "Ingresar";
contInicial.appendChild(botonIngresar);

botonIngresar.addEventListener("click", () =>{
    mensajeBienvenida.remove();
    botonIngresar.remove();
    contConsultaCuenta.style.display = "Flex";
})

contMain.appendChild(contInicial);

// ####################### CONTENEDOR CONSULTA CUENTA ######################### //
const contConsultaCuenta = document.createElement("div");
contConsultaCuenta.style.display = "none";
contConsultaCuenta.style.flexDirection = "column";
contConsultaCuenta.style.alignItems = "center";

// ------------------------ MENSAJE CONSULTA CUENTA --------------------------- //
const consultaCuenta = document.createElement("p");
consultaCuenta.textContent = "¿Tenes una cuenta en nuestra pagina?";
consultaCuenta.style.marginBottom = "50px";
contConsultaCuenta.appendChild(consultaCuenta);

// ---------------------------- BOTON CUENTA SI ------------------------------- //
const botonCuentaSi = document.createElement("button");
botonCuentaSi.textContent = "Si";
botonCuentaSi.style.width = "40px";
botonCuentaSi.style.marginBottom = "10px";
contConsultaCuenta.appendChild(botonCuentaSi);

botonCuentaSi.addEventListener("click", () => {
    consultaCuenta.remove();
    botonCuentaSi.remove();
    botonCuentaNo.remove();
    contCuentaCreada.style.display = "flex";
})

// ---------------------------- BOTON CUENTA NO ------------------------------- //
const botonCuentaNo = document.createElement("button");
botonCuentaNo.textContent = "No";
botonCuentaNo.style.width = "40px";
contConsultaCuenta.appendChild(botonCuentaNo);
botonCuentaNo.addEventListener("click", () => {
    consultaCuenta.remove();
    botonCuentaSi.remove();
    botonCuentaNo.remove();
    contConsultaCrearCuenta.style.display = "flex";
})

contMain.appendChild(contConsultaCuenta);

// #################### CONTENEDOR CONSULTA CREAR CUENTA ###################### //
const contConsultaCrearCuenta = document.createElement("div");
contConsultaCrearCuenta.style.display = "none";
contConsultaCrearCuenta.style.flexDirection = "column";
contConsultaCrearCuenta.style.alignItems = "center";

// --------------------- MENSAJE CONSULTA CREAR CUENTA ------------------------ //
const consultaCrearCuenta = document.createElement("p");
consultaCrearCuenta.textContent = "¿Queres crear una cuenta?";
consultaCrearCuenta.style.marginBottom = "50px";
contConsultaCrearCuenta.appendChild(consultaCrearCuenta);

// ------------------------ BOTON CREAR CUENTA SI ----------------------------- //
const botonCrearCuentaSi = document.createElement("button");
botonCrearCuentaSi.textContent = "Si";
botonCrearCuentaSi.style.width = "40px";
botonCrearCuentaSi.style.marginBottom = "10px";
contConsultaCrearCuenta.appendChild(botonCrearCuentaSi);

botonCrearCuentaSi.addEventListener("click", () => {
    consultaCrearCuenta.remove();
    botonCrearCuentaSi.remove();
    botonCrearCuentaNo.remove();
    contCrearCuenta.style.display = "flex";
})

// ------------------------ BOTON CREAR CUENTA NO ----------------------------- //
const botonCrearCuentaNo = document.createElement("button");
botonCrearCuentaNo.textContent = "No";
botonCrearCuentaNo.style.width = "40px";
contConsultaCrearCuenta.appendChild(botonCrearCuentaNo);
botonCrearCuentaNo.addEventListener("click", () => {
    consultaCrearCuenta.remove();
    botonCrearCuentaSi.remove();
    botonCrearCuentaNo.remove();
    contIngresoSinCuenta.style.display = "flex";
})

contMain.appendChild(contConsultaCrearCuenta);

// ################# CONTENEDOR INGRESO SIN CREAR CUENTA ###################### //
const contIngresoSinCuenta = document.createElement("div");
contIngresoSinCuenta.style.display = "none";
contIngresoSinCuenta.style.flexDirection = "column";
contIngresoSinCuenta.style.alignItems = "center";

// ---------------------- MENSAJE CUENTA NO CREADA --------------------------- //
const mensajeIngresoSinCuenta = document.createElement("p");
mensajeIngresoSinCuenta.textContent = "De acuerdo, puede ingresar para ver nuestros productos.";
mensajeIngresoSinCuenta.style.marginBottom = "50px";
contIngresoSinCuenta.appendChild(mensajeIngresoSinCuenta);

// ---------------------------- BOTON ACEPTAR -------------------------------- //
const botonAceptarSinCuenta = document.createElement("button");
botonAceptarSinCuenta.textContent = "Aceptar";
contIngresoSinCuenta.appendChild(botonAceptarSinCuenta);

botonAceptarSinCuenta.addEventListener("click", () =>{
    mensajeIngresoSinCuenta.remove();
    botonAceptarSinCuenta.remove();
    //ENTRAR A AL CONTENEDOR DONDE SE ENCUENTRAN LOS PRODUCTOS.
})

contMain.appendChild(contIngresoSinCuenta);

// ######################## CONTENEDOR CREAR CUENTA ######################### //
const contCrearCuenta = document.createElement("div");
contCrearCuenta.style.display = "none";
contCrearCuenta.style.flexDirection = "column";
contCrearCuenta.style.alignItems = "center";

// ---------------------------- CREAR CUENTA -------------------------------- //
const labelNombre = document.createElement("label");
labelNombre.textContent = "Nombre";
const inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.style.marginBottom = "10px";
inputNombre.style.width = "300px";

const labelApellido = document.createElement("label");
labelApellido.textContent = "Apellido";
const inputApellido = document.createElement("input");
inputApellido.type = "text";
inputApellido.style.marginBottom = "10px";
inputApellido.style.width = "300px";

const labelDNI = document.createElement("label");
labelDNI.textContent = "DNI";
const inputDNI = document.createElement("input");
inputDNI.type = "text";
inputDNI.style.marginBottom = "10px";
inputDNI.style.width = "300px";

const labelDireccion = document.createElement("label");
labelDireccion.textContent = "Direccion";
const inputDireccion = document.createElement("input");
inputDireccion.type = "text";
inputDireccion.style.marginBottom = "10px";
inputDireccion.style.width = "300px";

const labelCp = document.createElement("label");
labelCp.textContent = "CP";
const inputCp = document.createElement("input");
inputCp.type = "text";
inputCp.style.marginBottom = "10px";
inputCp.style.width = "300px";

const labelLocalidad = document.createElement("label");
labelLocalidad.textContent = "Localidad";
const inputLocalidad = document.createElement("input");
inputLocalidad.type = "text";
inputLocalidad.style.marginBottom = "10px";
inputLocalidad.style.width = "300px";

contCrearCuenta.appendChild(labelNombre);
contCrearCuenta.appendChild(inputNombre);
contCrearCuenta.appendChild(labelApellido);
contCrearCuenta.appendChild(inputApellido);
contCrearCuenta.appendChild(labelDNI);
contCrearCuenta.appendChild(inputDNI);
contCrearCuenta.appendChild(labelDireccion);
contCrearCuenta.appendChild(inputDireccion);
contCrearCuenta.appendChild(labelCp);
contCrearCuenta.appendChild(inputCp);
contCrearCuenta.appendChild(labelLocalidad);
contCrearCuenta.appendChild(inputLocalidad);



// --------------------------- BOTON REGISTRAR ------------------------------ //
const botonRegistrar = document.createElement("button");
botonRegistrar.textContent = "Registrar";
contCrearCuenta.appendChild(botonRegistrar);

const usuariosRegistrados = [];

botonRegistrar.addEventListener("click", () => {
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const dni = inputDNI.value;
    const direccion = inputDireccion.value;
    const cp = inputCp.value;
    const localidad = inputLocalidad.value;

    if (nombre && apellido && dni && direccion && cp && localidad) {
        const nuevoUsuario = {
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            direccion: direccion,
            cp: cp,
            localidad: localidad
        };

        usuariosRegistrados.push(nuevoUsuario);
        console.log("Usuario registrado:", nuevoUsuario);

        contCrearCuenta.innerHTML = '';
        contCrearCuenta.style.display = "none";

        const mensajeRegistro = document.createElement("p");
        mensajeRegistro.textContent = "Registro Exitoso!";
        contCrearCuenta.appendChild(mensajeRegistro);

        const botonAceptarRegistro = document.createElement("button");
        botonAceptarRegistro.textContent = "Aceptar";
        contCrearCuenta.appendChild(botonAceptarRegistro);

        contCrearCuenta.style.display = "flex";

        botonAceptarRegistro.addEventListener("click", () => {
            mensajeRegistro.remove();
            botonAceptarRegistro.remove();
            contCrearCuenta.style.display = "none";
            
        });
    } else {
        alert("Por favor, completa todos los campos del formulario.");
    }

});

contMain.append(contCrearCuenta);


// ######################### CONTENEDOR CUENTA SI ########################### //
const contCuentaCreada = document.createElement("div");
contCuentaCreada.style.display = "none";
contCuentaCreada.style.flexDirection = "column";
contCuentaCreada.style.alignItems = "center";

// --------------------- INGRESO A LA CUENTA CON DNI ------------------------ //
const labelDniLogin = document.createElement("label");
labelDniLogin.textContent = "Numero DNI (Sin puntos)";
labelDniLogin.style.marginBottom = "10px";
const inputDniLogin = document.createElement("input");
inputDniLogin.type = "text";
inputDniLogin.style.marginBottom = "40px";
contCuentaCreada.appendChild(labelDniLogin);
contCuentaCreada.appendChild(inputDniLogin);

// ------------------------ BOTON INGRESAR CUENTA --------------------------- //
const botonIngresarCuenta = document.createElement("button");
botonIngresarCuenta.textContent = "Ingresar";
contCuentaCreada.appendChild(botonIngresarCuenta);

botonIngresarCuenta.addEventListener("click", () => {
    const dniIngresadoLogin = inputDniLogin.value;
    let usuarioEncontrado = null;

    for (const usuario of usuariosRegistrados) {
        if (usuario.dni === dniIngresadoLogin) {
            usuarioEncontrado = usuario;
            break;
        }
    }
    if (usuarioEncontrado) {
        labelDniLogin.remove();
        inputDniLogin.remove();
        botonIngresarCuenta.remove();
        alert(`¡Bienvenido/a, ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}!`);
    } else {
        alert("DNI no registrado. Por favor, verifica el número.");
    }
});

contMain.appendChild(contCuentaCreada);
>>>>>>> 893e541f1d2474761ab51ea255c040ea9755fd04
