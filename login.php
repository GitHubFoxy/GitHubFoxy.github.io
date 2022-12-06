<?php 
    $first_name = $_POST['first_name'];
    $password = $_POST['password'];
    //database connection
    $conn = new mysqli('localhost','root','','test');
    if($conn->connect_error){
        die("Connection Failed : ".$conn->connect_error);
    }else {
        $stmt = $conn->prepare('insert into registration(first_name, password)
        values(?,?)');
        $stmt->bind_param("ss",$first_name,$password);
        $stmt->execute();
        echo"Registration Succseful!";
        $stmt->close();
        $conn->close();
    }
?>