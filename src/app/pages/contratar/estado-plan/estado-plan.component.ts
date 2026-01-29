import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estado-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estado-plan.component.html',
  styleUrls: ['./estado-plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadoPlanComponent implements OnInit {
  productId: string | null = null;

  // simulación (luego lo conectamos a datos reales)
  selectedState: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.queryParamMap.get('productId');
    // si no viene productId, igual no tronamos, pero no dejamos avanzar
  }

  selectState(state: string) {
    this.selectedState = state;
  }

  back() {
    this.router.navigate(['/planes']);
  }

  next() {
    if (!this.productId || !this.selectedState) return;

    this.router.navigate(['/contratar/pago'], {
      queryParams: { productId: this.productId, state: this.selectedState },
    });
  }
}