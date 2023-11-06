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
/* ENVIAR COMPRA *//* -----------------------------------------------------------------------------------------------------------*/
// Obtenha os dados do formulário
$data = json_decode(file_get_contents("php://input"), true);

$nomeCarro = $data['nomeCarro'];
$corCarro = $data['corCarro'];
$precoCarro = $data['precoCarro'];
$celular = $data['buyCelular'];

// Insira os dados na tabela 'purchase'
$stmt = $conn->prepare("INSERT INTO purchase (carro, cor, preco, celular) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nomeCarro, $corCarro, $precoCarro, $celular);

if ($stmt->execute()) {
    $response = array(
        "message" => "Compra bem sucedida!",
        "details" => "O celular já foi cobrado o valor, seu carro te espera em Los Santos, Av. Pillbox Hills, nº321. CEP: 54321-6789."
    );
    echo json_encode($response);
} else {
    $response = array(
        "error" => "Erro ao registrar a compra: " . $conn->error
    );
    echo json_encode($response);
}
/* ENVIAR COMPRA *//* -----------------------------------------------------------------------------------------------------------*/
// Feche a conexão com o banco de dados
$conn->close();
?>