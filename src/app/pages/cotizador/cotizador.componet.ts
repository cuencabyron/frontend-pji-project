import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss'],
  imports: [CommonModule],
})
export class CotizadorComponent {
  pasoActual = 1;

  avanzarPaso() {
    if (this.pasoActual < 6) this.pasoActual++;
  }

  retrocederPaso() {
    if (this.pasoActual > 1) this.pasoActual--;
  }

  irAPaso(paso: number) {
    this.pasoActual = paso;
  }
}
