<?php
    # Inicia a sessão
    session_start();
    # Destrói a sessão
    session_destroy();
    
?>
<script>
    // Remove o usuário logado do localStorage
    localStorage.removeItem("usuarioLogado");
    // Redireciona para a página de login
    window.location.href = "../pages/login.php";
</script>