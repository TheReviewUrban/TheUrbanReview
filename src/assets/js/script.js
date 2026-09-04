// ==========================================
// FUNCIONALIDADE: ÁREA DE COMENTÁRIOS (CORRIGIDA)
// ==========================================
const formOpiniao = document.getElementById("formOpiniao");
const newsletterSection = document.getElementById("contato");

if (formOpiniao && newsletterSection) {
    // Cria o container caso ele não exista
    let containerComentarios = document.querySelector(".lista-comentarios");
    if (!containerComentarios) {
        containerComentarios = document.createElement("div");
        containerComentarios.className = "container lista-comentarios";
        containerComentarios.innerHTML = "<h3>Comentários dos Leitores</h3><ul id='listaComentariosUl'></ul>";
        newsletterSection.appendChild(containerComentarios);
    }

    formOpiniao.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede a página de recarregar

        // Captura os elementos de forma segura
        const inputNome = document.getElementById("nome");
        const inputEmail = document.getElementById("email");
        const txtMensagem = document.getElementById("mensagem");

        // Verifica se os elementos realmente existem na página para não dar erro no console
        if (!inputNome || !inputEmail || !txtMensagem) {
            console.error("Erro: Um ou mais campos do formulário não foram encontrados no HTML.");
            return;
        }

        // Pega os valores digitados tirando espaços extras
        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const mensagem = txtMensagem.value.trim();

        // Travou: Se a mensagem estiver vazia, não avança
        if (mensagem === "") {
            alert("Por favor, digite um comentário válido.");
            return;
        }

        const listaUl = document.getElementById("listaComentariosUl");
        const novoItem = document.createElement("li");
        novoItem.className = "comentario-item";

        // Monta a estrutura injetando o texto de forma segura
        novoItem.innerHTML = `
            <strong>${nome}</strong> <span class='comentario-email'>(${email})</span>
            <p>${mensagem}</p>
            <small>Enviado agora mesmo</small>
        `;

        // Adiciona no topo da lista
        listaUl.prepend(novoItem);

        // SÓ LIMPA OS CAMPOS AGORA, depois que o texto já foi para a tela
        formOpiniao.reset();
    })
};
// ==========================================
// TEMA CLARO / ESCURO
// ==========================================

const btnModo = document.getElementById("modoEscuro");

if (btnModo) {

    // Recupera o tema salvo
    const tema = localStorage.getItem("tema");

    if (tema === "claro") {

        document.body.classList.add("light-mode");

        // No modo claro, mostra lua
        btnModo.textContent = "🌙";

    } else {

        // Modo escuro padrão
        btnModo.textContent = "☀️";
    }


    // Troca o tema ao clicar
    btnModo.addEventListener("click", () => {

        btnModo.classList.add("animar");

        document.body.classList.toggle("light-mode");


        if (document.body.classList.contains("light-mode")) {

            // MODO CLARO
            btnModo.textContent = "🌙";

            localStorage.setItem("tema", "claro");

        } else {

            // MODO ESCURO
            btnModo.textContent = "☀️";

            localStorage.setItem("tema", "escuro");
        }


        // Remove a animação
        setTimeout(() => {

            btnModo.classList.remove("animar");

        }, 500);

    });

}
// ============================================
// CARROSSEL - THE URBAN REVIEW
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ---- ELEMENTOS ----
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const progressBar = document.getElementById('progressBar');

    // ---- CONFIGURAÇÕES ----
    // Tempo em milissegundos que cada slide fica visível
    const SLIDE_DURATION = 6000;
    // Tempo da animação de transição
    const TRANSITION_TIME = 800;

    let currentSlide = 0;
    let autoPlayTimer = null;
    let progressTimer = null;
    let progressStart = null;
    let isPaused = false;
    let isTransitioning = false;

    // ---- FUNÇÕES PRINCIPAIS ----

    function goToSlide(index) {
        // Evita cliques durante transição
        if (isTransitioning) return;
        if (index === currentSlide) return;

        isTransitioning = true;

        // Remove active do slide e dot atual
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Atualiza índice
        currentSlide = index;

        // Garante que o índice fica dentro dos limites
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        // Adiciona active no novo slide e dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // Reinicia progresso
        resetProgress();

        // Libera transição após a animação
        setTimeout(function () {
            isTransitioning = false;
        }, TRANSITION_TIME);
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // ---- BARRA DE PROGRESSO ----

    function animateProgress() {
        progressStart = Date.now();

        function updateBar() {
            if (isPaused) {
                progressTimer = requestAnimationFrame(updateBar);
                return;
            }

            var elapsed = Date.now() - progressStart;
            var progress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);

            progressBar.style.width = progress + '%';

            if (progress < 100) {
                progressTimer = requestAnimationFrame(updateBar);
            } else {
                nextSlide();
            }
        }

        cancelAnimationFrame(progressTimer);
        progressBar.style.width = '0%';
        progressTimer = requestAnimationFrame(updateBar);
    }

    function resetProgress() {
        cancelAnimationFrame(progressTimer);
        progressBar.style.width = '0%';
        animateProgress();
    }

    // ---- AUTOPLAY ----

    function startAutoPlay() {
        isPaused = false;
        resetProgress();
    }

    function pauseAutoPlay() {
        isPaused = true;
    }

    // ---- EVENT LISTENERS ----

    // Setas
    btnNext.addEventListener('click', function () {
        nextSlide();
    });

    btnPrev.addEventListener('click', function () {
        prevSlide();
    });

    // Dots
    dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
            var slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });

    // Pausar ao passar o mouse
    var carouselContainer = document.querySelector('.carousel-container');

    carouselContainer.addEventListener('mouseenter', function () {
        pauseAutoPlay();
    });

    carouselContainer.addEventListener('mouseleave', function () {
        isPaused = false;
        progressStart = Date.now();
        animateProgress();
    })
});

