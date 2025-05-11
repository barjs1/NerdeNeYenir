<?php
$db = new SQLite3('../db.sqlite');
$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$password = $data['password'];

$stmt = $db->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bindValue(1, $username);
$result = $stmt->execute()->fetchArray(SQLITE3_ASSOC);

$response = [];
if ($result && password_verify($password, $result['password'])) {
    $response['success'] = true;
    $response['userId'] = $result['id'];
    $response['username'] = $result['username'];
} else {
    $response['error'] = "Giriş başarısız.";
}
echo json_encode($response);
?>
