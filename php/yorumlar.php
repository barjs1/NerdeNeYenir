<?php
$db = new SQLite3('../db.sqlite');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    // Şehir ismini küçük harfe çevir
    $city = strtolower($data['city']);

    $stmt = $db->prepare("INSERT INTO comments (city, user_id, comment, rating) VALUES (?, ?, ?, ?)");
    $stmt->bindValue(1, $city); // ✅ küçük harfli şehir
    $stmt->bindValue(2, $data['userId']);
    $stmt->bindValue(3, $data['comment']);
    $stmt->bindValue(4, $data['rating']);
    $stmt->execute();

    echo json_encode(['success' => true]);
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $city = $_GET['city'];

    $stmt = $db->prepare("SELECT c.comment, c.rating, c.created_at, u.username 
                          FROM comments c 
                          JOIN users u ON c.user_id = u.id 
                          WHERE LOWER(c.city) = LOWER(?)");

    $stmt->bindValue(1, $city);
    $result = $stmt->execute();

    $comments = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $comments[] = $row;
    }

    echo json_encode($comments);
}

?>



