//Animação de objetos ao rolar a página

//Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distancia entre a barra de scroll e o topo do site
// 3.2 - Verificar a distância da 3.1 Offset é maior do que a distância entre o elemento e o Topo da Página
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar a Animação

//Debounce da biblioteca Lodash
const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'zoomIn';

function animateScroll() {
    //Pega o eixo Y do topo da página, que será utilizado para fazer a comparação entre o topo da página e o elemento a ser animado
    const windowTop = window.pageYOffset + (window.innerHeight * 0.95);
    //Essa função retornar no parametro @element examente o elemento que tem que data-anime
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }
        else {
            element.classList.remove(animationClass);
        }
    });
}

const activeClass = 'now';
function active(e) {
    $(".now").removeClass("now")
    e.classList.add(activeClass);
    $(".navbar-toggler").click();
}

//Chama a animação mesmo se o usuário não rolar a página, para garantir o carregamento
animateScroll();


// Otimização para não carregar a animação caso não tenha nenhum elemento animado na tela
const handleScroll = debounce(animateScroll, 5);

if (target.length) {
    window.addEventListener('scroll', handleScroll);
}

// Goals
const balls = document.getElementsByClassName("nav-item ball-goals");
const first = "#fff";
const second = "#000"

const lines = document.getElementsByClassName("line");
function Goal(num) {
    switch (num) {
        case 0:
            balls[0].style.backgroundColor = second;
            balls[1].style.backgroundColor = first;
            balls[2].style.backgroundColor = first;
            balls[3].style.backgroundColor = first;

            lines[0].style.backgroundColor = first;
            lines[1].style.backgroundColor = first;
            lines[2].style.backgroundColor = first;
            break;

        case 1:
            balls[0].style.backgroundColor = second;
            balls[1].style.backgroundColor = second;
            balls[2].style.backgroundColor = first;
            balls[3].style.backgroundColor = first;

            lines[0].style.backgroundColor = second;
            lines[1].style.backgroundColor = first;
            lines[2].style.backgroundColor = first;

            break;
        case 2:
            balls[0].style.backgroundColor = second;
            balls[1].style.backgroundColor = second;
            balls[2].style.backgroundColor = second;
            balls[3].style.backgroundColor = first;

            lines[0].style.backgroundColor = second;
            lines[1].style.backgroundColor = second;
            lines[2].style.backgroundColor = first;

            break;
        case 3:
            balls[0].style.backgroundColor = second;
            balls[1].style.backgroundColor = second;
            balls[2].style.backgroundColor = second;
            balls[3].style.backgroundColor = second;

            lines[0].style.backgroundColor = second;
            lines[1].style.backgroundColor = second;
            lines[2].style.backgroundColor = second;
            break;
    }

}



// <!-- <section class="line"></section>
// <section class="ball-goals nav-item">
//     <a class="nav-link" id="nav-pills-02" data-toggle="pill" onclick="Goal(1)" href="#nav-item-02"></a>
// </section>
// <section class="line"></section>
// <section class="ball-goals nav-item">
//     <a class="nav-link" id="nav-pills-03" data-toggle="pill" onclick="Goal(2)" href="#nav-item-03"></a>
// </section>
// <section class="line"></section>
// <section class="ball-goals nav-item">
//     <a class="nav-link" id="nav-pills-04" data-toggle="pill" onclick="Goal(3)" href="#nav-item-04"></a>
// </section>