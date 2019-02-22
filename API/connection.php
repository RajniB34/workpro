<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname= "workprodata";
$con = mysqli_connect($servername, $username, $password, $dbname);
if($con)
{
	//echo"connection success";
}
else
{
	//echo"not conn";
}
?>