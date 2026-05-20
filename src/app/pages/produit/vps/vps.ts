import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';

export interface VpsOffer {
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
  selector: 'app-vps',
  imports: [RouterLink, TyroUiCTA],
  templateUrl: './vps.html',
  styleUrls: ['../produit-shared.css', './vps.css'],
})
export class Vps {
  readonly lang = inject(TyroUiLangService).lang;

  /* ── Modifiez les offres ici ── */
  readonly offers: VpsOffer[] = [
    {
      id: 'vps-1',
      name: 'VPS-1',
      icon: 'ri-cpu-line',
      price: '4,99 €',
      period: '/mois',
      description: 'Idéal pour démarrer un projet, un blog ou un site vitrine.',
      features: [
        '1 vCPU AMD EPYC',
        '2 Go RAM DDR4',
        '25 Go NVMe SSD',
        '1 Gbps de bande passante',
        '1 adresse IPv4 dédiée',
        'Anti-DDoS inclus',
        'Accès SSH root',
      ],
    },
    {
      id: 'vps-2',
      name: 'VPS-2',
      icon: 'ri-cpu-line',
      price: '9,99 €',
      period: '/mois',
      description: 'La référence pour applications web et petits serveurs de jeux.',
      features: [
        '2 vCPU AMD EPYC',
        '4 Go RAM DDR4',
        '50 Go NVMe SSD',
        '1 Gbps de bande passante',
        '1 adresse IPv4 dédiée',
        'Anti-DDoS inclus',
        'Accès SSH root',
        'Snapshots inclus',
      ],
      highlighted: true,
      badge: 'Populaire',
    },
    {
      id: 'vps-4',
      name: 'VPS-4',
      icon: 'ri-cpu-line',
      price: '19,99 €',
      period: '/mois',
      description: 'Pour les applications exigeantes et serveurs de jeux avancés.',
      features: [
        '4 vCPU AMD EPYC',
        '8 Go RAM DDR4',
        '100 Go NVMe SSD',
        '1 Gbps de bande passante',
        '1 adresse IPv4 dédiée',
        'Anti-DDoS inclus',
        'Accès SSH root',
        'Snapshots inclus',
        'Support prioritaire',
      ],
    },
    {
      id: 'vps-8',
      name: 'VPS-8',
      icon: 'ri-cpu-line',
      price: '39,99 €',
      period: '/mois',
      description: 'Puissance maximale pour les projets à fort trafic.',
      features: [
        '8 vCPU AMD EPYC',
        '16 Go RAM DDR4',
        '200 Go NVMe SSD',
        '10 Gbps de bande passante',
        '2 adresses IPv4 dédiées',
        'Anti-DDoS inclus',
        'Accès SSH root',
        'Snapshots inclus',
        'Support prioritaire 24/7',
        'SLA 99.99%',
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
