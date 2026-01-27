import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

interface Plan {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  incluye: string[];
  extrasMas?: number;
  complementos?: string[];
  popular?: boolean;
  btnColor?: 'green' | 'dark';
}

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanesComponent implements OnInit {
  planes: Plan[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.cargarPlanesDesdeApi();
  }

  private cargarPlanesDesdeApi(): void 
  {
    this.loading = true;
    this.error = null;

    this.productService.getAll().subscribe({
      next: (products: Product[]) => {
        this.planes = products.map((p: Product, index: number) => this.mapProductToPlan(p, index));
        this.loading = false;
      },
      error: (err: unknown) => {
        console.error('Error cargando products', err);
        this.error = 'No se pudieron cargar los planes.';
        this.loading = false;
      },
    });
  }

  private mapProductToPlan(product: Product, index: number): Plan {
    return {
      id: product.product_id,
      nombre: product.name,
      descripcion: product.description,
      precio: Number(product.min_monthly_rent ?? product.max_monthly_rent ?? 0),
      incluye: [
        'Cobertura base del plan',
        'Asesoría legal',
        'Soporte especializado',
      ],
      extrasMas: 2,
      complementos: ['Complemento 1', 'Complemento 2'],
      popular: index === 1,
      btnColor: index === 1 ? 'dark' : 'green',
    };
  }

  seleccionarPlan(plan: Plan): void {
    // Aquí decides qué hacer con el plan seleccionado:
    // navegar al siguiente paso, guardar en un servicio, etc.
    this.router.navigate(['/registro-basico'], {
      queryParams: { productId: plan.id },
    });

    // Si quieres ver que funciona, puedes dejar temporalmente:
    // console.log('Plan seleccionado', plan);
  }
}