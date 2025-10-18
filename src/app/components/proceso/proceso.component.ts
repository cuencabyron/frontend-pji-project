import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Paso {
  titulo: string;
  descripcion: string;
  icon: 'poliza' | 'verificar' | 'escudo';
}

@Component({
  selector: 'app-proceso',
  standalone: true,
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProcesoComponent {
  pasos: Paso[] = [
    {
      titulo: 'Elige tu póliza',
      descripcion: 'Selecciona el plan idóneo y verifica la identidad de tu inquilino.',
      icon: 'poliza'
    },
    {
      titulo: 'Verificamos y firmamos',
      descripcion: 'Biometría facial, firma electrónica y buró de crédito en minutos.',
      icon: 'verificar'
    },
    {
      titulo: '¡Estás protegido!',
      descripcion: 'Nos encargamos de cualquier eventualidad legal.',
      icon: 'escudo'
    },
  ];
}
