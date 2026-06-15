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

  private readonly offersFr: ServeurDedieOffer[] = [
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

  private readonly offersEn: ServeurDedieOffer[] = [
    {
      id: 'dedi-entry',
      name: 'Entry',
      icon: 'ri-hard-drive-2-line',
      price: '€49.99',
      period: '/month',
      description: 'Entry-level dedicated server for web hosting and apps.',
      features: [
        'AMD Ryzen 5 3600 (6c/12t)',
        '32 GB RAM DDR4',
        '2 × 500 GB NVMe SSD',
        '1 Gbps bandwidth',
        '1 dedicated IPv4 address',
        '/27 IPv6 block',
        'Anti-DDoS included',
        'IPMI / KVM included',
        'Support 24/7',
      ],
    },
    {
      id: 'dedi-pro',
      name: 'Pro',
      icon: 'ri-hard-drive-2-line',
      price: '€89.99',
      period: '/month',
      description: 'The best performance/price ratio for your ambitious projects.',
      features: [
        'AMD Ryzen 7 5800X (8c/16t)',
        '64 GB RAM DDR4',
        '2 × 1 TB NVMe SSD',
        '1 Gbps bandwidth',
        '2 dedicated IPv4 addresses',
        '/27 IPv6 block',
        'Anti-DDoS included',
        'IPMI / KVM included',
        'Priority support 24/7',
        'SLA 99.9%',
      ],
      highlighted: true,
      badge: 'Recommended',
    },
    {
      id: 'dedi-elite',
      name: 'Elite',
      icon: 'ri-hard-drive-2-line',
      price: '€149.99',
      period: '/month',
      description: 'Ultimate power for very high-traffic applications.',
      features: [
        'AMD Ryzen 9 5950X (16c/32t)',
        '128 GB RAM DDR4',
        '2 × 2 TB NVMe SSD',
        '10 Gbps bandwidth',
        '4 dedicated IPv4 addresses',
        '/24 IPv6 block',
        'Anti-DDoS included',
        'IPMI / KVM included',
        'Priority support 24/7',
        'SLA 99.99%',
        'IP Failover included',
      ],
    },
  ];

  get offers(): ServeurDedieOffer[] {
    return this.lang() === 'en' ? this.offersEn : this.offersFr;
  }

  scrollToOffres() {
    const el = document.getElementById('offres');
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth' });
    }
  }
}
