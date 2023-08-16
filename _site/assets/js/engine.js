// Obter todos os inputs de formato radio com a classe "nav"
const radioInputs = document.querySelectorAll('.nav');

// Adicionar evento de clique a cada input radio
radioInputs.forEach(input => {
  input.addEventListener('click', () => {
    // Obter o valor do atributo "value" do input radio clicado
    const targetSectionClass = input.value;

    // Obter a seção alvo usando a classe correspondente ao valor do radio
    const targetSection = document.querySelector(`.${targetSectionClass}`);
    if (targetSection) {
      // Calcular a posição da seção alvo na página
      const targetSectionPosition = targetSection.getBoundingClientRect().top + window.scrollY;

      // Fazer a página rolar até a posição da seção alvo
      window.scrollTo({
        top: targetSectionPosition,
        behavior: 'smooth' // Adicionar uma animação suave à rolagem
      });
    }
  });
});

function goToNextPage() {
  var pagination = document.getElementById('pagination-link');
  var pageLast = parseInt(pagination.dataset.lastPage);
  var numberPage = parseInt(pagination.dataset.pageNumber);

  if(pageLast == 0){

    var nextPageNumber = numberPage + 1;
    window.location.href = '../portfolio/page' + nextPageNumber;

  };

  if(pageLast == 1){

    if(numberPage == 1){

      var nextPageNumber = numberPage + 1;
      window.location.href = '../portfolio/page' + nextPageNumber;

    } else {

        window.location.href = '../portfolio/page1';

          } 

  };

};

function goToPreviousPage(){
  var pagination = document.getElementById('pagination-link');
  var pageLast = parseInt(pagination.dataset.lastPage);
  var numberPage = parseInt(pagination.dataset.pageNumber);

  if(numberPage == 1){

    window.location.href = '../portfolio/page1';
    
  } else {

    var previousPageNumber = numberPage - 1;
    window.location.href = '../portfolio/page' + previousPageNumber;

  }

};

function goToNextPagett() {
  var pagination = document.getElementById('pagination-link');
  var pageLast = parseInt(pagination.dataset.lastPage);
  var numberPage = parseInt(pagination.dataset.pageNumber);

  if(pageLast == 0){

    var nextPageNumber = numberPage + 1;
    window.location.href = '../tutoriais/page' + nextPageNumber;

  };

  if(pageLast == 1){

    if(numberPage == 1){

      var nextPageNumber = numberPage + 1;
      window.location.href = '../tutoriais/page' + nextPageNumber;

    } else {

        window.location.href = '../tutoriais/page1';

          } 

  };

};

function goToPreviousPagett(){
  var pagination = document.getElementById('pagination-link');
  var pageLast = parseInt(pagination.dataset.lastPage);
  var numberPage = parseInt(pagination.dataset.pageNumber);

  if(numberPage == 1){

    window.location.href = '../tutoriais/page1';
    
  } else {

    var previousPageNumber = numberPage - 1;
    window.location.href = '../tutoriais/page' + previousPageNumber;

  }

};


//var largura = window.innerWidth;
//var altura = window.innerHeight;
//alert("Largura do viewport: " + largura);
//alert("Altura do viewport: " + altura);


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("show");
});

