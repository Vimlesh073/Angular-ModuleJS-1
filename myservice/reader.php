
<?php

//echo "called..";

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

$sql = "SELECT pid, pname, price FROM products";
$result = $conn->query($sql);

//creating an array for response
$response = array();

if ($result->num_rows > 0) {

    $response= array();
    //$response["success"] = 1;
    //$response["count"]= $result->num_rows;

    // output data of each row
    while($row = $result->fetch_assoc()) {
        
        //echo "id: " . $row["pid"]. " - Name: " . $row["pname"]. " " . $row["price"]. "<br>";

        // temp wallpaper array
        $wallpaper = array();
        $wallpaper["pid"] = $row["pid"];
        
        $wallpaper["pname"]=$row["pname"];
        $wallpaper["price"] = $row["price"];
        
        // push all data into final response array
        array_push($response, $wallpaper);


    }

    // echoing JSON response
   echo str_replace('\/','/',json_encode($response));

} else {
    // no wallpapers found
    $response["success"] = 0;
    $response["message"] = "No Wallpapers found";

    echo "0 rows";


}

$conn->close();




?>
