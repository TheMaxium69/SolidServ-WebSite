import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Support } from './pages/support/support';
import { ProduitLayout } from './pages/produit/produit-layout';
import { Vps } from './pages/produit/vps/vps';
import { SiteWeb } from './pages/produit/site-web/site-web';
import { ServeurDedie } from './pages/produit/serveur-dedie/serveur-dedie';
import { Minecraft } from './pages/produit/minecraft/minecraft';
import { Fivem } from './pages/produit/fivem/fivem';
import { tyroUiErrorRoutes, TyroUiSeo, tyroUiLocalizedRoutes } from 'tyrolium-ui';

/* ─── SEO (titre + description par page, FR / EN) ─────────────────────── */

const SEO_HOME: TyroUiSeo = {
  fullTitle:   { fr: 'SolidServ - Hébergeur de Serveurs situé en France', en: 'SolidServ - Server Hosting Based in France' },
  description: { fr: 'SolidServ est un hébergeur de serveurs situé en France pour les entreprises et les particuliers. VPS, hébergement web, serveurs dédiés et serveurs de jeu - une infrastructure fiable et haute performance pour tous vos projets. Une filiale de Tyrolium.', en: 'SolidServ is a server hosting provider based in France for businesses and individuals. VPS, web hosting, dedicated servers and game servers - reliable, high-performance infrastructure for all your projects. A Tyrolium subsidiary.' },
};

const SEO_SUPPORT: TyroUiSeo = {
  title:       { fr: 'Support', en: 'Support' },
  description: { fr: "Contactez le support SolidServ : plusieurs façons de nous joindre selon l'urgence et votre préférence.", en: 'Contact SolidServ support: multiple ways to reach us, depending on urgency and your preference.' },
};

const SEO_VPS: TyroUiSeo = {
  title:       { fr: 'VPS', en: 'VPS' },
  description: { fr: 'Serveurs VPS hébergés en France : protection anti-DDoS, NVMe SSD et support 24/7 inclus sur toutes les offres.', en: 'VPS servers hosted in France: anti-DDoS protection, NVMe SSD and 24/7 support included with every plan.' },
};

const SEO_SITE_WEB: TyroUiSeo = {
  title:       { fr: 'Hébergement web', en: 'Website Hosting' },
  description: { fr: 'Hébergement de sites web en France : SSL gratuit, cPanel et support 24/7 inclus sur toutes les offres.', en: 'Website hosting in France: free SSL, cPanel and 24/7 support included with every plan.' },
};

const SEO_SERVEUR_DEDIE: TyroUiSeo = {
  title:       { fr: 'Serveur dédié', en: 'Dedicated Server' },
  description: { fr: 'Serveurs dédiés en France : processeurs AMD Ryzen, NVMe SSD en RAID et anti-DDoS sur chaque serveur.', en: 'Dedicated servers in France: AMD Ryzen processors, NVMe SSD RAID and anti-DDoS on every server.' },
};

const SEO_MINECRAFT: TyroUiSeo = {
  title:       { fr: 'Serveur Minecraft', en: 'Minecraft Server' },
  description: { fr: 'Hébergement de serveurs Minecraft en France : panel Pterodactyl, anti-DDoS et sauvegardes automatiques inclus.', en: 'Minecraft server hosting in France: Pterodactyl panel, anti-DDoS and automatic backups included.' },
};

const SEO_FIVEM: TyroUiSeo = {
  title:       { fr: 'Serveur FiveM', en: 'FiveM Server' },
  description: { fr: 'Hébergement de serveurs FiveM en France : OneSync, anti-DDoS et panel Pterodactyl inclus sur toutes les offres.', en: 'FiveM server hosting in France: OneSync, anti-DDoS and Pterodactyl panel included with every plan.' },
};

export const routes: Routes = tyroUiLocalizedRoutes([
  { path: '', component: Home, data: { seo: SEO_HOME } },
  { path: 'support', component: Support, data: { seo: SEO_SUPPORT } },
  {
    path: 'produit',
    component: ProduitLayout,
    children: [
      { path: '',              redirectTo: 'vps', pathMatch: 'full' },
      { path: 'vps',           component: Vps, data: { seo: SEO_VPS } },
      { path: 'site-web',      component: SiteWeb, data: { seo: SEO_SITE_WEB } },
      { path: 'serveur-dedie', component: ServeurDedie, data: { seo: SEO_SERVEUR_DEDIE } },
      { path: 'minecraft',     component: Minecraft, data: { seo: SEO_MINECRAFT } },
      { path: 'fivem',         component: Fivem, data: { seo: SEO_FIVEM } },
    ],
  },
  ...tyroUiErrorRoutes(),
]);
