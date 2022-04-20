<?php include "app/app.php"; $page = 4; head($page); ?>
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
                <small><a href="mailto:support@solidserv.fr">support@solidserv.fr</a></small>
            </li>
            <li>
                <small>+33 6 11 11 26 69</small>
            </li>
        </ul>


    </section>

    <section id="discord">

        <iframe src="https://discord.com/widget?id=963833730529632296&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

    </section>







</main>

<?php footer($page); ?> </body> </html>