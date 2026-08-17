<?php
# Configurações do banco de dados
$servidor = "localhost";
$usuario = "root";
$senha = "senac";
$banco = "sistemaex";
$porta = 3307;

# Cria a conexão
$conexao = new mysqli($servidor, $usuario, $senha, $banco, $porta);

# Verifica se houve erro na conexão
if($conexao->connect_error){
    die("Falha na conexão: " . $conexao->connect_error);
}

# Define o charset para evitar problemas com acentuação
$conexao->set_charset("utf8mb4");
?>