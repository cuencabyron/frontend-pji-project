// Importa el decorador @Component y la estrategia de detección de cambios
import { Component, ChangeDetectionStrategy } from '@angular/core';
// Importa CommonModule (ngIf, ngFor, pipes básicos) y DecimalPipe (pipe para formatear números)
import { CommonModule, DecimalPipe } from '@angular/common';

// Define la forma (interface) que tendrá cada plan en el componente
interface Plan {
  nombre: string;                 // Nombre comercial del plan
  descripcion: string;            // Descripción corta del plan
  precio: number;                 // Precio en MXN por mes
  incluye: string[];              // Lista de características incluidas
  extrasMas?: number;             // Opcional: número para mostrar “+n características más”
  complementos?: string[];        // Opcional: lista de complementos extra a mostrar al final
  popular?: boolean;              // Opcional: marca si el plan es el “Más Popular”
  btnColor?: 'green' | 'dark';    // Opcional: variante de color del botón (verde claro u oscuro)
}

// Decorador que define el componente de Angular
@Component({
  selector: 'app-planes',                         // Nombre del selector para usar en la vista (<app-planes>)
  standalone: true,                               // Componente standalone (no requiere NgModule)
  imports: [CommonModule, DecimalPipe],           // Módulos/pipes que este componente puede usar en su template
  templateUrl: './planes.component.html',         // Ruta al archivo de plantilla HTML
  styleUrls: ['./planes.component.scss'],         // Ruta(s) a los estilos específicos del componente
  changeDetection: ChangeDetectionStrategy.OnPush // Estrategia de detección de cambios más performante
})
export class PlanesComponent {
  // Arreglo de planes que se usa en el *ngFor del template
  planes: Plan[] = [
    {
      nombre: 'Póliza Jurídica Digital',          // Nombre del primer plan
      descripcion: 'Protección esencial para tu arrendamiento con cobertura legal básica.',
      precio: 299.00,                            // Precio del plan en MXN
      incluye: [                                 // Lista de puntos que se muestran en “Incluye”
        'Falta de pago de renta',
        'Abandono de propiedad',
        'Devolución voluntaria'
      ],
      extrasMas: 2,                              // Se mostrará “+2 características más”
      complementos: [                            // Complementos extra listados al final de la tarjeta
        'Recuperación de Inmueble',
        'Asesoría Legal Avanzada',
        'Cobertura de Daños'
      ],
      btnColor: 'green'                          // El botón usará la variante verde (clara)
    },
    {
      nombre: 'Investigación Digital',           // Nombre del segundo plan
      descripcion: 'Cobertura ampliada con investigación y negociación de contrato.',
      precio: 499.00,
      incluye: [
        'Intervención si el inquilino se niega a salir',
        'Negociación de nuevo contrato',
        'Investigación de antecedentes'
      ],
      extrasMas: 3,                              // Se mostrará “+3 características más”
      popular: true,                             // Marca este plan como “Más Popular” (renderiza el badge y estilos)
      btnColor: 'dark'                           // El botón usará la variante oscura (plan destacado)
    },
    {
      nombre: 'Protección Total',                // Nombre del tercer plan
      descripcion: 'Máxima protección legal y financiera con cobertura integral.',
      precio: 799.00,
      incluye: [
        'Recuperación judicial de rentas y servicios',
        'Cobertura de daños a la propiedad',
        'Protección contra impago prolongado'
      ],
      extrasMas: 4,                              // Se mostrará “+4 características más”
      btnColor: 'green'                          // Botón en variante verde clara
    }
  ];
}
