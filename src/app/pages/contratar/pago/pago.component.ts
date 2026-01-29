import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PagoComponent implements OnInit 
{
  productId: string | null = null;
  state: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.queryParamMap.get('productId');
    this.state = this.route.snapshot.queryParamMap.get('state');
  }

  back() {
    // vuelve al paso anterior conservando productId
    this.router.navigate(['/contratar/estado-plan'], {
      queryParams: { productId: this.productId },
    });
  }

  pay() {
    // aquí luego conectas Stripe u otro
    alert(`Simulación: pagar plan=${this.productId} estado=${this.state}`);
  }
}