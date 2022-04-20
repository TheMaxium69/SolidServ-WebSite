<?php

function head($page, $souspage=null)
{
    include "env.php";

    if (!empty($env_page[$page])) {
        if ($page == 2){
            if ($souspage == null){

                $title = $env_page[$page]["title"];

            } else {

                $title = $env_sous_page[$souspage]["title"];


            }


        }


        $title = $env_page[$page]["title"];

        
    } else {
        $title = $env_page[0]["title"];
    }

    echo '<!doctype html> <html lang="fr"> <head>';
    require_once "composant/meta.phtml";
    echo '<title>' . $title . '</title>';
    echo '<link href="' . $env_urlLogo . '" rel="shortcut icon">';
    require_once "extension.php";
    echo '</head>';
}
