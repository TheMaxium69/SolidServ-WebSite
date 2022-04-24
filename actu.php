<?php include "app/app.php"; $page = 3; head($page); ?>
<body> <header> <?php navbar($page); ?> </header>

<main>

    <section id="start">

        <div class="ac-head">
            <div class="ac-centertext">
                <h1>Actualité</h1>
            </div>
        </div>

    </section>




    <section id="actu" class="container">
        <ul class="chat-thread">
            <?php

            require "api/bot/recup.php";

            $actuAll = getAllActu();

            foreach ($actuAll as $actu){

                if ($env_admin[$actu['user']]){
                    $username = $env_admin[$actu['user']];
                    if ($username == "Maxime Tournier"){
                        $id = "m";
                    } else if ($username == "Pierre-Louis Devaud"){
                        $id = "p";
                    }
                    $dateSrc = $actu['date'];
                    $dateTime = new DateTime($dateSrc);
                ?>
                    <li id="<?=$id?>">

                        <h3><?php echo $username ?></h3>
                        <small><?php echo $env_admin_role[$username] ?></small>
                        <p>
                            <?php echo nl2br($actu['content']); ?>
                        </p>
                        <small><?= $dateTime->format('H:i d/m/y') ?></small>

                    </li>



                <?php
                }
            } ?>
        </ul>

    </section>


    <section id="intro" class="container">

        <hr>
<br>
        <p>Nos actualité sont poster sur notre Discord et rediriger ici</p>

        <button id="btn-intro" class="tyrobutton" data-url="https://discord.com">Rejoindre notre Discord</button>



    </section>


</main>

<?php footer($page); ?> </body> </html>