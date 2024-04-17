const btnGET = document.getElementById("MetodoGet");
const btnFILTER = document.getElementById("MetodoFilter");
const btnNew = document.getElementById("MetodoNew");
const btnDelete = document.getElementById("MetodoDelete");
const btnUptdate = document.getElementById("MetodoUpdate");
const productsContainer = document.getElementById("productsContainer");

const MenuNavbar = document.querySelector(".toggle-menu");
const navbarlist = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");
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
             
   </div>
  
  `;
};
/* <div class="product-price">
                 <a >$${precio}</a>
              </div>*/
const renderProducts = () => {
  debugger;
  productsContainer.innerHTML = productsData.map(createProductsCards).join("");
};
const renderError = (mjs) => {
  productsContainer.innerHTML = mjs;
};
const closeOnOverlayClick = () => {
  navbarlist.classList.remove("open-Navbar");

  overlay.classList.toggle("show-overlay");
};
const closeOnClick = (e) => {
  debugger;
  if (!e.target.classList.contains("navbar-link")) {
    return;
  }
  navbarlist.classList.remove("open-Navbar");
  overlay.classList.remove("show-overlay");
};
/*navbar* */
const toggleMenu = () => {
  navbarlist.classList.toggle("open-Navbar");
  overlay.classList.toggle("show-overlay");
};
//modal
const showSuccessModal = (msg, SuccError) => {
  if (SuccError === 0) {
    modal.classList.add("active-modal");
    modal.classList.remove("error");
    modal.classList.add("success");
    modalMsj.textContent = msg;
  } else {
    modal.classList.add("active-modal");
    modal.classList.remove("success");
    modal.classList.add("error");
    modalMsj.textContent = msg;
  }

  setTimeout(() => {
    modal.classList.remove("active-modal");
  }, 2000);
};

// window.addEventListener("scroll", function () {
//   debugger;
//   let scrollPosition = window.scrollY;

//   let links = document.querySelectorAll(".navbar-link");
//   links.forEach((link) => {
//     if (link.hash) {
//       let section = document.querySelector(link.hash);

//       if (
//         section.offsetTop <= scrollPosition &&
//         section.offsetTop + section.offsetHeight > scrollPosition
//       ) {
//         link.classList.add("active-menu");
//       } else {
//         link.classList.remove("active-menu");
//       }
//     }
//   });
// });

// btnGET.addEventListener("click", fnMetodoGET);
const init = () => {
  // btnUptdate.addEventListener("click", fnUpdate);
  MenuNavbar.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeOnOverlayClick);
  navbarlist.addEventListener("click", closeOnClick);
  fnMetodoGET();
};
init();
