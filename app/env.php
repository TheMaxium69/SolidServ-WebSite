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
        "file" => "./",
        "css" => "index",
    ),
    2 => array(
        "title" => "Contact | SolidServ",
        "name" => "Contact",
        "file" => "contact.php",
        "css" => "contact",
    ),
);
