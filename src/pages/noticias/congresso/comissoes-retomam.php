<?php
    session_start();
    $usuarioLogado = isset($_SESSION['id_usuario']) && !empty($_SESSION['id_usuario']);
    
    $emailUsuario = $usuarioLogado ? ($_SESSION['email'] ?? '') : '';
    $nomeUsuario = '';

    if ($usuarioLogado) {
        if (!empty($_SESSION['nome'])) {
            $nomeUsuario = $_SESSION['nome'];
        } else if (!empty($emailUsuario)) {
            $partesEmail = explode('@', $emailUsuario);
            $nomeUsuario = $partesEmail[0];
        } else {
            $nomeUsuario = 'Usuário';
        }
    }

    // Define se o usuário é administrador (ajuste conforme seu banco/sessão)
    $eAdmin = isset($_SESSION['perfil']) && $_SESSION['perfil'] === 'admin';
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comissão aprova incentivos para empresa em área de fronteira que contratar jovens ou indígenas | The Urban Review</title>
    <link rel="stylesheet" href="../../../assets/css/style.css">
    <link rel="icon" type="image/png" href="../../../../src/assets/img/ícones/LogoCongresso.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap"
        rel="stylesheet">
</head>
<body id="noticias-congresso">

    <script>
        window.SESSAO_USUARIO = {
            logado: <?php echo $usuarioLogado ? 'true' : 'false'; ?>,
            nome: "<?php echo addslashes($nomeUsuario); ?>",
            email: "<?php echo addslashes($emailUsuario); ?>",
            eAdmin: <?php echo $eAdmin ? 'true' : 'false'; ?>
        };
    </script>
        <!-- ==================== HEADER ==================== -->
    <header class="navbar">
        <a href="/public/index.php"><img src="../../../../src/assets/img/ícones/LogoCongresso.png" class="logo-urban"
                alt="Logo Urban"></a>
        <div class="container nav-container">
            <div class="logo">
                <h1>THE <span>URBAN</span> REVIEW</h1>
                <p>Notícias que informam. Conteúdo que importa.</p>
            </div>
            <!-- Menu Desktop -->
            <nav class="nav-links menu-desk">
                <a href="/public/index.php">Início</a>
                <a href="../../../../src/pages/politica.php">Política</a>
                <a href="../../../../src/pages/congresso.php" class="active">Congresso</a>
                <a href="../../../../src/pages/economia.php">Economia</a>
                <a href="#contato">Contato</a>
            </nav>
            <!-- Menu Mobile -->
            <nav class="dropdown menu-mob">
                <button id="btnMenuMob" class="menu-icon-btn">☰</button>
                <ul id="dropdownContent" class="dropdown-content">
                    <a href="/public/index.php">Início</a>
                    <a href="../../../../src/pages/politica.php">Política</a>
                    <a href="../../../../src/pages/congresso.php" class="active">Congresso</a>
                    <a href="../../../../src/pages/economia.php">Economia</a>
                    <a href="/public/index.php#contato">Contato</a>
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
            <div class="article-category">Congresso</div>
            <!-- Título -->
            <h1 class="article-title">
                Comissão aprova incentivos para empresa em área de fronteira que contratar jovens ou indígenas
            </h1>
            <!-- Subtítulo -->
            <p class="article-subtitle">
                Projeto prevê benefícios fiscais para empresas que mantiverem pelo menos 20% do quadro de trabalhadores composto por indígenas ou jovens de 18 a 29 anos.
            </p>
            <!-- Informações -->
            <div class="article-meta">
                <span>Congresso</span>
                <span>•</span>
                <span>The Urban Review</span>
                <span>•</span>
                <span>21 de agosto de 2026</span>
            </div>
            <!-- Imagem principal -->
            <figure class="article-image">
                <img src="../../../../src/assets/img/img-noticias/congresso/congresso-comissoes.png"
                    alt="Deputado Duda Ramos na Comissão de Indústria, Comércio e Serviços">
                <figcaption>
                    Deputado Duda Ramos: iniciativa contribui para o desenvolvimento regional. Foto: Kayo Magalhães/Câmara dos Deputados
                </figcaption>
            </figure>
            <!-- Conteúdo -->
            <article class="article-content">
                <p class="article-lead">
                    A Comissão de Indústria, Comércio e Serviços da Câmara dos Deputados aprovou projeto de lei que cria incentivos fiscais para empresas instaladas em regiões de fronteira e em terras indígenas reconhecidas pelo poder público que contratarem jovens ou indígenas.
                </p>
                <p>
                    Para ter acesso aos benefícios, a empresa deverá manter pelo menos 20% do quadro de trabalhadores composto por indígenas ou jovens de 18 a 29 anos, preferencialmente moradores da região.
                </p>
                <h2>Incentivos previstos</h2>
                <p>
                    Entre os incentivos previstos estão:
                </p>
                <ul>
                    <li>crédito presumido do Imposto de Renda da Pessoa Jurídica (IRPJ), calculado sobre a folha de pagamento dos trabalhadores indígenas ou jovens contratados;</li>
                    <li>redução de 50% da contribuição previdenciária patronal ao INSS incidente sobre os contratos desses trabalhadores;</li>
                    <li>isenção do Adicional ao Frete para Renovação da Marinha Mercante (AFRMM) e de taxas federais de licenciamento.</li>
                </ul>
                <p>
                    Foi aprovado o substitutivo do relator, deputado Duda Ramos (Pode-RR), ao Projeto de Lei 3944/25, do deputado Defensor Stélio Dener (União-RR).
                </p>
                <p>
                    O relator alterou a versão original para prever o acompanhamento das medidas pelo Ministério do Desenvolvimento, Indústria, Comércio e Serviços (Mdic).
                </p>
                <p>
                    Conforme Duda Ramos, a iniciativa contribui para o desenvolvimento regional. “A proposta cria mecanismos de estímulo à instalação e operação de empresas em regiões estratégicas, associando os benefícios fiscais à geração de empregos para jovens e povos originários”, reforçou.
                </p>
                <h2>Próximos passos</h2>
                <p>
                    A proposta tramita em caráter conclusivo e será analisada pelas comissões da Amazônia e dos Povos Originários e Tradicionais; de Finanças e Tributação; e de Constituição e Justiça e de Cidadania. Para virar lei, precisa ser aprovada pela Câmara e pelo Senado.
                </p>
                <p>
                    <strong>Fonte:</strong> Agência Câmara de Notícias.
                </p>
                <p>
                    <a href="https://www.camara.leg.br/noticias/1299161-comissao-aprova-incentivos-para-empresa-em-area-de-fronteira-que-contratar-jovens-ou-indigenas" target="_blank" rel="noopener">VEJA A NOTÍCIA ORIGINAL</a>
                </p>
            </article>
            <!-- Compartilhamento -->
            <div class="article-share">
                <span>Compartilhe:</span>
                <button>WhatsApp</button>
                <button>Instagram</button>
            </div>
            <!-- Voltar -->
            <div class="article-back">
                <a href="../../../../src/pages/congresso.php">← Voltar para as notícias</a>
            </div>
        </div>
    </main>
    <!-- =================== CONTATO / COMENTÁRIOS ==================== -->
    <section id="contato" class="container newsletter-section">
        <div class="newsletter-box">
            <div class="newsletter-text">
                <div class="icon-mail">
                    <img src="../../../assets/img/ícones/email.png" class="opniao" alt="Contato">
                </div>
                <div>
                    <h4>Deixe seu comentário sobre a notícia</h4>
                    <p id="subtituloComentario">Sua opinião é muito importante para nós.</p>
                </div>
            </div>

            <form class="newsletter-form form-contato" id="formOpiniao" style="display: none;">
                <textarea id="mensagem" name="mensagem" placeholder="Escreva o seu comentário..." required></textarea>
                <button type="submit" id="btnEnviar">Enviar Comentário</button>
            </form>

            <div id="avisoLoginComentario" class="aviso-login" style="display: none; padding: 12px; background: rgba(0,0,0,0.05); border-left: 4px solid #007bff; border-radius: 4px; margin-top: 10px;">
                <p style="margin: 0; color: inherit;">Você precisa estar <a href="../../../pages/login.php" style="font-weight: bold; text-decoration: underline;">logado</a> para enviar um comentário.</p>
            </div>
        </div>

        <div class="container lista-comentarios" style="margin-top: 20px;">
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
                        <img src="../../../../src/assets/img/ícones/instagram.png" alt="Instagram" class="redes">
                    </a>
                    <a href="mailto:reviewurban759@gmail.com" class="redes" title="Gmail">
                        <img src="../../../../src/assets/img/ícones/social.png" alt="Gmail" class="redes">
                    </a>
                </div>
            </div>
            <div class="footer-links">
                <h5>Navegação</h5>
                <a href="/public/index.php">Início</a>
                <a href="../../../../src/pages/politica.php">Política</a>
                <a href="../../../../src/pages/congresso.php">Congresso</a>
                <a href="../../../../src/pages/economia.php">Economia</a>
            </div>
            <img src="../../../../src/assets/img/ícones/LogoCongresso.png" class="logo-urban" alt="Logo Urban Footer">
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