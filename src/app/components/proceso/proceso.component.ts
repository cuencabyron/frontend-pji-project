import { Component } from '@angular/core';

@Component({
  selector: 'app-proceso',
  standalone: true,
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.scss']
})
export class ProcesoComponent {
  beneficios = [
    'Proceso 100% digital, seguro y eficiente.',
    'Planes claros, sin sorpresas.',
    'Biometría facial, firma electrónica y buró de crédito en minutos.',
    'Nos encargamos de cualquier eventualidad legal.'
  ];
}
