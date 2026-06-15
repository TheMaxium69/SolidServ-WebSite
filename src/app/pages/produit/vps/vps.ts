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

  private readonly offersFr: VpsOffer[] = [
    {
      id: 'vps-1',
      name: 'VPS-1',
      icon: 'ri-cpu-line',
      price: '3,99 €',
      period: '/mois',
      description: 'Idéal pour démarrer un projet, un blog ou un site vitrine.',
      features: [
        '1 vCPU AMD Ryzen 7',
        '2 Go RAM DDR4',
        '50 Go NVMe SSD',
        '1 Gbps de bande passante',
        '1 adresse IPv4 dédiée',
        'Anti-DDoS inclus',
        'Accès SSH',
      ],
    },
    {
      id: 'vps-2',
      name: 'VPS-2',
      icon: 'ri-cpu-line',
      price: '8,99 €',
      period: '/mois',
      description: 'La référence pour applications web et petits serveurs de jeux.',
      features: [
        '2 vCPU AMD Ryzen 7',
        '4 Go RAM DDR4',
        '100 Go NVMe SSD',
        '1 Gbps de bande passante',
        '1 adresse IPv4 dédiée',
        'Anti-DDoS inclus',
        'Accès SSH',
        'Snapshots inclus',
      ],
      highlighted: true,
      badge: 'Populaire',
    },
    {
      id: 'vps-4',
      name: 'VPS-4',
      icon: 'ri-cpu-line',
      price: '11,99 €',
      period: '/mois',
      description: 'Pour les applications exigeantes et serveurs de jeux avancés.',
      features: [
        '4 vCPU AMD Ryzen 7',
        '8 Go RAM DDR4',
        '150 Go NVMe SSD',
        '1 Gbps de bande passante',
        '1 adresse IPv4 dédiée',
        'Anti-DDoS inclus',
        'Accès SSH',
        'Snapshots inclus',
        'Support prioritaire',
      ],
    },
    {
      id: 'vps-8',
      name: 'VPS-8',
      icon: 'ri-cpu-line',
      price: '25,99 €',
      period: '/mois',
      description: 'Puissance maximale pour les projets à fort trafic.',
      features: [
        '8 vCPU AMD Ryzen 7',
        '16 Go RAM DDR4',
        '250 Go NVMe SSD',
        '1 Gbps de bande passante',
        '2 adresse IPv4 dédiée',
        'Anti-DDoS inclus',
        'Accès SSH',
        'Snapshots inclus',
        'Support prioritaire 24/7',
        'SLA 99.99%',
      ],
    },
  ];

  private readonly offersEn: VpsOffer[] = [
    {
      id: 'vps-1',
      name: 'VPS-1',
      icon: 'ri-cpu-line',
      price: '€3.99',
      period: '/month',
      description: 'Ideal to start a project, a blog or a showcase website.',
      features: [
        '1 vCPU AMD Ryzen 7',
        '2 GB RAM DDR4',
        '50 GB NVMe SSD',
        '1 Gbps bandwidth',
        '1 dedicated IPv4 address',
        'Anti-DDoS included',
        'SSH access',
      ],
    },
    {
      id: 'vps-2',
      name: 'VPS-2',
      icon: 'ri-cpu-line',
      price: '€8.99',
      period: '/month',
      description: 'The go-to for web applications and small game servers.',
      features: [
        '2 vCPU AMD Ryzen 7',
        '4 GB RAM DDR4',
        '100 GB NVMe SSD',
        '1 Gbps bandwidth',
        '1 dedicated IPv4 address',
        'Anti-DDoS included',
        'SSH access',
        'Snapshots included',
      ],
      highlighted: true,
      badge: 'Popular',
    },
    {
      id: 'vps-4',
      name: 'VPS-4',
      icon: 'ri-cpu-line',
      price: '€11.99',
      period: '/month',
      description: 'For demanding applications and advanced game servers.',
      features: [
        '4 vCPU AMD Ryzen 7',
        '8 GB RAM DDR4',
        '150 GB NVMe SSD',
        '1 Gbps bandwidth',
        '1 dedicated IPv4 address',
        'Anti-DDoS included',
        'SSH access',
        'Snapshots included',
        'Priority support',
      ],
    },
    {
      id: 'vps-8',
      name: 'VPS-8',
      icon: 'ri-cpu-line',
      price: '€25.99',
      period: '/month',
      description: 'Maximum power for high-traffic projects.',
      features: [
        '8 vCPU AMD Ryzen 7',
        '16 GB RAM DDR4',
        '250 GB NVMe SSD',
        '1 Gbps bandwidth',
        '2 dedicated IPv4 addresses',
        'Anti-DDoS included',
        'SSH access',
        'Snapshots included',
        'Priority support 24/7',
        'SLA 99.99%',
      ],
    },
  ];

  get offers(): VpsOffer[] {
    return this.lang() === 'en' ? this.offersEn : this.offersFr;
  }

  scrollToOffres() {
    const el = document.getElementById('offres');
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth' });
    }
  }
}
