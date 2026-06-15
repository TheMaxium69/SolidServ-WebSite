import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';

export interface SiteWebOffer {
  id: string;
  name: string;
  icon: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

@Component({
  selector: 'app-site-web',
  imports: [RouterLink, TyroUiCTA],
  templateUrl: './site-web.html',
  styleUrls: ['../produit-shared.css', './site-web.css'],
})
export class SiteWeb {
  readonly lang = inject(TyroUiLangService).lang;

  /* ── Modifiez les offres ici ── */
  readonly offers: SiteWebOffer[] = [
    {
      id: 'cloud-1',
      name: 'Cloud-1',
      icon: 'ri-global-line',
      price: '3,99 €',
      period: '/mois',
      description: 'Parfait pour un site personnel ou un blog.',
      features: [
        '1 site web',
        '5 Go espace disque SSD',
        'Bande passante illimitée',
        'Certificat SSL gratuit',
        '1 adresses email',
        'cPanel inclus',
        'Support 24/7',
      ],
    },
    {
      id: 'cloud-2',
      name: 'Cloud-2',
      icon: 'ri-global-line',
      price: '6,99 €',
      period: '/mois',
      description: "L'offre équilibrée pour les professionnels et PME.",
      features: [
        '5 sites web',
        '20 Go espace disque SSD',
        'Bande passante illimitée',
        'Certificat SSL gratuit',
        '5 adresses email',
        'cPanel inclus',
        'Support 24/7',
        'Sauvegardes quotidiennes',
        'Base de données MySQL illimitées',
      ],
      highlighted: true,
      badge: 'Populaire',
    },
    {
      id: 'cloud-3',
      name: 'Cloud-3',
      icon: 'ri-global-line',
      price: '14,99 €',
      period: '/mois',
      description: "Puissance maximale pour les agences et e-commerce.",
      features: [
        '30 sites web',
        '150 Go espace disque SSD',
        'Bande passante illimitée',
        'Certificat SSL gratuit',
        '20 adresses email',
        'cPanel inclus',
        'Support prioritaire 24/7',
        'Sauvegardes quotidiennes',
        'Base de données MySQL illimitées',
        'PHP 8.x & Node.js',
        'CDN inclus',
      ],
    },
  ];

  scrollToOffres() {
    const el = document.getElementById('offres');
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth' });
    }
  }
}
