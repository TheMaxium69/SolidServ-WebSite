<?php include "app/app.php"; $page = 3; head($page); ?>
<body> <header> <?php navbar($page); ?> </header>

<main>



    <section id="actu">





    <?php

    require "api/bot/recup.php";

    $actuAll = getAllActu();

    foreach ($actuAll as $actu){

        if ($env_admin[$actu['user']]){
            $username = $env_admin[$actu['user']];
        ?>

            <div>
                <h3><?php echo $username ?></h3>
                <p>
                    <?php echo nl2br($actu['content']); ?>
                </p>
            </div>



        <?php
        } } ?>

    </section>

</main>

<?php footer($page); ?> </body> </html>