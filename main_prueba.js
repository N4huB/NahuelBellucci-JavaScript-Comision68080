// ########################################################################## //

// ########################################################################## //
const contenedorHeader = document.getElementById("header");
// ------------------------ TITULO PRINCIPAL -------------------------------- //
const tituloPrincipal = document.createElement("h1");
tituloPrincipal.textContent = "Genesis2815 STORE";
tituloPrincipal.style.textAlign = "center";

contenedorHeader.appendChild(tituloPrincipal);

// ########################################################################## //
const contenedorMain = document.getElementById("main");
contenedorMain.style.display = "flex";
contenedorMain.style.flexDirection = "column";
contenedorMain.style.alignItems = "center";

// ------------------------ MENSAJE BIENVENIDA ------------------------------ //
const mensajeBienvenida = document.createElement("p");
mensajeBienvenida.textContent = "Bienvenido a Genesis2915 Store";
mensajeBienvenida.style.textAlign = "center";
mensajeBienvenida.style.paddingTop = "50px";
mensajeBienvenida.style.paddingBottom = "50px";

contenedorMain.appendChild(mensajeBienvenida);

// --------------------------- BOTON INGRESAR ------------------------------- //
const botonIngresar = document.createElement("button");
botonIngresar.textContent = "Ingresar";
botonIngresar.style.width = "80px";
contenedorMain.appendChild(botonIngresar);

// -------------------------- CUNSULTA INICIO ------------------------------- //
const contenedorConsultaInicio = document.createElement("div");
contenedorConsultaInicio.style.display = "none";
contenedorConsultaInicio.style.flexDirection = "column";
contenedorConsultaInicio.style.alignItems = "center";

const consultaCuenta = document.createElement("p");
consultaCuenta.textContent = "¿Tenes una cuenta en nuestra pagina?";
consultaCuenta.style.paddingTop = "50px";
consultaCuenta.style.paddingBottom = "50px";

const botonCuentaSi = document.createElement("button");
botonCuentaSi.textContent = "Si";
botonCuentaSi.style.width = "50px";
botonCuentaSi.style.marginBottom = "10px"

const botonCuentaNo = document.createElement("button");
botonCuentaNo.textContent = "No";
botonCuentaNo.style.width = "50px";


contenedorConsultaInicio.appendChild(consultaCuenta);
contenedorConsultaInicio.appendChild(botonCuentaSi);
contenedorConsultaInicio.appendChild(botonCuentaNo);

contenedorMain.appendChild(contenedorConsultaInicio);

// -------------------------------------------------------------------------- //
botonIngresar.addEventListener("click", () => {
    mensajeBienvenida.remove();
    botonIngresar.remove();
    contenedorConsultaInicio.style.display = "flex";
})

// ------------------------ INGRESO A CUENTA SI ------------------------------ //
const contenedorIngresoCuenta = document.createElement("div");
contenedorIngresoCuenta.style.display = "none";
contenedorIngresoCuenta.style.flexDirection = "column";
contenedorIngresoCuenta.style.alignItems = "center";

const labelUsuario = document.createElement("label");
labelUsuario.textContent = "Usuario";
labelUsuario.style.paddingTop = "50px";
const inputUsuario = document.createElement("input");
inputUsuario.type = "text";
inputUsuario.style.marginBottom = "10px";

const labelContrasenia = document.createElement("label");
labelContrasenia.textContent = "Contraseña:";
const inputContrasenia = document.createElement("input");
inputContrasenia.type = "password";
inputContrasenia.style.marginBottom = "10px";

const botonIngresarCuenta = document.createElement("button");
botonIngresarCuenta.textContent = "Ingresar";
botonIngresarCuenta.style.width = "80px";

contenedorIngresoCuenta.appendChild(labelUsuario);
contenedorIngresoCuenta.appendChild(inputUsuario);
contenedorIngresoCuenta.appendChild(labelContrasenia);
contenedorIngresoCuenta.appendChild(inputContrasenia);
contenedorIngresoCuenta.appendChild(botonIngresarCuenta);

contenedorMain.appendChild(contenedorIngresoCuenta);

// -------------------------------------------------------------------------- //
botonCuentaSi.addEventListener("click", () => {
    contenedorConsultaInicio.style.display = "none"; 
    contenedorIngresoCuenta.style.display = "flex";   
});

// ------------------------ INGRESO A CUENTA NO ------------------------------ //
const contenedorCrearCuenta = document.createElement("div");
contenedorCrearCuenta.style.display = "none";
contenedorCrearCuenta.style.flexDirection = "column";
contenedorCrearCuenta.style.alignItems = "center";

const consultaCrearCuenta = document.createElement("p");
consultaCrearCuenta.textContent = "¿Queres crear una cuenta?";
consultaCrearCuenta.style.paddingTop = "50px";
consultaCrearCuenta.style.paddingBottom = "50px";

const botonCrearCuentaSi = document.createElement("button");
botonCrearCuentaSi.textContent = "Si";
botonCrearCuentaSi.style.width = "50px";
botonCrearCuentaSi.style.marginBottom = "10px";

const botonCrearCuentaNo = document.createElement("button");
botonCrearCuentaNo.textContent = "No";
botonCrearCuentaNo.style.width = "50px";

contenedorCrearCuenta.appendChild(consultaCrearCuenta);
contenedorCrearCuenta.appendChild(botonCrearCuentaSi);
contenedorCrearCuenta.appendChild(botonCrearCuentaNo);

contenedorMain.appendChild(contenedorCrearCuenta);

// -------------------------------------------------------------------------- //
botonCuentaNo.addEventListener("click", () => {
    contenedorConsultaInicio.style.display = "none"; 
    contenedorCrearCuenta.style.display = "flex";    
});

// ------------------------ CREAR UNA CUENTA SI ------------------------------ //

// ------------------------ CREAR UNA CUENTA NO ------------------------------ //
const contenedorNoCrearCuenta = document.createElement("div");
contenedorNoCrearCuenta.style.display = "none";
contenedorNoCrearCuenta.style.flexDirection = "column";
contenedorNoCrearCuenta.style.alignItems = "center";


// ########################################################################## //
