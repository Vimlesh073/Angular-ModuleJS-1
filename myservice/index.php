
<?php

echo "called..";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "super_store";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO products(pid, pname, price,status)
VALUES (1,'Dove', 123, true)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

echo "inseerted..";




?>
