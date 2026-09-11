// ==========================================
// FUNCIONALIDADE: ÁREA DE COMENTÁRIOS
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const formOpiniao = document.getElementById("formOpiniao");
    const avisoLogin = document.getElementById("avisoLoginComentario");
    const listaUl = document.getElementById("listaComentariosUl");
    const txtMensagem = document.getElementById("mensagem");

    if (formOpiniao && listaUl) {
        const chaveNoticia = "comentarios_" + window.location.pathname;
        let usuarioAtual = null;

        // 1. Sincroniza a sessão PHP com o objeto do usuário local
        if (window.SESSAO_USUARIO && window.SESSAO_USUARIO.logado) {
            usuarioAtual = {
                nome: window.SESSAO_USUARIO.nome || "Usuário",
                email: window.SESSAO_USUARIO.email || "",
                eAdmin: window.SESSAO_USUARIO.eAdmin || false
            };
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtual));
        } else {
            localStorage.removeItem("usuarioLogado");
        }

        // 2. Exibição condicional do formulário ou aviso de login
        if (usuarioAtual && usuarioAtual.nome) {
            formOpiniao.style.display = "flex";
            if (avisoLogin) avisoLogin.style.display = "none";
        } else {
            formOpiniao.style.display = "none";
            if (avisoLogin) avisoLogin.style.display = "block";
        }

        // 3. Função para renderizar comentários
        function carregarComentarios() {
            listaUl.innerHTML = "";
            let comentarios = JSON.parse(localStorage.getItem(chaveNoticia)) || [];

            if (comentarios.length === 0) {
                listaUl.innerHTML = "<li style='color: #888; list-style: none;'>Nenhum comentário ainda. Seja o primeiro a comentar!</li>";
                return;
            }

            // Corrige comentários antigos que não possuíam ID
            let houveAlteracao = false;
            comentarios = comentarios.map((item, index) => {
                if (!item.id) {
                    item.id = Date.now() + "_" + index;
                    houveAlteracao = true;
                }
                return item;
            });

            if (houveAlteracao) {
                localStorage.setItem(chaveNoticia, JSON.stringify(comentarios));
            }

            comentarios.forEach((item) => {
                const novoItem = document.createElement("li");
                novoItem.className = "comentario-item";
                novoItem.style.position = "relative";
                novoItem.style.marginBottom = "15px";

                const infoEmail = item.email ? ` <span class='comentario-email'>(${escapeHTML(item.email)})</span>` : '';
                
                // Valida permissão de exclusão (Autor ou Admin)
                const podeExcluir = usuarioAtual && (usuarioAtual.email === item.email || usuarioAtual.eAdmin);
                const btnExcluirHtml = podeExcluir 
                    ? `<button class="btn-deletar-comentario" data-id="${item.id}" style="background: transparent; border: none; color: #dc3545; cursor: pointer; font-size: 0.85rem; font-weight: bold; float: right;">Excluir</button>` 
                    : '';

                novoItem.innerHTML = `
                    ${btnExcluirHtml}
                    <strong>${escapeHTML(item.nome)}</strong>${infoEmail}
                    <p>${escapeHTML(item.mensagem)}</p>
                    <small>${item.data || 'Enviado recentemente'}</small>
                `;
                listaUl.appendChild(novoItem);
            });

            // Evento para o botão de exclusão
            document.querySelectorAll(".btn-deletar-comentario").forEach(btn => {
                btn.addEventListener("click", function () {
                    const idComentario = this.getAttribute("data-id");
                    deletarComentario(idComentario);
                });
            });
        }

        // 4. Função para excluir comentário por ID
        function deletarComentario(id) {
            if (confirm("Tem certeza que deseja excluir este comentário?")) {
                let comentarios = JSON.parse(localStorage.getItem(chaveNoticia)) || [];
                // Compara convertendo ambos para String para evitar conflitos de tipo
                comentarios = comentarios.filter(c => String(c.id) !== String(id));
                localStorage.setItem(chaveNoticia, JSON.stringify(comentarios));
                carregarComentarios();
            }
        }

        // 5. Envio de novo comentário
        formOpiniao.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!usuarioAtual) {
                alert("Você precisa estar logado para enviar comentários.");
                return;
            }

            const mensagem = txtMensagem.value.trim();
            if (mensagem === "") {
                alert("Por favor, digite um comentário válido.");
                return;
            }

            const novoComentario = {
                id: Date.now().toString(), // ID gravado explicitamente como texto
                nome: usuarioAtual.nome,
                email: usuarioAtual.email,
                mensagem: mensagem,
                data: new Date().toLocaleDateString('pt-BR') + ' às ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            };

            const comentariosAtuais = JSON.parse(localStorage.getItem(chaveNoticia)) || [];
            comentariosAtuais.unshift(novoComentario);
            localStorage.setItem(chaveNoticia, JSON.stringify(comentariosAtuais));

            txtMensagem.value = "";
            carregarComentarios();
        });

        function escapeHTML(text) {
            const div = document.createElement("div");
            div.textContent = text;
            return div.innerHTML;
        }

        carregarComentarios();
    }
});

