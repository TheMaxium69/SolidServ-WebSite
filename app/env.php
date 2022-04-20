<?php

//PROD or DEV
$APP_ENV = "DEV";


//Variable Share
if ($APP_ENV == "DEV"){
    $env_whmcs = "http://localhost/SolidServ-WebSite/panel/";
} else if ($APP_ENV == "PROD"){
    $env_whmcs = "/panel/";
}

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
        "url" => "actu.php",
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
        "url" => $env_whmcs."login.php" ,
    ),
    6 => array(
        "name" => 'Panier',
        "url" => $env_whmcs."cart.php?a=view",
    ),
);

$env_sous_page = array(
    //Page
    1 => array(
        "title" => "VPS | SolidServ",
    ),
    2 => array(
        "title" => "Site Web | SolidServ",
    ),
    3 => array(
        "title" => "Minecraft | SolidServ",
    ),
    4 => array(
        "title" => "FiveM | SolidServ",
    ),
    5 => array(
        "title" => "Stockage | SolidServ",
    ),
);

$env_admin = array(

    "363366883652796416" => "Maxime Tournier",

    "858948371388563457" => "Pierre-Louis Devaud"


);

$env_admin_role = array(

    "Maxime Tournier" => "Fondateur de SolidServ & <a href='https://tyrolium.fr'>Tyrolium</a>",

    "Pierre-Louis Devaud" => "Fondateur de SolidServ"


);

$env_gid = array(

    "vps" => 1,

    "web" => 2,

    "minecraft" => 3,

    "fivem" => 4,

    "stockage" => 5


);
