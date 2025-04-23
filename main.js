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
