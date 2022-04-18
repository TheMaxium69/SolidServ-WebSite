<?php include "app/app.php"; $page = 2; head($page); ?>
<body> <header> <?php navbar($page); ?> </header>

<main id="vps">

    <section id="home">

        <div class="heb-head">
            <div class="heb-centertext">
                <h1>VPS</h1>
            </div>
        </div>

    </section>

    <a class="btn btn-primary" href="<?php echo $env_whmcs."store"?>">SHOP</a>


    <section id="formule">



        <div class="row desktop">

        <?php
        require_once 'panel/init.php';
        require_once 'api/whmcs/connect.php';

        $produitAll = product();

        foreach ($produitAll as $productCompresse) { foreach ($productCompresse as $product){

            if ($product['gid'] == $env_gid['vps']){


                /*echo "GOOD : " . $product['pid'];*/

                /*var_dump($product); */?>


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




                <?php }

        } }

        ?>

        </div>

    </section>

    <section>




    </section>

</main>



<script src="https://tyrolium.fr/javascript/tyrobtn.js"></script>

<?php footer($page); ?> </body> </html>