// ==========================================
// MENU DROPDOWN - MODO MOBILE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const btnMenuMob = document.getElementById("btnMenuMob");
    const dropdownContent = document.getElementById("dropdownContent");

    if (!btnMenuMob || !dropdownContent) {
        return;
    }

    // Abrir e fechar o menu
    btnMenuMob.addEventListener("click", function (event) {

        event.stopPropagation();

        dropdownContent.classList.toggle("show");

        // Troca o ícone
        if (dropdownContent.classList.contains("show")) {
            btnMenuMob.textContent = "✕";
        } else {
            btnMenuMob.textContent = "☰";
        }

    });

    // Fecha o menu quando clicar fora dele
    document.addEventListener("click", function (event) {

        if (
            !dropdownContent.contains(event.target) &&
            !btnMenuMob.contains(event.target)
        ) {

            dropdownContent.classList.remove("show");
            btnMenuMob.textContent = "☰";

        }

    });

    // Fecha o menu quando clicar em algum link
    const linksMenu = dropdownContent.querySelectorAll("a");

    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            dropdownContent.classList.remove("show");
            btnMenuMob.textContent = "☰";

        });

    });
function searchNews() {
    const input = document.getElementById("searchInput");
    const search = input.value.toLowerCase().trim();

    const news = document.querySelectorAll(".news-card");

    news.forEach(article => {
        const title = article
            .querySelector("h2")
            .textContent
            .toLowerCase();

        if (title.includes(search)) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
    });
}
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function searchNews() {
    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    const newsCards = document.querySelectorAll(".news-card");

    newsCards.forEach(card => {
        const content = card.textContent.toLowerCase();

        if (content.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

searchButton.addEventListener("click", searchNews);

searchInput.addEventListener("input", searchNews);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchNews();
    }
});
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const newsCards = document.querySelectorAll(".news-card");

    function searchNews() {
        const text = searchInput.value.toLowerCase().trim();

        newsCards.forEach(card => {
            const content = card.textContent.toLowerCase();

            if (content.includes(text)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", searchNews);

    searchButton.addEventListener("click", searchNews);

});

});

 document.addEventListener('DOMContentLoaded', () => {
            // ======================
            // ELEMENTOS
          // ======================
         const sidebarItems = document.querySelectorAll('.sidebar-item');
           const sections = document.querySelectorAll('.dashboard-section');
           const logoutButton = document.getElementById('logoutButton');
           const themeBtn = document.getElementById('dashboardTheme');
            const settingTheme = document.getElementById('settingTheme');
            const saveProfileBtn = document.getElementById('saveProfile');
            const notificationsToggle = document.getElementById('notifications');


            // ======================
            // NAVEGAÇÃO ENTRE SEÇÕES
            // ======================
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function searchNews() {
    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    const newsCards = document.querySelectorAll(".news-card");

    newsCards.forEach(card => {
        const content = card.textContent.toLowerCase();

        if (content.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

searchButton.addEventListener("click", searchNews);

searchInput.addEventListener("input", searchNews);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchNews();
    }
});

const [search, setSearch] = useState("");

const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
);
          
<input
    type="text"
    placeholder="Pesquisa..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
       });
