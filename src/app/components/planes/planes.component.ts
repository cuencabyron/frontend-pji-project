import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent {
  planes = [
    {
      nombre: 'Plan Básico',
      precio: 'MXN $499',
      beneficios: [
        'Asesoría legal básica',
        'Verificación de inquilino',
        'Firma de contrato digital'
      ],
      destacado: false
    },
    {
      nombre: 'Plan Estándar',
      precio: 'MXN $799',
      beneficios: [
        'Cobertura jurídica completa',
        'Seguimiento de pagos',
        'Representación en juicio'
      ],
      destacado: true
    },
    {
      nombre: 'Plan Premium',
      precio: 'MXN $1,199',
      beneficios: [
        'Cobertura total',
        'Defensa completa en caso de conflicto',
        'Atención prioritaria 24/7'
      ],
      destacado: false
    }
  ];
}
