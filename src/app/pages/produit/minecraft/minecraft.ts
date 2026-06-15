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

  /* ── Modifiez les offres ici ── */
  readonly offers: MinecraftOffer[] = [
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

  scrollToOffres() {
    const el = document.getElementById('offres');
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth' });
    }
  }
}
