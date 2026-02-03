import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.dto';

type BtnColor = 'green' | 'dark';

interface PlanCard {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  incluye: string[];
  extrasMas?: number;
  popular?: boolean;
  btnColor?: BtnColor;
}

const PLAN_UI: Record<string, { incluye: string[]; extrasMas?: number }> = {
  Esencial: {
    incluye: [
      'Intervención extrajudicial al primer atraso',
      'Intervención judicial al segundo mes de atraso',
      'Recuperación de inmueble por abandono',
      'Recuperación de inmueble por entrega voluntaria',
    ],
    extrasMas: 3,
  },
  Premium: {
    incluye: [
      'Todos los beneficios de Esencial',
      'Intervención al término del contrato',
      'Recuperación por negativa a entregar inmueble',
      'Recuperación por negativa a salir del inmueble',
    ],
    extrasMas: 3,
  },
  Diamante: {
    incluye: [
      'Todos los beneficios de Esencial y Premium',
      'Recuperación contenciosa en juicio',
      'Cobro de rentas vencidas',
      'Cobro de servicios pendientes',
    ],
    extrasMas: 4,
  },
};

@Component({
  selector: 'app-estado-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estado-plan.component.html',
  styleUrls: ['./estado-plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadoPlanComponent implements OnInit {
  planes: PlanCard[] = [];
  loading = false;
  error: string | null = null;

  // Selecciones del usuario
  selectedProductId: string | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    // Si venías con productId desde /registro-basico, lo precargamos (opcional)
    this.selectedProductId = this.route.snapshot.queryParamMap.get('productId');

    this.cargarPlanes();
  }

  private cargarPlanes(): void {
    this.loading = true;
    this.error = null;
    this.cdr.markForCheck();

    this.productService.getAll().subscribe({
      next: (products: Product[]) => {
        this.planes = products.map((p, index) => {
          const ui = PLAN_UI[p.name] ?? { incluye: [], extrasMas: undefined };

          return {
            id: p.product_id,
            nombre: p.name,
            descripcion: p.description,
            precio: Number(p.min_monthly_rent ?? p.max_monthly_rent ?? 0),
            incluye: ui.incluye ?? [],
            extrasMas: ui.extrasMas,
            popular: p.name === 'Premium' || index === 1,
            btnColor: (p.name === 'Premium' || index === 1) ? 'dark' : 'green',
          };
        });

        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err: unknown) => {
        console.error(err);
        this.error = 'No se pudieron cargar los planes.';
        this.loading = false;
        this.cdr.markForCheck();
      },
    });
  }

  seleccionarPlan(planId: string): void {
    this.selectedProductId = planId;
    this.cdr.markForCheck();
  }

  anterior(): void {
    this.router.navigate(['/contratar/registro-basico'], {
      queryParams: { productId: this.selectedProductId },
    });
  }

  siguiente(): void {
    if (!this.selectedProductId) return;

    this.router.navigate(['/contratar/pago'], {
      queryParams: {
        productId: this.selectedProductId,
      },
    });
  }
}