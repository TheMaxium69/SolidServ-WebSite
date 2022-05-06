<?php include "app/app.php"; $page = 2; $souspage = 3; head($page, $souspage); ?>
<body> <header> <?php navbar($page); ?> </header>

<main id="mc">

    <section id="home">

        <div class="heb-head">
            <div class="heb-centertext">
                <h1>Minecraft</h1>
            </div>
        </div>

    </section>

    <section id="formule">
        <div class="row desktop">
            <?php
            require_once 'panel/init.php';
            require_once 'api/whmcs/connect.php';

            $produitAll = product();

            foreach ($produitAll as $productCompresse) { foreach ($productCompresse as $product){
                if ($product['gid'] == $env_gid['minecraft']){
                    /*echo "GOOD : " . $product['pid'];*/
                    /*var_dump($product); */
                    $isExist = true;
                    ?>
                    <div class="col">

                        <div class="container">

                            <h2><?= $product['name'] ?></h2>

                            <hr>

                            <h3><?= $product['pricing']['EUR']['monthly'] ?>€/Mois</h3>

                            <ul><?= $product['description'] ?></ul>

                            <div>

                                <button id="btn-commande" class="tyrobutton" data-url="panel/cart.php?a=add&pid=<?= $product['pid'] ?>">commander</button>

                            </div>

                        </div>

                    </div>

                <?php } else {
                    $isHere = "no";
                }
            } }
            if ($isHere == "no" && $isExist != true){
                echo "<p class='err'>Indiponible pour le moment</p>";
            } ?>
        </div>
    </section>

    <hr>

    <section id="info-droit">
        <div class="row container">
            <div class="col-6">
                <img src="assets/mc.png">
            </div>
            <div class="col-6">
                <h2 class="red"><img src="assets/TyroliumSword.png" id="sword">Puissance</h2>
                <ul>
                    <li>
                        <p>
                            Grâce à la puissance de nos serveurs, vous pourrez créer avec pour seule limite votre imagination et celle de vos amis, construire des bâtiments à plusieurs c’est toujours mieux, développer les plugins les plus originaux, ou créer un mod qui rajoute des épées bleues et rouges ! Vous avez les clés en main !</p>
                    </li>
                    <li>
                        <p>
                            Nos serveurs Minecraft bénéficient de slots illimités ainsi que de RAM dédiée et puissante (mais pas illimité, car ça, c’est pas possible !), la possibilité de mettre votre propre jar, vos propre mod et plugin, de plus nos serveurs sont compatibles Spigot, BungeeCord, Sponge, Forge, Fabric… À peu près tout en fait !</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section id="info-gauche">
        <div class="row container">
            <div class="col-6">
                <h2><img src="assets/RhodoniteSword.png" id="sword">Fiabilité</h2>
                <ul>
                    <li>
                        <p>
                            Nous utilisons des serveurs récents et performants de plus, nous travaillons dur pour vous faire bénéficier du meilleurs rapport qualité-prix de manière à vous proposer une offre au plus proche de vos attentes.
                        </p>
                    </li>
                    <li>
                        <p>
                            Notre infrastructure est conçue de manière à garantir sa stabilité, avec un uptime d’environ 99% nos serveurs sont prêts pour accueillir vos projets et vous permettre de profiter de nos services en toute tranquillité.
                        </p>
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <img src="assets/tyroserv.png">
            </div>
        </div>
    </section>

    <section id="info-droit">
        <div class="row container">
            <div class="col-6">
                <img src="assets/ptero.png">
            </div>
            <div class="col-6">
                <h2 class="red"><img src="assets/TyroliumSword.png" id="sword">Pterotacjyl</h2>
                <ul>
                    <li>
                        <p>
                            Nous utilisons Pterodactyl un panel de gestion simple ayant fait ses preuves et esthétique qui vous permettra de gérer aisément votre serveur ! </p>
                    </li>
                    <li>
                        <p>
                            Sur le panel, vous aurez un accès direct à une console ainsi qu’à un WEB FTP, vous pourrez ajouter des sous utilisateurs et relancer votre serveur, changer de version…</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!--<section id="partenaire">
        <div class="back-border">
            <div class="up-border">
            </div>
        </div>
        <div class="contenu">
            <div class="container">
                <h2>Partenaire</h2>
                <div class="row">
                    <div class="col-4">
                        <h3>TyroServ</h3>
                        <small>Serveur Minecraft - PVP/Faction</small>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    </div>
                    <div class="col-4">
                        <h3>Michel</h3>
                        <small>Développeur</small>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    </div>
                    <div class="col-4">
                        <h3>dédé</h3>
                        <small>Serveur Minecraft</small>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    </div>
                </div>
            </div>
        </div>
    </section>-->


    <section id="info-gauche">
        <div class="row container">

            <div class="col-6">
                <h2>SUPPORT</h2>
                <ul>
                    <li>
                        <p>
                            Notre support est disponible <strong>24h/24</strong> et <strong>7J/7</strong> sur notre site mais aussi sur Discord, par téléphone et par mail, nous répondrons à toutes vos  problématiques.
                        </p>
                    </li>
                    <li>
                        <p>
                            Suivez les potentielles pannes ou problèmes technique directement sur le site ou sur vos réseaux préférés comme Discord et Twitter, en temps réel avec vos services.
                        </p>
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <img src="assets/mcsupp.png">
            </div>
        </div>
    </section>

</main>


<script src="https://tyrolium.fr/javascript/tyrobtn.js"></script>

<?php footer($page); ?> </body> </html>