import { Component, inject, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiFooter, TyroUiNavbar, TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TyroUiNavbar, TyroUiFooter],
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
      ? `<strong>SolidServ</strong> is <strong>Tyrolium's hosting subsidiary</strong>, offering high-performance server solutions. From <strong>VPS</strong> to <strong>dedicated servers</strong> and game servers, we power your projects with reliability and performance. <em>A Tyrolium company</em>`
      : `<strong>SolidServ</strong> est la <strong>filiale d'hébergement de Tyrolium</strong>, proposant des solutions serveur haute performance. Du <strong>VPS</strong> aux <strong>serveurs dédiés</strong> en passant par les serveurs de jeu, nous alimentons vos projets avec fiabilité et performance. <em>Une société Tyrolium</em>`
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
