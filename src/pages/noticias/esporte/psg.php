<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Copa| The Urban Review</title>
    <link rel="stylesheet" href="../../../assets/css/style.css">
    <link rel="icon" type="image/png" href="../../../assets/img/ícones/LogoEsportes.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap"
        rel="stylesheet">
</head>

<body id="noticias-inicio">

    <!-- ==================== HEADER ==================== -->
    <header class="navbar">
        <a href="../../../../public/index.php"><img src="../../../assets/img/ícones/LogoEsportes.png" class="logo-urban" alt="Logo Urban"></a>

        <div class="container nav-container">
            <div class="logo">
                <h1>THE <span>URBAN</span> REVIEW</h1>
                <p>Notícias de Esportes</p>
            </div>

            <!-- Menu Desktop -->
            <nav class="nav-links menu-desk">
                <a href="../../../../public/index.php" class="active">Início</a>
                <a href="../../politica.php">Política</a>
                <a href="/src/pages/internacional.php">Internacional</a>
                <a href="/src/pages/esportes.php">Esporte</a>
                <a href="#contato">Contato</a>
            </nav>

            <!-- Menu Mobile -->
            <nav class="dropdown menu-mob">
                <button id="btnMenuMob" class="menu-icon-btn">☰</button>
                <ul id="dropdownContent" class="dropdown-content">
                    <li><a href="../../../../public/index.php">Início</a></li>
                    <li><a href="../../politica.php">Política</a></li>
                    <li><a href="/src/pages/internacional.php">Internacional</a></li>
                    <li><a href="/src/pages/esportes.php">Esporte</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>

            <div class="nav-actions">
                <button id="modoEscuro" class="theme-toggle" title="Alternar Tema">🌙</button>
            </div>
        </div>
    </header>

    <!-- ==================== NOTÍCIA ==================== -->
    <main class="article-page">
        <div class="container">

            <!-- Categoria -->
            <div class="article-category">Esportes</div>

            <!-- Título -->
            <h1 class="article-title">
                PSG perde para o Lens e fica com o vice da Supercopa da França
            </h1>

            <!-- Subtítulo -->
            <p class="article-subtitle">
                Lens surpreende, derrota PSG e conquista pela primeira vez a Supercopa da França
            </p>

            <!-- Informações -->
            <div class="article-meta">
                <span>Esportes</span>
                <span>•</span>
                <span>The Urban Review</span>
                <span>•</span>
                <span>Publicado recentemente</span>
            </div>

            <!-- Imagem principal -->
            <figure class="article-image">
                <img src="../../../assets/img/img-noticias/Esportes/psg-2.png" alt="Basquete">
                <figcaption>
                   Time do lens comemorando titulo • Reprodução/Instagram
                </figcaption>
            </figure>

            <!-- Conteúdo -->
            <article class="article-content">
                <p class="article-lead">
                   Na Supercopa da França, o Lens surpreendeu o PSG e conquistou o título que abre a temporada do futebol francês após vencer por 1 a 0. Com gol do campeão do mundo Thauvin, o time abriu o placar ainda no primeiro tempo.
                </p>

                <p>
                    Treinados por Dino Toppmöller, essa foi a primeira Supercopa da história do clube, que já havia conquistado de forma inédita a Copa da França na temporada anterior.
                </p>

                <p>
                    O lateral esquerdo Matthieu Udol recebeu a bola na esquerda, na linha da grande área, e bateu cruzado. A bola ia para fora, sem perigo, mas Florian Thauvin aparece no segundo pau para completar para dentro do gol.
                </p>

                <p>
                    Mesmo com um a mais por mais de 40 minutos, o PSG não conseguiu furar a defesa do Lens.
                </p>

                <h3>
                    Lens e PSG Viram a Chave Para a Estreia na Ligue 1
                </h3>

                <p>Agora, o foco dos dois times será Ligue 1, que começa na próxima sexta-feira (21). O Lens entra em campo no sábado (22), contra o Auxerre, às 12h15. O time de Luís Enrique joga no domingo (23), às 15h45, diante do Rennes.</p>

                <a href="https:uriosidades//exame.com/ciencia/monte-everest-20-c-que-voce-talvez-nao-saiba-sobre-o-ponto-mais-alto-do-mundo/">Veja a noticia original:</a>
            </article>

            <!-- Compartilhamento -->
            <div class="article-share">
                <span>Compartilhe:</span>
                <button>WhatsApp</button>
                <button>Instagram</button>
            </div>

            <!-- Voltar -->
            <div class="article-back">
                <a href="../../../../public/index.php">← Voltar para as notícias</a>
            </div>

        </div>
    </main>

    <!-- =================== CONTATO ==================== -->
    <section id="contato" class="container newsletter-section">
        <div class="newsletter-box">
            <div class="newsletter-text">
                <div class="icon-mail">
                    <img src="../../../assets/img/ícones/email.png" class="opniao" alt="Contato">
                </div>
                <div>
                    <h4>Coloque sua opinião sobre o site abaixo</h4>
                    <p>Insira os seus dados para submeter o seu comentário.</p>
                </div>
            </div>

            <form class="newsletter-form form-contato" id="formOpiniao">
                <input type="text" id="nome" name="nome" placeholder="Seu Nome" required>
                <input type="email" id="email" name="email" placeholder="Seu E-mail" required>
                <textarea id="mensagem" name="mensagem" placeholder="Escreva a sua opinião aqui..." required></textarea>
                <button type="submit" id="btnEnviar">Enviar</button>
            </form>
        </div>

        <div class="container lista-comentarios">
            <h3>Comentários dos Leitores</h3>
            <ul id="listaComentariosUl"></ul>
        </div>
    </section>

    <!-- ==================== FOOTER ==================== -->
    <footer class="footer">
        <div class="container footer-grid">
            <div class="footer-brand">
                <h2>THE <span>URBAN</span> REVIEW</h2>
                <p>Notícias que informam. Conteúdo que importa.</p>
                <div class="social-icons">
                    <a href="https://www.instagram.com/reviewurban759/" class="redes" title="Instagram">
                        <img src="../../../assets/img/ícones/instagram.png" alt="Instagram" class="redes">
                    </a>
                    <a href="mailto:reviewurban759@gmail.com" class="redes" title="Gmail">
                        <img src="../../../assets/img/ícones/social.png" alt="Gmail" class="redes">
                    </a>
                </div>
            </div>
            <div class="footer-links">
                <h5>Navegação</h5>
                <a href="../../../../public/index.php">Início</a>
                <a href="../../politica.php">Política</a>
                <a href="../../congresso.php">Congresso</a>
                <a href="../../economia.php">Economia</a>
            </div>
            <img src="../../../assets/img/ícones/LogoEsportes.png" class="logo-urban" alt="Logo Urban Footer">
            <div class="footer-contact">
                <h5>Contato Redação</h5>
                <p>reviewurban759@gmail.com</p>
                <p>(61) 99999-9999</p>
                <p>Brazlândia/Águas Lindas - DF, Brasil</p>
            </div>
        </div>
        <div class="container footer-bottom">
            <p>&copy; 2026 The Urban Review - Todos os direitos reservados.</p>
        </div>
    </footer>

    <script src="../../../assets/js/script.js"></script>
</body>

</html>