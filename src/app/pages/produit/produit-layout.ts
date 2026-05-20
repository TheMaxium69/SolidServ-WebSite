import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiLangService, TyroUiSubnav } from 'tyrolium-ui';

@Component({
  selector: 'app-produit-layout',
  imports: [TyroUiSubnav, RouterOutlet],
  template: `
    <div class="produit-wrapper">
      <tyro-ui-subnav [pages]="subnavPages()" [isFixed]="true" [havePlaceholder]="false"></tyro-ui-subnav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .produit-wrapper { margin-top: 63px; }
    @media (max-width: 768px) { .produit-wrapper { margin-top: 57px; } }
  `],
})
export class ProduitLayout {
  readonly lang = inject(TyroUiLangService).lang;

  public subnavPages = computed<ITyroUiNavbarPages[]>(() =>
    this.lang() === 'en'
      ? [
          { label: 'VPS',              link: '/produit/vps' },
          { label: 'Website Hosting',  link: '/produit/site-web' },
          { label: 'Dedicated Server', link: '/produit/serveur-dedie' },
          { label: 'Minecraft',        link: '/produit/minecraft' },
          { label: 'FiveM',            link: '/produit/fivem' },
        ]
      : [
          { label: 'VPS',             link: '/produit/vps' },
          { label: 'Hébergement Web', link: '/produit/site-web' },
          { label: 'Serveur Dédié',   link: '/produit/serveur-dedie' },
          { label: 'Minecraft',       link: '/produit/minecraft' },
          { label: 'FiveM',           link: '/produit/fivem' },
        ]
  );
}
