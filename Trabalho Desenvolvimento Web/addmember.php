<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifique se os dados do formulário foram enviados via POST.
    
    $email = $_POST['email'];
    $senha = $_POST['password'];
    $telefone = $_POST['phone'];

    // Lê o conteúdo atual do arquivo JSON
    $jsonFile = 'membros.json';
    $data = json_decode(file_get_contents($jsonFile), true);

    // Adiciona um novo membro registrado
    $novoMembro = array(
        'email' => $email,
        'senha' => $senha,
        'telefone' => $telefone
    );

    $data['membros_registrados'][] = $novoMembro;

    // Escreve o conteúdo atualizado de volta no arquivo JSON
    file_put_contents($jsonFile, json_encode($data));

    // Enviar uma resposta JSON para o JavaScript
    $response = array('success' => true, 'message' => 'Membro registrado com sucesso');
    echo json_encode($response);
} else {
    // Caso a página seja acessada diretamente sem o método POST, você pode tratar isso de acordo com suas necessidades.
    echo "Acesso inválido";
}
?>
