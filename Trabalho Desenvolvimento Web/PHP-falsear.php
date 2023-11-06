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
// Consulta SQL para recuperar os dados
$sql = "SELECT carro, cor, preco, celular FROM purchase";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Feche a conexão com o banco de dados
$conn->close();

// Saída dos dados em formato JSON
header('Content-Type: application/json');
echo json_encode($data);
?>