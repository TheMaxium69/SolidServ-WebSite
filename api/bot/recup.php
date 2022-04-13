<?php

function getAllActu(){

    require "api/db.php";

    $requestNews = "SELECT * FROM actu";

    $allActu = mysqli_query($ConnectDB, $requestNews);

    return $allActu;

}
