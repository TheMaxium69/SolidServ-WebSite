import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';

export interface ServeurDedieOffer {
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
  selector: 'app-serveur-dedie',
  imports: [RouterLink, TyroUiCTA],
  templateUrl: './serveur-dedie.html',
  styleUrls: ['../produit-shared.css', './serveur-dedie.css'],
})
export class ServeurDedie {
  readonly lang = inject(TyroUiLangService).lang;

  /* ── Modifiez les offres ici ── */
  readonly offers: ServeurDedieOffer[] = [
    {
      id: 'dedi-entry',
      name: 'Entry',
      icon: 'ri-hard-drive-2-line',
      price: '49,99 €',
      period: '/mois',
      description: 'Serveur dédié entrée de gamme pour hébergement web et apps.',
      features: [
        'AMD Ryzen 5 3600 (6c/12t)',
        '32 Go RAM DDR4',
        '2 × 500 Go NVMe SSD',
        '1 Gbps de bande passante',
        '1 adresse IPv4 dédiée',
        '/27 bloc IPv6',
        'Anti-DDoS inclus',
        'IPMI / KVM inclus',
        'Support 24/7',
      ],
    },
    {
      id: 'dedi-pro',
      name: 'Pro',
      icon: 'ri-hard-drive-2-line',
      price: '89,99 €',
      period: '/mois',
      description: 'Le meilleur rapport performance/prix pour vos projets ambitieux.',
      features: [
        'AMD Ryzen 7 5800X (8c/16t)',
        '64 Go RAM DDR4',
        '2 × 1 To NVMe SSD',
        '1 Gbps de bande passante',
        '2 adresses IPv4 dédiées',
        '/27 bloc IPv6',
        'Anti-DDoS inclus',
        'IPMI / KVM inclus',
        'Support prioritaire 24/7',
        'SLA 99.9%',
      ],
      highlighted: true,
      badge: 'Recommandé',
    },
    {
      id: 'dedi-elite',
      name: 'Elite',
      icon: 'ri-hard-drive-2-line',
      price: '149,99 €',
      period: '/mois',
      description: 'Puissance ultime pour les applications à très fort trafic.',
      features: [
        'AMD Ryzen 9 5950X (16c/32t)',
        '128 Go RAM DDR4',
        '2 × 2 To NVMe SSD',
        '10 Gbps de bande passante',
        '4 adresses IPv4 dédiées',
        '/24 bloc IPv6',
        'Anti-DDoS inclus',
        'IPMI / KVM inclus',
        'Support prioritaire 24/7',
        'SLA 99.99%',
        'IP Failover inclus',
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
