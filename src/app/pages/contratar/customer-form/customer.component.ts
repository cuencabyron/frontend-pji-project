import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../../services/customer.service'; 
import { PjiFlowService } from '../../../services/pji-flow.service'; 

@Component({
  selector: 'app-registro-basico',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class RegistroBasicoComponent implements OnInit {
  productId: string | null = null;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private readonly flow: PjiFlowService,
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.queryParamMap.get('productId');
    console.log('productId:', this.productId);

    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(13)]],
      direccion: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }

  siguiente(): void 
  {
    if (this.form.invalid || !this.productId) return;

    const dto = {
      name: this.form.value.nombre,
      phone: this.form.value.telefono,
      email: this.form.value.email,
      address: this.form.value.direccion,
    };

    this.customerService.create(dto).subscribe({
      next: (created) => {
        this.flow.setCustomer({
          fullName: created.name,
          phone: created.phone,
          email: created.email,
          address: created.address,
        });

        // navegar al siguiente paso enviando customerId
        this.router.navigate(['/contratar/product'], {
          queryParams: { productId: this.productId, customerId: created.customer_id },
        });
      },
      error: (err) => {
        console.error(err);
        // mostrar un mensaje en UI
        // ejemplo: this.error = 'No se pudo guardar el cliente';
      },
    });

    this.router.navigate(['/contratar/product'], {
      queryParams: { productId: this.productId },
    });
  }

  // helpers para template (evitan el problema de f.nombre)
  get nombreCtrl() { return this.form.get('nombre'); }
  get telefonoCtrl() { return this.form.get('telefono'); }
  get emailCtrl() { return this.form.get('email'); }
  get direccionCtrl() { return this.form.get('direccion'); }
}