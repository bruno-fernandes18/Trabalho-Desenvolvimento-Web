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
/* PEGAR CARROS *//* -----------------------------------------------------------------------------------------------------------*/
$tipo_carro = $_GET['tipo']; // Obtenha o valor do parâmetro 'tipo' da URL
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$items_per_page = 6;
$offset = ($page - 1) * $items_per_page;

if ($tipo_carro === "Tudo") {
    $countSql = "SELECT COUNT(*) as total FROM cars";
    $sql = "SELECT * FROM cars LIMIT $items_per_page OFFSET $offset";
} else {
    $countSql = "SELECT COUNT(*) as total FROM cars WHERE tipo = '$tipo_carro'";
    $sql = "SELECT * FROM cars WHERE tipo = '$tipo_carro' LIMIT $items_per_page OFFSET $offset";
}

$countResult = $conn->query($countSql);
$totalCount = $countResult->fetch_assoc()['total'];
$totalPage = ceil($totalCount / 6);
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $carros = array();
    while ($row = $result->fetch_assoc()) {
        $carros[] = $row;
    }
    echo json_encode(array("carros" => $carros, "totalPage" => $totalPage));
} else {
    echo "Nenhum carro encontrado no banco de dados.";
}
/* PEGAR CARROS *//* -----------------------------------------------------------------------------------------------------------*/
// Feche a conexão com o banco de dados
$conn->close();
?>