// ==========================================
// TEMA CLARO / ESCURO
// ==========================================
const btnModo = document.getElementById("modoEscuro");

if (btnModo) {
    const tema = localStorage.getItem("tema");

    if (tema === "claro") {
        document.body.classList.add("light-mode");
        btnModo.textContent = "🌙";
    } else {
        btnModo.textContent = "☀️";
    }

    btnModo.addEventListener("click", () => {
        btnModo.classList.add("animar");
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            btnModo.textContent = "🌙";
            localStorage.setItem("tema", "claro");
        } else {
            btnModo.textContent = "☀️";
            localStorage.setItem("tema", "escuro");
        }

        setTimeout(() => {
            btnModo.classList.remove("animar");
        }, 500);
    });
}

// ============================================
// CARROSSEL - THE URBAN REVIEW
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const progressBar = document.getElementById('progressBar');

    if (!slides.length) return;

    const SLIDE_DURATION = 6000;
    const TRANSITION_TIME = 800;

    let currentSlide = 0;
    let progressTimer = null;
    let progressStart = null;
    let isPaused = false;
    let isTransitioning = false;

    function goToSlide(index) {
        if (isTransitioning) return;
        if (index === currentSlide) return;

        isTransitioning = true;

        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

        currentSlide = index;

        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');

        resetProgress();

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

    function animateProgress() {
        if (!progressBar) return;
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
        if (!progressBar) return;
        cancelAnimationFrame(progressTimer);
        progressBar.style.width = '0%';
        animateProgress();
    }

    if (btnNext) btnNext.addEventListener('click', nextSlide);
    if (btnPrev) btnPrev.addEventListener('click', prevSlide);

    dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
            var slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });

    var carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', function () {
            isPaused = true;
        });

        carouselContainer.addEventListener('mouseleave', function () {
            isPaused = false;
            progressStart = Date.now();
            animateProgress();
        });
    }
});

// ==========================================
// MENU DROPDOWN - MODO MOBILE
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const btnMenuMob = document.getElementById("btnMenuMob");
    const dropdownContent = document.getElementById("dropdownContent");

    if (!btnMenuMob || !dropdownContent) return;

    btnMenuMob.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownContent.classList.toggle("show");
        btnMenuMob.textContent = dropdownContent.classList.contains("show") ? "✕" : "☰";
    });

    document.addEventListener("click", function (event) {
        if (!dropdownContent.contains(event.target) && !btnMenuMob.contains(event.target)) {
            dropdownContent.classList.remove("show");
            btnMenuMob.textContent = "☰";
        }
    });

    const linksMenu = dropdownContent.querySelectorAll("a");
    linksMenu.forEach(function (link) {
        link.addEventListener("click", function () {
            dropdownContent.classList.remove("show");
            btnMenuMob.textContent = "☰";
        });
    });
});

