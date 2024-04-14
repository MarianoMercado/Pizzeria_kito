const btnGET = document.getElementById("MetodoGet");
const btnFILTER = document.getElementById("MetodoFilter");
const btnNew = document.getElementById("MetodoNew");
const btnDelete = document.getElementById("MetodoDelete");
const btnUptdate = document.getElementById("MetodoUpdate");
const productsContainer = document.getElementById("productsContainer");

//crear cards products
const createProductsCards = (product) => {
  const { id, nombre, precio, ingredientes } = product;

  return `

  <div class="product">
             <img src="assets/img/pizza.png" alt=${nombre} />
              <div class="product-info">
                  <h4>${nombre}</h4>
              </div>
              <div class="product-ingredientes">               
                  <p>
                    ${ingredientes
                      .map((ingrediente) => `- ${ingrediente}`)
                      .join("<br/>")}
                    </p>
              </div>
              <div class="product-price">
                 <a >$${precio}</a>
              </div>
   </div>
  
  `;
};
const renderProducts = () => {
  debugger;
  productsContainer.innerHTML = productsData.map(createProductsCards).join("");
};
const renderError = (mjs) => {
  productsContainer.innerHTML = mjs;
};

btnGET.addEventListener("click", fnMetodoGET);
btnUptdate.addEventListener("click", fnUpdate);

const init = () => {
  fnMetodoGET();
};
init();
