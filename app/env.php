<?php

//PROD or DEV
$APP_ENV = "PROD";


//Variable Share

$env_urlFile = "./extension/";
$env_urlLogo = "./assets/LogoOnglet.png";


$env_page = array(
    //404
    0 => "404 | Erreur",
    //Page
    1 => array(
        "title" => "Accueil | SolidServ",
        "name" => "Accueil",
        "url" => "./",
        "css" => "index",
    ),
    2 => array(
        "title" => "Hébergement | SolidServ",
        "name" => "Hébergement",
        "css" => "hebergement",
    ),
    3 => array(
        "title" => "Actualité | SolidServ",
        "name" => "Actualité",
        "url" => "Actualite.php",
        "css" => "Actualite",
    ),
    4 => array(
        "title" => "Support | SolidServ",
        "name" => "Support",
        "url" => "support.php",
        "css" => "support",
    ),
    5 => array(
        "name" => "Espace client",
        "url" => "...",
    ),
    6 => array(
        "name" => 'Panier',
        "url" => '...',
    ),
);
