<?php
$db = new SQLite3('../db.sqlite');
$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);

$stmt = $db->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bindValue(1, $username);
$stmt->bindValue(2, $password);

$response = [];
if ($stmt->execute()) {
    $response['success'] = true;
} else {
    $response['error'] = "Kayıt başarısız.";
}
echo json_encode($response);
?>
