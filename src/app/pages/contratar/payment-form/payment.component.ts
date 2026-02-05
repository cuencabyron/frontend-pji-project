import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
// Servicio de flujo (wizard) que guarda el estado entre pantallas
import { PjiFlowService } from '../../../services/pji-flow.service';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PagoComponent implements OnInit 
{
  productId: string | null = null;
  productName: string | null = null;
  state: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private readonly flow: PjiFlowService,    // Estado compartido del flujo
  ) {}

  ngOnInit(): void 
  {
    this.flow.setStep(3);
    this.productName = this.route.snapshot.queryParamMap.get('productName');
    this.state = this.route.snapshot.queryParamMap.get('state');
  }

  back() {
    // vuelve al paso anterior conservando productId
    this.router.navigate(['/contratar/product'], {
      queryParams: { productId: this.productId },
    });
  }

  pay() {
    // aquí luego conectas Stripe u otro
    alert(`Simulación: pagar plan=${this.productId} estado=${this.state}`);
  }
}