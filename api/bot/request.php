<?php

include "db.php";

var_dump($_GET);

if ($_GET['param1']) {

    $content = $_GET['param1'];

    $q = $db->prepare("INSERT INTO `test` (`content`) VALUES (:content)");

    $q->execute([
        'content' => $content
    ]);

}


