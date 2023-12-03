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
  var pagination = document.getElementById('pagination-link-tt');
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
  var pagination = document.getElementById('pagination-link-tt');
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


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.addEventListener("click", function(event) {
  var icone = event.target;
  
  // Verifica se o clique ocorreu no elemento com a classe "seta-left"
  if (icone.classList.contains("seta-left")) {
    var elementoComID = encontrarElementoComID(icone);
    
    if (elementoComID) {
      var idDoElemento = elementoComID.id;
      var valorParcial = idDoElemento.split('-')[1];
      var valorInteiro = parseInt(valorParcial);
      if(valorInteiro == 1){
        valorInteiro = 4;
      } else {
        valorInteiro = valorInteiro - 1;
      };
    } else {
      console.log("Nenhum ID encontrado.");
    }
    var elementoAtual = document.getElementById(idDoElemento);
    elementoAtual.classList.remove("carousel-item");
    elementoAtual.classList.add("ocultando-carousel");
    var novoID = "cr-" + valorInteiro;
    var elementoNovo = document.getElementById(novoID);
    elementoNovo.classList.remove("ocultando-carousel");
    elementoNovo.classList.add("carousel-item");
  }
});


document.addEventListener("click", function(event) {
  var icone = event.target;
  
  // Verifica se o clique ocorreu no elemento com a classe "seta-right"
  if (icone.classList.contains("seta-right")) {
    var elementoComID = encontrarElementoComID(icone);
    
    if (elementoComID) {
      var idDoElemento = elementoComID.id;
      var valorParcial = idDoElemento.split('-')[1];
      var valorInteiro = parseInt(valorParcial);
      if(valorInteiro == 4){
        valorInteiro = 1;
      } else {
        valorInteiro = valorInteiro + 1;
      };
    } else {
      console.log("Nenhum ID encontrado.");
    }
    var elementoAtual = document.getElementById(idDoElemento);
    elementoAtual.classList.remove("carousel-item");
    elementoAtual.classList.add("ocultando-carousel");
    var novoID = "cr-" + valorInteiro;
    var elementoNovo = document.getElementById(novoID);
    elementoNovo.classList.remove("ocultando-carousel");
    elementoNovo.classList.add("carousel-item");
  }
});


function encontrarElementoComID(elemento) {
  var ancestral = elemento.parentElement;

  // Iterar pelos ancestrais até encontrar um com um ID
  while (ancestral) {
    if (ancestral.id) {
      return ancestral;
    }
    ancestral = ancestral.parentElement;
  }
  // Se nenhum ancestral com ID for encontrado, retornar null
  return null;
}


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("show");
});


function verificarTutoriais(){
  let myPage = document.querySelector('.pagination');
  if(myPage) {
    let links = myPage.querySelectorAll('a');
    let valorMax = Number.MIN_SAFE_INTEGER;
    links.forEach(function(link) {
      let numeroVer = parseInt(link.getAttribute('data-page-number'));
      if(!isNaN(numeroVer) && numeroVer > valorMax) {
        valorMax = numeroVer;
      }
    }
    );
    console.log("O valor máximo é: ", valorMax);
  }
}

document.addEventListener('DOMContentLoaded', verificarTutoriais);

