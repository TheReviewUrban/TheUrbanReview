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
})

// ==========================================
// PESQUISA DE NOTÍCIAS - THE URBAN REVIEW
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const searchContainer = document.getElementById("searchContainer");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchClear = document.getElementById("searchClear");

    // Se a página não tiver pesquisa, não faz nada
    if (!searchContainer || !searchInput || !searchButton) {
        return;
    }


    // ==========================================
    // ABRIR / FECHAR PESQUISA
    // ==========================================

    searchButton.addEventListener("click", function (event) {

        event.stopPropagation();

        searchContainer.classList.toggle("active");

        if (searchContainer.classList.contains("active")) {

            searchInput.focus();

        } else {

            searchInput.value = "";
            searchNews();

        }

    });


    // ==========================================
    // PESQUISAR NOTÍCIAS
    // ==========================================

    function searchNews() {

        const searchText = searchInput.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

        const newsCards = document.querySelectorAll(".news-card");

        let resultsFound = 0;


        newsCards.forEach(function (card) {

            const content = card.textContent
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            if (searchText === "" || content.includes(searchText)) {

                card.style.display = "";

                resultsFound++;

            } else {

                card.style.display = "none";

            }

        });


        updateSearchMessage(searchText, resultsFound);
        updateClearButton();

    }


    // ==========================================
    // MENSAGEM DE NENHUM RESULTADO
    // ==========================================

    function updateSearchMessage(searchText, resultsFound) {

        let message = document.getElementById("searchMessage");

        // Remove mensagem se a pesquisa estiver vazia
        if (searchText === "") {

            if (message) {
                message.remove();
            }

            return;
        }


        // Nenhum resultado
        if (resultsFound === 0) {

            if (!message) {

                message = document.createElement("div");

                message.id = "searchMessage";
                message.className = "search-message";

                const newsContainer =
                    document.querySelector(".news-container") ||
                    document.querySelector(".container");

                if (newsContainer) {
                    newsContainer.prepend(message);
                }

            }


            message.innerHTML = `
                <strong>Nenhuma notícia encontrada</strong>
                Não encontramos resultados para "<span>${escapeHTML(searchText)}</span>".
            `;

        } else {

            if (message) {
                message.remove();
            }

        }

    }


    // ==========================================
    // BOTÃO LIMPAR
    // ==========================================

    function updateClearButton() {

        if (!searchClear) {
            return;
        }

        if (searchInput.value.trim() !== "") {

            searchClear.style.display = "block";

        } else {

            searchClear.style.display = "none";

        }

    }


    if (searchClear) {

        searchClear.addEventListener("click", function () {

            searchInput.value = "";

            searchNews();

            searchInput.focus();

        });

    }


    // ==========================================
    // PESQUISA EM TEMPO REAL
    // ==========================================

    searchInput.addEventListener("input", function () {

        searchNews();

    });


    // ==========================================
    // ENTER
    // ==========================================

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            searchNews();

        }

    });


    // ==========================================
    // FECHAR AO CLICAR FORA
    // ==========================================

    document.addEventListener("click", function (event) {

        if (!searchContainer.contains(event.target)) {

            if (
                searchContainer.classList.contains("active") &&
                searchInput.value.trim() === ""
            ) {

                searchContainer.classList.remove("active");

            }

        }

    });


    // ==========================================
    // ESC FECHA A PESQUISA
    // ==========================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            searchContainer.classList.remove("active");

            searchInput.value = "";

            searchNews();

        }

    });


    // ==========================================
    // PROTEÇÃO CONTRA HTML NO RESULTADO
    // ==========================================

    function escapeHTML(text) {

        const div = document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }

});
// ==========================================
// DASHBOARD - THE URBAN REVIEW
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ---- ELEMENTOS ----
    const sidebarItems = document.querySelectorAll(".sidebar-item");
    const sections = document.querySelectorAll(".dashboard-section");
    const btnModo = document.getElementById("modoEscuro");

    // Perfil
    const profileName = document.getElementById("profileName");
    const profileEmail = document.getElementById("profileEmail");
    const saveProfileBtn = document.getElementById("saveProfile");

    // Nomes dinâmicos (já vêm do PHP)
    const welcomeName = document.getElementById("welcomeName");
    const navUserName = document.getElementById("navUserName");
    const sidebarUserName = document.getElementById("sidebarUserName");
    const sidebarUserEmail = document.getElementById("sidebarUserEmail");

    // Avatares
    const userAvatar = document.getElementById("userAvatar");
    const profileAvatar = document.getElementById("profileAvatar");

    // Contadores (por enquanto fixos em 0)
    const favoritesCount = document.getElementById("favoritesCount");
    const commentsCount = document.getElementById("commentsCount");
    const readCount = document.getElementById("readCount");

    // ---- 1. NAVEGAÇÃO DA SIDEBAR ----
    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            const sectionId = this.getAttribute("data-section");

            // Remove active de todos
            sidebarItems.forEach(i => i.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));

            // Ativa o item e a seção
            this.classList.add("active");
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add("active");
            }

            // Scroll suave para o topo do conteúdo
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });


    // ---- 3. PREENCHER DADOS DO PERFIL ----
    // Pega o nome e e-mail que já estão na tela (vindos do PHP)
    if (sidebarUserName && profileName) {
        profileName.value = sidebarUserName.textContent.trim();
    }

    if (sidebarUserEmail && profileEmail) {
        profileEmail.value = sidebarUserEmail.textContent.trim();
    }

    // Atualiza o avatar quando o usuário digita o nome
    if (profileName) {
        profileName.addEventListener("input", function () {
            const primeiraLetra = this.value.trim().charAt(0).toUpperCase() || "?";

            if (userAvatar) userAvatar.textContent = primeiraLetra;
            if (profileAvatar) profileAvatar.textContent = primeiraLetra;

            // Atualiza também o avatar da navbar
            const navAvatar = document.querySelector(".user-avatar");
            if (navAvatar) navAvatar.textContent = primeiraLetra;
        });
    }

    // ---- 4. SALVAR PERFIL (MOCK) ----
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener("click", function () {
            const novoNome = profileName.value.trim();

            if (novoNome === "") {
                alert("Por favor, digite um nome válido.");
                return;
            }

            // Atualiza visualmente em todos os lugares
            if (welcomeName) welcomeName.textContent = novoNome;
            if (navUserName) navUserName.textContent = novoNome;
            if (sidebarUserName) sidebarUserName.textContent = novoNome;

            // Feedback visual
            const textoOriginal = saveProfileBtn.textContent;
            saveProfileBtn.textContent = "Salvo ✓";
            saveProfileBtn.disabled = true;

            setTimeout(() => {
                saveProfileBtn.textContent = textoOriginal;
                saveProfileBtn.disabled = false;
            }, 2000);

            // Aqui no futuro você fará um fetch() para o backend
            // Exemplo:
            // fetch("../php/atualizar_perfil.php", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ nome: novoNome })
            // });
        });
    }

    // ---- 5. CONTADORES (por enquanto 0) ----
    if (favoritesCount) favoritesCount.textContent = "0";
    if (commentsCount) commentsCount.textContent = "0";
    if (readCount) readCount.textContent = "0";

    // ---- 6. LOGOUT ----
    // O link já está no HTML. Se quiser forçar limpeza de localStorage:
    const logoutBtn = document.querySelector(".logout-button");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            // Opcional: limpar tema ou outras preferências
            // localStorage.removeItem("tema");
            // A sessão será destruída no backend
        });
    }

    // ---- 7. PROTEÇÃO EXTRA (caso o usuário tente acessar seção inexistente) ----
    // Já tratado pelo data-section + getElementById

});