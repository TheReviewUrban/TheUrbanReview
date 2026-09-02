<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Partida do Flamengo | The Urban Review</title>
    <link rel="stylesheet" href="../../../assets/css/style.css">
    <link rel="icon" type="image/png" href="../../../assets/img/ícones/LogoEsportes.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap"
        rel="stylesheet">
</head>

<body id="noticias-flamengo">

    <!-- ==================== HEADER ==================== -->
    <header class="navbar">
        <a href="../../../../public/index.html"><img src="../../../assets/img/ícones/LogoEsportes.png" class="logo-urban" alt="Logo Urban"></a>

        <div class="container nav-container">
            <div class="logo">
                <h1>THE <span>URBAN</span> REVIEW</h1>
                <p>Notícias de Esportes</p>
            </div>

            <!-- Menu Desktop -->
            <nav class="nav-links menu-desk">
                <a href="../../../../public/index.html" >Início</a>
                <a href="../../politica.html">Política</a>
                <a href="/src/pages/internacional.html">Internacional</a>
                <a href="../../esportes.html" class="active">Esporte</a>
                <a href="#contato">Contato</a>
            </nav>

            <!-- Menu Mobile -->
            <nav class="dropdown menu-mob">
                <button id="btnMenuMob" class="menu-icon-btn">☰</button>
                <ul id="dropdownContent" class="dropdown-content">
                    <li><a href="../../../../public/index.html">Início</a></li>
                    <li><a href="../../politica.html">Política</a></li>
                    <li><a href="/src/pages/internacional.html">Internacional</a></li>
                    <li><a href="../../esportes.html">Esporte</a></li>
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
                Flamengo encosta no Palmeiras e tem menor distância para liderança desde março; veja pontuações
            </h1>

            <!-- Subtítulo -->
            <p class="article-subtitle">
                Clube rubro-negro tem um jogo a menos devido a um adiamento e depende apenas de si para assumir a liderança do Campeonato Brasileiro. Vantagem alviverde chegou a ser de 8 pontos
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
                <img src="../../../assets/img/img-noticias/Esportes/Flamengo.png" alt="Flamengo">
                <figcaption>
                   A rodada foi perfeita para o Flamengo e recolocou fogo no Campeonato Brasileiro. Depois de golear o Mirassol por 5 a 1, neste domingo, e ver o Palmeiras perder para o Fluminense por 3 a 2, no último sábado, o clube rubro-negro encurtou a sua distância para a liderança. São apenas três pontos, o menor hiato desde março.
                </figcaption>
            </figure>

            <!-- Conteúdo -->
            <article class="article-content">
                <p class="article-lead">
                    Na ocasião, estava sendo disputada a sétima rodada do Campeonato Brasileiro. O Flamengo, já com um jogo a menos, venceu o Remo no dia 19 de março. O Palmeiras, um dia antes, venceria o Botafogo. Curiosamente, naquela altura, o líder da competição era o Bahia, com apenas um ponto a mais que o então vice-líder alviverde.
                </p>

                <p>
                    De lá para cá, foi quase um turno de larga vantagem para o Palmeiras. Nas rodadas 9, 10 e 21, o clube chegou a montar a sua maior gordura na ponta da tabela — abriu 8 pontos de distância dos rubro-negros. Na rodada 11, o Palmeiras também viu a sua distância para o vice-líder cair para três pontos, mas o adversário mais próximo era o Bahia. O Flamengo estava seis atrás.
                </p>

                <h1>
                    No cenário atual, Flamengo depende apenas de si para assumir a liderança. Como tem um jogo a menos devido a uma rodada adiada, o clube rubro-negro pode empatar em pontos com o Palmeiras e ultrapassá-lo devido aos critérios de desempate. Ainda não há data reagendada para o confronto contra o Mirassol, válido pela 4ª rodada.
                </h1>

                <h2>
                    Na próxima rodada do Campeonato Brasileiro, o Flamengo volta a campo para enfrentar o Cruzeiro, no sábado, no Mineirão. Já o Palmeiras enfrentará o Vasco, no dia seguinte, no Nubank Parque.
                </h2>

                <a href="https://exame.com/ciencia/monte-everest-20-curiosidades-que-voce-talvez-nao-saiba-sobre-o-ponto-mais-alto-do-mundo/">Veja a noticia original:</a>
            </article>

            <!-- Compartilhamento -->
            <div class="article-share">
                <span>Compartilhe:</span>
                <button>WhatsApp</button>
                <button>Instagram</button>
            </div>

            <!-- Voltar -->
            <div class="article-back">
                <a href="../../esportes.html">← Voltar para as notícias</a>
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
                <a href="../../../../public/index.html">Início</a>
                <a href="../../politica.html">Política</a>
                <a href="../../congresso.html">Congresso</a>
                <a href="../../economia.html">Economia</a>
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