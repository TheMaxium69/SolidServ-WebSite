import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';

export interface MinecraftOffer {
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
  selector: 'app-minecraft',
  imports: [RouterLink, TyroUiCTA],
  templateUrl: './minecraft.html',
  styleUrls: ['../produit-shared.css', './minecraft.css'],
})
export class Minecraft {
  readonly lang = inject(TyroUiLangService).lang;

  private readonly offersFr: MinecraftOffer[] = [
    {
      id: 'mc-yellorite',
      name: 'Yellorite',
      icon: 'ri-gamepad-line',
      price: '3,99 €',
      period: '/mois',
      description: 'Parfait pour jouer entre amis ou tester votre serveur.',
      features: [
        '1 vCPU AMD Ryzen 7',
        '2 Go RAM dédiée',
        '15 Go SSD NVMe',
        'Panel Pterodactyl inclus',
        'Java & Bedrock',
        'Sauvegardes automatiques',
        'Anti-DDoS inclus',
      ],
    },
    {
      id: 'mc-amethys',
      name: 'Amethys',
      icon: 'ri-gamepad-line',
      price: '6,99 €',
      period: '/mois',
      description: "L'offre idéale pour une communauté active.",
      features: [
        '1 vCPU AMD Ryzen 7',
        '4 Go RAM dédiée',
        '30 Go SSD NVMe',
        'Panel Pterodactyl inclus',
        'Java & Bedrock',
        'Sauvegardes automatiques',
        'Anti-DDoS inclus',
        'Mods & plugins supportés',
        'Sous-domaine solidserv.fr',
      ],
      highlighted: true,
      badge: 'Populaire',
    },
    {
      id: 'mc-rhodonite',
      name: 'Rhodonite',
      icon: 'ri-gamepad-line',
      price: '12,99 €',
      period: '/mois',
      description: "Pour les serveurs moddés et les grandes communautés.",
      features: [
        '2 vCPU AMD Ryzen 7',
        '6 Go RAM dédiée',
        '45 Go SSD NVMe',
        'Panel Pterodactyl inclus',
        'Java & Bedrock',
        'Sauvegardes automatiques',
        'Anti-DDoS inclus',
        'Mods & plugins supportés',
        'Sous-domaine solidserv.fr',
        'Support prioritaire',
      ],
    },
    {
      id: 'mc-aventurium',
      name: 'Aventurium',
      icon: 'ri-gamepad-line',
      price: '24,99 €',
      period: '/mois',
      description: 'Puissance maximale pour les réseaux de serveurs.',
      features: [
        '4 vCPU AMD Ryzen 7',
        '8 Go RAM dédiée',
        '75 Go SSD NVMe',
        'Panel Pterodactyl inclus',
        'Java & Bedrock',
        'Sauvegardes automatiques',
        'Anti-DDoS inclus',
        'Mods & plugins supportés',
        'Sous-domaine solidserv.fr',
        'Support prioritaire 24/7',
        'Serveurs Bungee/Velocity inclus',
      ],
    },
  ];

  private readonly offersEn: MinecraftOffer[] = [
    {
      id: 'mc-yellorite',
      name: 'Yellorite',
      icon: 'ri-gamepad-line',
      price: '€3.99',
      period: '/month',
      description: 'Perfect for playing with friends or testing your server.',
      features: [
        '1 vCPU AMD Ryzen 7',
        '2 GB dedicated RAM',
        '15 GB NVMe SSD',
        'Pterodactyl panel included',
        'Java & Bedrock',
        'Automatic backups',
        'Anti-DDoS included',
      ],
    },
    {
      id: 'mc-amethys',
      name: 'Amethys',
      icon: 'ri-gamepad-line',
      price: '€6.99',
      period: '/month',
      description: 'The ideal plan for an active community.',
      features: [
        '1 vCPU AMD Ryzen 7',
        '4 GB dedicated RAM',
        '30 GB NVMe SSD',
        'Pterodactyl panel included',
        'Java & Bedrock',
        'Automatic backups',
        'Anti-DDoS included',
        'Mods & plugins supported',
        'solidserv.fr subdomain',
      ],
      highlighted: true,
      badge: 'Popular',
    },
    {
      id: 'mc-rhodonite',
      name: 'Rhodonite',
      icon: 'ri-gamepad-line',
      price: '€12.99',
      period: '/month',
      description: 'For modded servers and large communities.',
      features: [
        '2 vCPU AMD Ryzen 7',
        '6 GB dedicated RAM',
        '45 GB NVMe SSD',
        'Pterodactyl panel included',
        'Java & Bedrock',
        'Automatic backups',
        'Anti-DDoS included',
        'Mods & plugins supported',
        'solidserv.fr subdomain',
        'Priority support',
      ],
    },
    {
      id: 'mc-aventurium',
      name: 'Aventurium',
      icon: 'ri-gamepad-line',
      price: '€24.99',
      period: '/month',
      description: 'Maximum power for server networks.',
      features: [
        '4 vCPU AMD Ryzen 7',
        '8 GB dedicated RAM',
        '75 GB NVMe SSD',
        'Pterodactyl panel included',
        'Java & Bedrock',
        'Automatic backups',
        'Anti-DDoS included',
        'Mods & plugins supported',
        'solidserv.fr subdomain',
        'Priority support 24/7',
        'Bungee/Velocity servers included',
      ],
    },
  ];

  get offers(): MinecraftOffer[] {
    return this.lang() === 'en' ? this.offersEn : this.offersFr;
  }

  scrollToOffres() {
    const el = document.getElementById('offres');
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth' });
    }
  }
}
