<?php include "app/app.php"; $page = 2; head($page); ?>
<body> <header> <?php navbar($page); ?> </header>

<main>

    <section id="home">

        <div class="heb-head">
            <div class="heb-centertext">
                <h1>VPS</h1>
            </div>
        </div>

    </section>

    <a class="btn btn-primary" href="<?php echo $env_whmcs."store"?>">SHOP</a>

</main>


<?php footer($page); ?> </body> </html>