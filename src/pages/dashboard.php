<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Conta | The Urban Review</title>

    <link rel="stylesheet" href="../../src/assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/dashboard.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

    <link rel="icon" type="image/png" href="../assets/img/ícones/LogoUrban.png">
</head>
<body class="dashboard-page">

    <!-- NAVBAR -->
    <header class="dashboard-navbar">
        <div class="dashboard-nav-left">
            <a href="../../public/index.html" class="dashboard-logo">
                THE <span>URBAN</span> REVIEW
            </a>
        </div>

        <div class="dashboard-nav-right">
            <a href="../../public/index.html">🏠 Início</a>
            <button id="dashboardTheme">🌙</button>

            <div class="user-mini">
                <div class="user-avatar">K</div>
                <span id="navUserName">Usuário</span>
            </div>
        </div>
    </header>

    <!-- DASHBOARD -->
    <div class="dashboard-layout">

        <!-- SIDEBAR -->
        <aside class="dashboard-sidebar">
            <div class="sidebar-user">
                <div class="big-avatar" id="userAvatar">K</div>
                <h3 id="sidebarUserName">Usuário</h3>
                <p id="sidebarUserEmail">usuario@email.com</p>
            </div>

            <nav class="sidebar-menu">
                <button class="sidebar-item active" data-section="inicio">
                    🏠 <span>Visão geral</span>
                </button>
                <button class="sidebar-item" data-section="perfil">
                    👤 <span>Meu perfil</span>
                </button>
                <button class="sidebar-item" data-section="favoritos">
                    ⭐ <span>Favoritos</span>
                </button>
                <button class="sidebar-item" data-section="comentarios">
                    💬 <span>Comentários</span>
                </button>
                <button class="sidebar-item" data-section="configuracoes">
                    ⚙️ <span>Configurações</span>
                </button>
            </nav>

            <button class="logout-button" id="logoutButton">
                🚪 <span>Sair da conta</span>
            </button>
        </aside>

        <!-- CONTEÚDO -->
        <main class="dashboard-content">

            <!-- INÍCIO -->
            <section id="inicio" class="dashboard-section active">
                <div class="dashboard-heading">
                    <div>
                        <span class="dashboard-label">MINHA CONTA</span>
                        <h1>Olá, <span id="welcomeName">Usuário</span>! 👋</h1>
                        <p>Bem-vindo ao seu painel do The Urban Review.</p>
                    </div>
                </div>

                <!-- ESTATÍSTICAS -->
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">⭐</div>
                        <div>
                            <span>Favoritos</span>
                            <strong id="favoritesCount">0</strong>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">💬</div>
                        <div>
                            <span>Comentários</span>
                            <strong id="commentsCount">0</strong>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">📰</div>
                        <div>
                            <span>Notícias lidas</span>
                            <strong id="readCount">0</strong>
                        </div>
                    </div>
                </div>

                <!-- ATIVIDADE -->
                <div class="dashboard-card">
                    <div class="card-title">
                        <h2>Atividade recente</h2>
                    </div>

                    <div class="activity-empty">
                        <div>📰</div>
                        <h3>Nenhuma atividade ainda</h3>
                        <p>Comece a explorar as notícias do The Urban Review.</p>
                        <a href="../../public/index.html">Explorar notícias →</a>
                    </div>
                </div>
            </section>

            <!-- PERFIL -->
            <section id="perfil" class="dashboard-section">
                <div class="dashboard-heading">
                    <span class="dashboard-label">CONTA</span>
                    <h1>Meu perfil</h1>
                    <p>Gerencie suas informações pessoais.</p>
                </div>

                <div class="dashboard-card profile-card">
                    <div class="profile-avatar" id="profileAvatar">K</div>

                    <div class="profile-info">
                        <label>Nome</label>
                        <input type="text" id="profileName" placeholder="Seu nome">

                        <label>Email</label>
                        <input type="email" id="profileEmail" placeholder="seu@email.com" disabled>

                        <button id="saveProfile">Salvar alterações</button>
                    </div>
                </div>
            </section>

            <!-- FAVORITOS -->
            <section id="favoritos" class="dashboard-section">
                <div class="dashboard-heading">
                    <span class="dashboard-label">BIBLIOTECA</span>
                    <h1>Notícias favoritas</h1>
                    <p>Notícias que você salvou para ler depois.</p>
                </div>

                <div class="dashboard-card">
                    <div class="activity-empty">
                        <div>⭐</div>
                        <h3>Você ainda não possui favoritos</h3>
                        <p>Salve notícias interessantes para encontrá-las aqui.</p>
                    </div>
                </div>
            </section>

            <!-- COMENTÁRIOS -->
            <section id="comentarios" class="dashboard-section">
                <div class="dashboard-heading">
                    <span class="dashboard-label">INTERAÇÃO</span>
                    <h1>Meus comentários</h1>
                    <p>Veja os comentários que você publicou.</p>
                </div>

                <div class="dashboard-card">
                    <div class="activity-empty">
                        <div>💬</div>
                        <h3>Nenhum comentário</h3>
                        <p>Seus comentários nas notícias aparecerão aqui.</p>
                    </div>
                </div>
            </section>

            <!-- CONFIGURAÇÕES -->
            <section id="configuracoes" class="dashboard-section">
                <div class="dashboard-heading">
                    <span class="dashboard-label">SISTEMA</span>
                    <h1>Configurações</h1>
                    <p>Personalize sua experiência.</p>
                </div>

                <div class="dashboard-card settings-card">
                    <div class="setting-row">
                        <div>
                            <h3>Modo escuro</h3>
                            <p>Alternar entre modo claro e escuro.</p>
                        </div>
                        <button class="setting-toggle" id="settingTheme">🌙</button>
                    </div>

                    <div class="setting-row">
                        <div>
                            <h3>Notificações</h3>
                            <p>Receber atualizações sobre novas notícias.</p>
                        </div>
                        <label class="switch">
                            <input type="checkbox" id="notifications">
                            <span></span>
                        </label>
                    </div>
                </div>
            </section>

        </main>
    </div>

    <script src="../assets/js/dashboard.js"></script>
</body>
</html>