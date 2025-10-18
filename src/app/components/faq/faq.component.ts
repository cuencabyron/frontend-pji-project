import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Faq {
  pregunta: string;
  respuesta: string;
  abierta: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    {
      pregunta: '¿Qué pasa si mi inquilino no paga la renta?',
      respuesta: 'Iniciamos de inmediato el proceso legal para recuperar rentas y, si es necesario, desocupar el inmueble. Nuestro equipo de abogados se encarga de todo.',
      abierta: true
    },
    {
      pregunta: '¿La firma electrónica es legal?',
      respuesta: 'Sí, la firma electrónica tiene validez legal y es utilizada en todos nuestros procesos.',
      abierta: true
    },
    {
      pregunta: '¿Cuánto tarda la contratación?',
      respuesta: 'El proceso es inmediato y 100% digital. En minutos puedes tner tu poliza.',
      abierta: true
    }
  ];

  toggleFaq(index: number) {
    // Cierra todas, y abre/cierra la pulsada (comportamiento exclusivo)
    const wasOpen = this.faqs[index].abierta;
    this.faqs.forEach(f => (f.abierta = false));
    this.faqs[index].abierta = !wasOpen;
  }
}
