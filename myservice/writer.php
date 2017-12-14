
<?php

//http://www.kodingmadesimple.com/2014/12/how-to-insert-json-data-into-mysql-php.html


http://localhost/myservice/writer.php?jsondata={[{%22pid%22:%221%22,%22pname%22:%22Dove%22,%22price%22:%22123%22}]}


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

/* read data from json */
//read data from file 
//$jsondata = file_get_contents('empdetails.json');

//read from url 
$jsondata =$_GET['jsondata'];

//convert json object to php associative array
$data = json_decode($jsondata, true);

echo "<br/>";

//echo $jsondata;

//echo count($data);


echo "<br/>";


for($i=0; $i<count($data); $i++ )
{
    //get the employee details
    $pid = $data[$i]['pid'];
    $pname = $data[$i]['pname'];
    $price = $data[$i]['price'];

    echo $pid.$pname.$price;


    

        echo "<br/>";

        $sql = "INSERT INTO products(pid, pname, price,status)
        VALUES ($pid,'$pname', $price, true)";

        echo $sql;

        echo "<br/>";


        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

}

//$name = $data['personal']['name'];
//$gender = $data['personal']['gender'];
//$age = $data['personal']['age'];
//$streetaddress = $data['personal']['address']['streetaddress'];
//$city = $data['personal']['address']['city'];
//$state = $data['personal']['address']['state'];
//$postalcode = $data['personal']['address']['postalcode'];
//$designation = $data['profile']['designation'];
//$department = $data['profile']['department'];



$conn->close();

echo "inseerted..";




?>
