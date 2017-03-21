<?php
if($_POST){
    $name = $_POST['form_name'];
    $email = $_POST['form_email'];
    $message = $_POST['form_msg'];
	echo "haim";
//send email
    mail("haimyyy@gmail.com", "51 Deep comment from" .$email, $message);
}
?>