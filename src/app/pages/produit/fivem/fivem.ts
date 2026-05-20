import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';

export interface FivemOffer {
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
  selector: 'app-fivem',
  imports: [RouterLink, TyroUiCTA],
  templateUrl: './fivem.html',
  styleUrls: ['../produit-shared.css', './fivem.css'],
})
export class Fivem {
  readonly lang = inject(TyroUiLangService).lang;

  /* ── Modifiez les offres ici ── */
  readonly offers: FivemOffer[] = [
    {
      id: 'fivem-starter',
      name: 'Starter',
      icon: 'ri-steering-2-line',
      price: '9,99 €',
      period: '/mois',
      description: 'Pour une petite communauté RP qui démarre.',
      features: [
        '4 Go RAM dédiée',
        '32 slots joueurs',
        '30 Go SSD NVMe',
        'Panel Pterodactyl inclus',
        'OneSync Legacy',
        'Anti-DDoS inclus',
        'Sauvegardes automatiques',
      ],
    },
    {
      id: 'fivem-pro',
      name: 'Pro',
      icon: 'ri-steering-2-line',
      price: '19,99 €',
      period: '/mois',
      description: "L'offre idéale pour les serveurs RP établis.",
      features: [
        '8 Go RAM dédiée',
        '64 slots joueurs',
        '50 Go SSD NVMe',
        'Panel Pterodactyl inclus',
        'OneSync Infinity',
        'Anti-DDoS inclus',
        'Sauvegardes automatiques',
        'Sous-domaine solidserv.fr',
        'Support prioritaire',
      ],
      highlighted: true,
      badge: 'Populaire',
    },
    {
      id: 'fivem-business',
      name: 'Business',
      icon: 'ri-steering-2-line',
      price: '34,99 €',
      period: '/mois',
      description: "Pour les grandes communautés RP et les serveurs peuplés.",
      features: [
        '16 Go RAM dédiée',
        '128 slots joueurs',
        '100 Go SSD NVMe',
        'Panel Pterodactyl inclus',
        'OneSync Infinity',
        'Anti-DDoS inclus',
        'Sauvegardes automatiques',
        'Sous-domaine solidserv.fr',
        'Support prioritaire 24/7',
        'MySQL inclus',
      ],
    },
    {
      id: 'fivem-enterprise',
      name: 'Enterprise',
      icon: 'ri-steering-2-line',
      price: '59,99 €',
      period: '/mois',
      description: 'Puissance maximale pour les meilleurs serveurs RP FR.',
      features: [
        '32 Go RAM dédiée',
        '256 slots joueurs',
        '200 Go SSD NVMe',
        'Panel Pterodactyl inclus',
        'OneSync Infinity',
        'Anti-DDoS inclus',
        'Sauvegardes automatiques',
        'Sous-domaine solidserv.fr',
        'Support prioritaire 24/7',
        'MySQL inclus',
        'IP dédiée incluse',
        'SLA 99.9%',
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
