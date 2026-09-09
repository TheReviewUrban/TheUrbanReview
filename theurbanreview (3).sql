-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Tempo de geração: 04/09/2026 às 22:41
-- Versão do servidor: 8.0.44
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `theurbanreview`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL,
  `nome_completo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nascimento` date NOT NULL,
  `senha_segura` varchar(255) NOT NULL,
  `tipo_usuario` enum('Admin','Moderador','Usuário') NOT NULL DEFAULT 'Usuário'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nome_completo`, `email`, `nascimento`, `senha_segura`, `tipo_usuario`) VALUES
(1, 'Lucas Camilo', 'lucas.6161@df.senac.br', '1995-11-28', '$2y$10$Sr9m3Wr0HUhp4RPrx379FOGGAD8DLLCYSfo84sJHXpImTAMOQX3uG', 'Admin'),
(2, 'Kaio Nogueira', 'kaiorocha2376@gmail.com', '2010-03-22', '$2y$10$r9OaLeNouUw1JP2/B7nDmuJm54t6BnAb71IXTPOkOTj7SnHW5Vsda', 'Usuário'),
(3, 'Kaio César', 'kcnunes1811@gmail.com', '2009-11-18', '$2y$10$5/J0v.8w1jBRfl32GZctl.g844tGRtZdmKmKq91EnNdjcQYJi2K36', 'Usuário'),
(5, 'Yasmim Cavalcante', 'yasmimcavalcantesdosanjos467@gmail.com', '2009-10-21', '$2y$10$txJYY8YKCgM68gyqhXrU.uWfets5JX54moWWs24lo9rLDndCD2t.q', 'Usuário'),
(6, 'Ismael Menezes', 'ismaelmenezes406@gmail.com', '2009-12-11', '$2y$10$yBLiDopdjrT3Fi33E03HwOftSkKQ2yJzuBXygsuAcJ2zWj9eYY0yS', 'Usuário'),
(7, 'Gustavo Bryan', 'gustavobryans06@gmail.com', '2009-10-06', '$2y$10$CcgilpeIPEZ5cLFq4OkHDuLstC5HS/Z19OBlSd22Hbxv26XJqITRy', 'Usuário'),
(8, 'Vitor Beni', 'vitorbeni585@gmail.com', '2010-07-07', '$2y$10$iZXcROXhNYDLuB4DOeLEPeB8OjNZcYNdGx1jxeH3cGQE8kiKIz9c6', 'Usuário'),
(9, 'Cristiano Ronaldo', 'cr7gostoso@gmail.com', '1985-02-05', '$2y$10$f4S1zp6Eim3PiuqvY.1Y8OFj7ERT419XQt5uP7O5BdwgnBN/l4X2e', 'Usuário');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
