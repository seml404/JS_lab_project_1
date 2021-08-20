<?php 

$_POST = json_decode(file_get_contents("php://input", true));
echo var_dump($_POST);

// file_put_contents('file.txt', json_encode($_POST), FILE_APPEND);