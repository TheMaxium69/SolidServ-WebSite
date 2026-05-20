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
      id: 'mc-creeper',
      name: 'Creeper',
      icon: 'ri-gamepad-line',
      price: '4,99 €',
      period: '/mois',
      description: 'Parfait pour jouer entre amis ou tester votre serveur.',
      features: [
        '2 Go RAM dédiée',
        "Jusqu'à 10 joueurs",
        '10 Go SSD NVMe',
        'Panel Pterodactyl inclus',
        'Java & Bedrock',
        'Sauvegardes automatiques',
        'Anti-DDoS inclus',
      ],
    },
    {
      id: 'mc-enderman',
      name: 'Enderman',
      icon: 'ri-gamepad-line',
      price: '9,99 €',
      period: '/mois',
      description: "L'offre idéale pour une communauté active.",
      features: [
        '4 Go RAM dédiée',
        "Jusqu'à 40 joueurs",
        '25 Go SSD NVMe',
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
      id: 'mc-dragon',
      name: 'Dragon',
      icon: 'ri-gamepad-line',
      price: '19,99 €',
      period: '/mois',
      description: "Pour les serveurs moddés et les grandes communautés.",
      features: [
        '8 Go RAM dédiée',
        "Jusqu'à 100 joueurs",
        '50 Go SSD NVMe',
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
      id: 'mc-wither',
      name: 'Wither',
      icon: 'ri-gamepad-line',
      price: '39,99 €',
      period: '/mois',
      description: 'Puissance maximale pour les réseaux de serveurs.',
      features: [
        '16 Go RAM dédiée',
        "Jusqu'à 250 joueurs",
        '100 Go SSD NVMe',
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
