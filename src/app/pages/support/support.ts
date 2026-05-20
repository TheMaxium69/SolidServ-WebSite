import { Component, inject } from '@angular/core';
import { TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-support',
  imports: [],
  templateUrl: './support.html',
  styleUrl: './support.css',
})
export class Support {
  readonly lang = inject(TyroUiLangService).lang;
}
