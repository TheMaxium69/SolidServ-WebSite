<?php include "app/app.php"; $page = 2; $souspage = 1; head($page, $souspage); ?>
<body> <header> <?php navbar($page); ?> </header>

<main id="vps">

    <section id="home">

        <div class="heb-head">
            <div class="heb-centertext">
                <h1>VPS</h1>
            </div>
        </div>

    </section>

    <!--<a class="btn btn-primary" href="<?php /*echo $env_whmcs."store"*/?>">SHOP</a>-->

    <section id="formule">
        <div class="row desktop">
            <?php
            require_once 'panel/init.php';
            require_once 'api/whmcs/connect.php';

            $produitAll = product();

            foreach ($produitAll as $productCompresse) {foreach ($productCompresse as $product){

                if ($product['gid'] == $env_gid['vps']){
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

                                <button id="btn-commande" class="tyrobutton" data-url="panel/cart.php?a=add&pid=<?= $product['pid'] ?>">commandé</button>

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
                <img src="assets/pa-server.png">
            </div>
            <div class="col-6">
                <h2>Performance</h2>
                <ul>
                    <li>
                        <p>
                            La virtualisation KVM (Kernel Virtual Machine) permet une plus grande stabilité de vos VPS ainsi que de meilleures performances, en tout points cette technologie Open Source saura vous satisfaire.</p>
                    </li>
                    <li>
                        <p>
                            Avec notre infrastructure composée de serveurs avec des processeurs AMD Ryzen 7 3800x jusqu'à 4.5 GHz, nous pouvons vous garantir des performances optimales qui conviendront à tous vos projets. De plus, notre RAM DDR4 possède la technologie ECC ce qui permet de limiter au maximum les crashs ou corruptions causés par la RAM.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section id="info-gauche">
        <div class="row container">
            <div class="col-6">
                <h2>Fiabilité</h2>
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
                <img src="assets/vps2.png">
            </div>
        </div>
    </section>

    <section id="partenaire">
        <div class="back-border">
            <div class="up-border">
            </div>
        </div>
        <div class="contenu">
            <div class="container">
                <h2>Partenaire</h2>
                <div class="row">
                    <div class="col-4">
                        <h3>Jackie</h3>
                        <small>Youtubeur</small>
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
    </section>


    <section id="info-droit">
        <div class="row container">
            <div class="col-6">
                <img src="assets/date.svg">
            </div>
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
        </div>
    </section>


</main>



<script src="https://tyrolium.fr/javascript/tyrobtn.js"></script>

<?php footer($page); ?> </body> </html>