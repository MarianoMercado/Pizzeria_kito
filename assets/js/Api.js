let productsData = [];
function fnMetodoGET() {
  debugger;
  fetch("https://6618615b9a41b1b3dfbce5fc.mockapi.io/CLASE1/pizzeria")
    .then((response) => response.json())

    .then((data) => {
      productsData = data;
      renderProducts();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function fnFilter(params) {
  const url = new URL(
    "https://6618615b9a41b1b3dfbce5fc.mockapi.io/CLASE1/Productos"
  );
  url.searchParams.append("Desktop", "Impresoras");
  debugger;
  fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        renderError("no se encontro información");
      }
    })
    .then((data) => {
      console.log(data);
      productsData = data;
      renderProducts();
    })
    .catch((error) => {
      renderError(error);
    });
}

function NewTask() {
  debugger;
  const newTask = {
    categoria: "Nuevo Producto",
    precio: 500,
  };

  fetch("https://6618615b9a41b1b3dfbce5fc.mockapi.io/CLASE1/Productos", {
    method: "POST",
    headers: { "content-type": "application/json" },
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        renderError("no se encontro información");
      }
    })
    .then((task) => {
      // do something with the new task
    })
    .catch((error) => {
      renderError(error);
    });
}

function Delete(id) {
  debugger;
  fetch(`https://6618615b9a41b1b3dfbce5fc.mockapi.io/CLASE1/Productos/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        renderError("Se elimino correctamente: " + task);
        // return res.json();
      } else {
        renderError("no se pudo eliminar");
      }
    })
    .catch((error) => {
      renderError(error);
    });
}

function fnUpdate(id_ud, nombre_ud, categoria_ud, precio_ud) {
  debugger;
  fetch(
    `https://6618615b9a41b1b3dfbce5fc.mockapi.io/CLASE1/Productos/${id_ud}`,
    {
      method: "PUT", // or PATCH
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        nombre: nombre_ud,
        categoria: categoria_ud,
        precio: precio_ud,
      }),
    }
  )
    .then((res) => {
      if (res.ok) {
        renderError("Se actualizo correctamente: ");
        // return res.json();
      } else {
        renderError("no se pudo Actualizar");
      }
    })
    .catch((error) => {
      renderError(error);
    });
}

// fnUpdate(34, "mouse", "accesorios", 200);
