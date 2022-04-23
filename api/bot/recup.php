<?php

function getAllActu(){

    require "api/db.php";

    $requestNews = "SELECT * FROM announcement ORDER BY id DESC";

    $allActu = mysqli_query($ConnectDB, $requestNews);

    return $allActu;

}
