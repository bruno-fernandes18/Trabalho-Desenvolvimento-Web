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
/* CADASTRO */ /* -----------------------------------------------------------------------------------------------------------*/
// Recebe os dados do formulário pelo método POST
$email = $_POST['email'];
$senha = $_POST['senha'];
$celular = $_POST['celular'];

// Adciona pelo método INSERT na mesa accounts os dados de registro
$sql = "INSERT INTO accounts (EMail, Senha, Celular) VALUES (?, ?, ?)";

//Preparação para consulta SQL
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $email, $senha, $celular); // Vincula os Dados com as Colunas do MySQL ('sss' é string string string)

if ($stmt->execute()) { //Chama a execução do registro por meio do IF
    echo 'Sucesso'; // Retorna 'success' se o registro for bem-sucedido
} else {
    echo 'Erro ao registrar: ' . $stmt->error; // Retorna uma mensagem de erro em caso de falha
}
/* CADASTRO */ /* -----------------------------------------------------------------------------------------------------------*/
$stmt->close();
$conn->close();
?>
