<?php

include "../db.php";


if ($_GET['content'] && $_GET['user'] && $_GET['token']) {

    $content = $_GET['content'];
    $user = $_GET['user'];
    $token = $_GET['token'];

    if ($token = $tokenBDD){

        $q = $db->prepare("INSERT INTO `actu` (`user`, `content`) VALUES (:user, :content)");

        $q->execute([
            'user' => $user,
            'content' => $content
        ]);

    }

}


