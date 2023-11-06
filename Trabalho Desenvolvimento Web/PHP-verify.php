<?php
/* Parte do Banco de Dados *//* -----------------------------------------------------------------------------------------------------------*/
$hostname = "localhost";
$username = "root";
$password = "";
$database = "pdm_store";

$conn = new mysqli($hostname, $username, $password, $database);
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}
/* Parte do Banco de Dados *//* -----------------------------------------------------------------------------------------------------------*/
/* VERIFICAÇÃO */ /* -----------------------------------------------------------------------------------------------------------*/
// Obtenha os dados do formulário
$email = $_POST['email'];
$senha = $_POST['senha'];

// Consulta para verificar as credenciais no banco de dados
$sql = "SELECT * FROM accounts WHERE EMail = '$email' AND Senha = '$senha'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo 'success'; // Retorna 'success' se o registro for bem-sucedido
} else {
    echo 'Erro ao registrar: ' . $stmt->error; // Retorna uma mensagem de erro em caso de falha
}
/* VERIFICAÇÃO */ /* -----------------------------------------------------------------------------------------------------------*/

// Feche a conexão com o banco de dados
$conn->close();
?>