import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TyroUiCTA, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly lang = inject(TyroUiLangService).lang;
}
