import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Support } from './pages/support/support';
import { ProduitLayout } from './pages/produit/produit-layout';
import { Vps } from './pages/produit/vps/vps';
import { SiteWeb } from './pages/produit/site-web/site-web';
import { ServeurDedie } from './pages/produit/serveur-dedie/serveur-dedie';
import { Minecraft } from './pages/produit/minecraft/minecraft';
import { Fivem } from './pages/produit/fivem/fivem';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'support', component: Support },
  {
    path: 'produit',
    component: ProduitLayout,
    children: [
      { path: '',              redirectTo: 'vps', pathMatch: 'full' },
      { path: 'vps',           component: Vps },
      { path: 'site-web',      component: SiteWeb },
      { path: 'serveur-dedie', component: ServeurDedie },
      { path: 'minecraft',     component: Minecraft },
      { path: 'fivem',         component: Fivem },
    ],
  },
  { path: '**', redirectTo: '' },
];
