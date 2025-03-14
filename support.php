<?php include "app/app.php"; $page = 3; head($page); ?>
<body> <header> <?php navbar($page); ?> </header>

<main id="suppo">


    <section id="start">

        <div class="ac-head">
            <div class="ac-centertext">
                <h1>Support</h1>
            </div>
        </div>

    </section>

    <section id="title">


        <h2>
            Support disponible sur Discord
        </h2>

        <p>Ou contactez-nous sur :</p>
        <ul>
            <li>
                <small><a href="mailto:officiel@tyrolium.fr">officiel@tyrolium.fr</a></small>
            </li>
            <li>
                <small>Tel : +33 7 56 88 96 97</small><br>
                <small>Whatapp : +33 7 56 88 96 97</small>
            </li>
        </ul>


    </section>

    <section id="discord">

        <iframe src="https://discord.com/widget?id=963833730529632296&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

    </section>







</main>

<?php footer($page); ?> </body> </html>