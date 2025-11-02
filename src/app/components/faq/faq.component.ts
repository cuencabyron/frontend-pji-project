import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Faq {
  pregunta: string;
  respuesta: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  // -1 = todas cerradas; 0 = abre la primera
  activeIndex = 0;

  // ATENCIÓN: NO uses la propiedad "abierta" en cada item.
  faqs: Faq[] = [
    {
      pregunta: '¿Qué pasa si mi inquilino no paga la renta?',
      respuesta:
        'Iniciamos de inmediato el proceso legal para recuperar rentas y, si es necesario, desocupar el inmueble. Nuestro equipo de abogados se encarga de todo.',
    },
    {
      pregunta: '¿La firma electrónica es legal?',
      respuesta:
        'Sí, la firma electrónica tiene validez legal y es utilizada en todos nuestros procesos.',
    },
    {
      pregunta: '¿Cuánto tarda la contratación?',
      respuesta:
        'El proceso es inmediato y 100% digital. En minutos puedes tener tu póliza.',
    },
  ];

  toggle(i: number) {
    // Abre la seleccionada y cierra las demás (acordeón)
    this.activeIndex = this.activeIndex === i ? -1 : i;
  }
}
