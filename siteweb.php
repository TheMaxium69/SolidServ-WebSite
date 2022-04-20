<?php include "app/app.php"; $page = 2; $souspage = 2; head($page, $souspage); ?>
<body> <header> <?php navbar($page); ?> </header>

<main id="web">

    <section id="home">

        <div class="heb-head">
            <div class="heb-centertext">
                <h1>Site Web</h1>
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
                if ($product['gid'] == $env_gid['web']){
                    /*echo "GOOD : " . $product['pid'];*/
                    /*var_dump($product); */
                    ?>
                    <div class="col">

                        <div class="container">

                            <h2><?= $product['name'] ?></h2>

                            <hr>

                            <h3><?= $product['pricing']['EUR']['monthly'] ?>€/Mois</h3>

                            <p><?= $product['description'] ?></p>

                            <div>

                                <button id="btn-commande" class="tyrobutton" data-url="http://localhost/SolidServ-WebSite/panel/cart.php?a=add&pid=<?= $product['pid'] ?>">commandé</button>

                            </div>

                        </div>

                    </div>

                <?php } else {
                    $isHere = "no";
                }
            } }
            if ($isHere == "no"){
                echo "<p class='err'>Indiponible pour le moment</p>";
            } ?>
        </div>
    </section>

    <hr>

    <section id="info-droit">
        <div class="row container">
            <div class="col-6">
                <img src="assets/wwwserveur.png">
            </div>
            <div class="col-6">
                <h2>Performance</h2>
                <ul>
                    <li>
                        <p>
                            Avec la simplicité et la puissance de nos serveurs WEB, concentrez vous sur l’essentiel et laissez nous faire le reste, vous avez le choix, avec un accès FTP vous permettant de mettre vos propres fichiers web (HTML, CSS, JS, PHP…) ou bien un panel simple (cPanel) qui vous permet d’installer des CMS plug and play comme WordPress ou Shopify !</p>
                    </li>
                    <li>
                        <p>
                            Notre infrastructure WEB utilise uniquement du stockage rapide (SSD), ainsi que de performances optimales vous permettant un trafic important sur votre site web, l’option SSL est également disponible sur tous nos serveurs web pour augmenter la sécurité et le référencement de votre site !</p>
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
                <img src="assets/www.png">
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </li>
                    <li>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>

</main>


<?php footer($page); ?> </body> </html>