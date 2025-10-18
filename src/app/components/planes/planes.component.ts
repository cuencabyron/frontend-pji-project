import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DecimalPipe, NgForOf, NgIf } from '@angular/common';

interface Plan {
  nombre: string;
  descripcion: string;
  precio: number;        // MXN por mes
  incluye: string[];
  extrasMas?: number;    // para el texto “+n características más”
  complementos?: string[]; // aparece al final en la tarjeta (ej. plan 1)
  popular?: boolean;
  btnColor?: 'green' | 'dark';
}

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule, NgForOf, NgIf, DecimalPipe],
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PlanesComponent {
  planes: Plan[] = [
    {
      nombre: 'Póliza Jurídica Digital',
      descripcion: 'Protección esencial para tu arrendamiento con cobertura legal básica.',
      precio: 299.00,
      incluye: [
        'Falta de pago de renta',
        'Abandono de propiedad',
        'Devolución voluntaria'
      ],
      extrasMas: 2,
      complementos: [
        'Recuperación de Inmueble',
        'Asesoría Legal Avanzada',
        'Cobertura de Daños'
      ],
      btnColor: 'green'
    },
    {
      nombre: 'Investigación Digital',
      descripcion: 'Cobertura ampliada con investigación y negociación de contrato.',
      precio: 499.00,
      incluye: [
        'Intervención si el inquilino se niega a salir',
        'Negociación de nuevo contrato',
        'Investigación de antecedentes'
      ],
      extrasMas: 3,
      popular: true,
      btnColor: 'dark'
    },
    {
      nombre: 'Protección Total',
      descripcion: 'Máxima protección legal y financiera con cobertura integral.',
      precio: 799.00,
      incluye: [
        'Recuperación judicial de rentas y servicios',
        'Cobertura de daños a la propiedad',
        'Protección contra impago prolongado'
      ],
      extrasMas: 4,
      btnColor: 'green'
    }
  ];
}