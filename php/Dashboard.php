<?php
$dbhost = "localhost";
$dbname = "db_01";
$username = "root";
$password = "";

$db = new PDO("mysql:host=$dbhost;dbname=$dbname", $username, $password);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$em = $_POST['Email'];
$pw = $_POST['Password'];

$sql = "SELECT * FROM logininfo WHERE Email = :email AND PasswordU = :password";
$stmt = $db->prepare($sql);
$stmt->execute(array(':email' => $em, ':password' => $pw));
$check = $stmt->fetch(PDO::FETCH_ASSOC);

if ($check) {
    echo 'Hello ' . $check['Name'] . ' You are now <a href="main.html">logged in</a> ';
} else {
    echo 'No data found, Check your Email or Password or try to <a href="login.html">SignUp</a>';
}
?>
