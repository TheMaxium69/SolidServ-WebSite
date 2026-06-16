import { Component, inject, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiFooter, TyroUiNavbar, TyroUiLangService , TyroUiEasterEgg } from 'tyrolium-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TyroUiNavbar, TyroUiFooter, TyroUiEasterEgg],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  private readonly langService = inject(TyroUiLangService);

  public currentUser: any = [];

  public PROJECT_NAME = 'SolidServ';
  public PROJECT_LOGO = 'assets/tyrolium-ui/projects/SolidServ.png';
  public PROJECT_CONTENT = computed(() =>
    this.langService.lang() === 'en'
      ? `<strong>SolidServ</strong> is a <strong>server hosting provider based in France</strong> for businesses and individuals. VPS, web hosting, dedicated servers and game servers - reliable, high-performance infrastructure for all your projects. <em>A Tyrolium subsidiary.</em>`
      : `<strong>SolidServ</strong> est un <strong>hébergeur de serveurs situé en France</strong> pour les entreprises et les particuliers. VPS, hébergement web, serveurs dédiés et serveurs de jeu - une infrastructure fiable et haute performance pour tous vos projets. <em>Une filiale de Tyrolium.</em>`
  );

  public pages = computed<ITyroUiNavbarPages[]>(() =>
    this.langService.lang() === 'en'
      ? [
          { label: 'Home', link: '/', icon: 'ri-home-line' },
          {
            label: 'Products', icon: 'ri-server-line',
            link: '/produit',
            children: [
              { label: 'VPS',              link: '/produit/vps',            icon: 'ri-cpu-line' },
              { label: 'Website Hosting',  link: '/produit/site-web',       icon: 'ri-global-line' },
              { label: 'Dedicated Server', link: '/produit/serveur-dedie',  icon: 'ri-hard-drive-2-line' },
              { label: 'Minecraft',        link: '/produit/minecraft',      icon: 'ri-gamepad-line' },
              { label: 'FiveM',            link: '/produit/fivem',          icon: 'ri-steering-2-line' },
            ],
          },
          { label: 'Support', link: '/support', icon: 'ri-customer-service-2-line' },
        ]
      : [
          { label: 'Accueil', link: '/', icon: 'ri-home-line' },
          {
            label: 'Produits', icon: 'ri-server-line',
            link: '/produit',
            children: [
              { label: 'VPS',             link: '/produit/vps',            icon: 'ri-cpu-line' },
              { label: 'Hébergement Web', link: '/produit/site-web',       icon: 'ri-global-line' },
              { label: 'Serveur Dédié',   link: '/produit/serveur-dedie',  icon: 'ri-hard-drive-2-line' },
              { label: 'Minecraft',       link: '/produit/minecraft',      icon: 'ri-gamepad-line' },
              { label: 'FiveM',           link: '/produit/fivem',          icon: 'ri-steering-2-line' },
            ],
          },
          { label: 'Support', link: '/support', icon: 'ri-customer-service-2-line' },
        ]
  );

  public socials: ITyroUiNavbarPages[] = [
    { label: 'instagram', link: 'https://www.instagram.com/solidserv/',  icon: 'ri-instagram-line' },
    { label: 'x',   link: 'https://x.com/solid_serv',               icon: 'ri-twitter-x-fill' },
    { label: 'youtube',   link: 'https://www.youtube.com/channel/UCB3F4NN820r3Se4ZZinQpHA',  icon: 'ri-youtube-fill' },
    { label: 'discord',   link: 'https://discord.gg/ycwWzmCQNx',          icon: 'ri-discord-fill' },
    { label: 'linkedin',  link: 'https://www.linkedin.com/company/solidserv',      icon: 'ri-linkedin-fill' },
    { label: 'tiktok',    link: 'https://www.tiktok.com/@solidserv?',                icon: 'ri-tiktok-fill' },
    { label: 'github',    link: 'https://github.com/SolidServ',            icon: 'ri-github-fill' },
  ];
}
