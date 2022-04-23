<?php

function getAllActu(){

    require "api/db.php";

    $requestNews = "SELECT * FROM announcement";

    $allActu = mysqli_query($ConnectDB, $requestNews);

    return $allActu;

}
