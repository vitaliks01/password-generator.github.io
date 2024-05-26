<?php
$dbhost = "localhost";
$dbname = "db_01"; // Ім'я вашої бази даних в phpMyAdmin
$username = "root"; // Ім'я користувача для підключення до phpMyAdmin (зазвичай "root")
$password = ""; // Пароль для підключення до phpMyAdmin (зазвичай порожній)

// Створення з'єднання з базою даних через phpMyAdmin
$db = new PDO("mysql:host=$dbhost;dbname=$dbname", $username, $password);

// Перевірка з'єднання
if (!$db) {
    die("Connection failed: " . $conn->connect_error);
}

// Отримання даних з POST-запиту
$nm = $_POST['fname'];
$em = $_POST['email'];
$ct = $_POST['Cont'];
$pw = $_POST['pwd'];

// SQL-запит для вставки даних в базу даних
$sql = "INSERT INTO logininfo (Name, Email, Phone, Passwordu) VALUES ('$nm', '$em', '$ct', '$pw')";

// Виконання запиту і перевірка результату
try {
    $stmt = $db->prepare($sql);
    $stmt->execute();
    echo '<script> alert ("Account Created successfully") </script>';
    echo "<a href='login.html'>Sign in</a>";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Закриття з'єднання з базою даних
$db = null;
?>