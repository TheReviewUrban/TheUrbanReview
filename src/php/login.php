<?php
# Inclui o arquivo de conexão
include('conexao.php');
# Executa a função de iniciar sessão do usuário
session_start();
# Armazena dados inseridos pelo usuário
$email = $_POST['email'];
$senha = $_POST['senha'];
# Busca o usuário usando Prepared Statements (Seguro)
$stmt = $conexao->prepare("SELECT * FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$resultado = $stmt->get_result();
# Verifica se o E-Mail do usuário está cadastrado no banco de dados
if($resultado->num_rows > 0){
    $usuario = $resultado->fetch_assoc();
} else {
    echo "E-mail não cadastrado";
    header("Location: ../pages/cadastro.php");
}
# Verifica se a senha inserida pelo usuário é igual a senha armazenada no banco de dados
if(password_verify($senha, $usuario['senha_segura'])){
    $_SESSION['id_usuario'] = $usuario['id_usuario'];
    $_SESSION['nome'] = $usuario['nome'];
    header("Location: ../../public/index.php");
    exit();
} else {
    echo "<p>Senha incorreta!</p>";
    exit();
}
$stmt->close();
$conexao->close();