// ==========================================
// PESQUISA DE NOTÍCIAS - THE URBAN REVIEW
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const searchContainer = document.getElementById("searchContainer");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchClear = document.getElementById("searchClear");

    if (!searchContainer || !searchInput || !searchButton) return;

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

    function updateSearchMessage(searchText, resultsFound) {
        let message = document.getElementById("searchMessage");

        if (searchText === "") {
            if (message) message.remove();
            return;
        }

        if (resultsFound === 0) {
            if (!message) {
                message = document.createElement("div");
                message.id = "searchMessage";
                message.className = "search-message";
                const newsContainer = document.querySelector(".news-container") || document.querySelector(".container");
                if (newsContainer) newsContainer.prepend(message);
            }

            message.innerHTML = `
                <strong>Nenhuma notícia encontrada</strong>
                Não encontramos resultados para "<span>${escapeHTML(searchText)}</span>".
            `;
        } else {
            if (message) message.remove();
        }
    }

    function updateClearButton() {
        if (!searchClear) return;
        searchClear.style.display = searchInput.value.trim() !== "" ? "block" : "none";
    }

    if (searchClear) {
        searchClear.addEventListener("click", function () {
            searchInput.value = "";
            searchNews();
            searchInput.focus();
        });
    }

    searchInput.addEventListener("input", searchNews);

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchNews();
        }
    });

    document.addEventListener("click", function (event) {
        if (!searchContainer.contains(event.target)) {
            if (searchContainer.classList.contains("active") && searchInput.value.trim() === "") {
                searchContainer.classList.remove("active");
            }
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            searchContainer.classList.remove("active");
            searchInput.value = "";
            searchNews();
        }
    });

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
    const sidebarItems = document.querySelectorAll(".sidebar-item");
    const sections = document.querySelectorAll(".dashboard-section");

    const profileName = document.getElementById("profileName");
    const profileEmail = document.getElementById("profileEmail");
    const saveProfileBtn = document.getElementById("saveProfile");

    const welcomeName = document.getElementById("welcomeName");
    const navUserName = document.getElementById("navUserName");
    const sidebarUserName = document.getElementById("sidebarUserName");
    const sidebarUserEmail = document.getElementById("sidebarUserEmail");

    const userAvatar = document.getElementById("userAvatar");
    const profileAvatar = document.getElementById("profileAvatar");

    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            const sectionId = this.getAttribute("data-section");

            sidebarItems.forEach(i => i.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));

            this.classList.add("active");
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add("active");
            }

            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    if (sidebarUserName && profileName) {
        profileName.value = sidebarUserName.textContent.trim();
    }

    if (sidebarUserEmail && profileEmail) {
        profileEmail.value = sidebarUserEmail.textContent.trim();
    }

    if (profileName) {
        profileName.addEventListener("input", function () {
            const primeiraLetra = this.value.trim().charAt(0).toUpperCase() || "?";

            if (userAvatar) userAvatar.textContent = primeiraLetra;
            if (profileAvatar) profileAvatar.textContent = primeiraLetra;

            const navAvatar = document.querySelector(".user-avatar");
            if (navAvatar) navAvatar.textContent = primeiraLetra;
        });
    }

    if (saveProfileBtn) {
        saveProfileBtn.addEventListener("click", function () {
            const novoNome = profileName.value.trim();

            if (novoNome === "") {
                alert("Por favor, digite um nome válido.");
                return;
            }

            if (welcomeName) welcomeName.textContent = novoNome;
            if (navUserName) navUserName.textContent = novoNome;
            if (sidebarUserName) sidebarUserName.textContent = novoNome;

            const textoOriginal = saveProfileBtn.textContent;
            saveProfileBtn.textContent = "Salvo ✓";
            saveProfileBtn.disabled = true;

            setTimeout(() => {
                saveProfileBtn.textContent = textoOriginal;
                saveProfileBtn.disabled = false;
            }, 2000);
        });
    }
});