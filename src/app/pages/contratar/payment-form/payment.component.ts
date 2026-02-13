import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
// Servicio de flujo (wizard) que guarda el estado entre pantallas
import { PjiFlowService } from '../../../services/pji-flow.service';
// Importa utilidades para formularios reactivos:
// - FormBuilder: facilita la creación del formulario
// - FormGroup: representa el formulario completo
// - Validators: validaciones síncronas (required, email, minLength, etc.)
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// Servicio encargado de crear clientes en el backend
import { PaymentService } from '../../../services/payment.service';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PagoComponent implements OnInit 
{
  productId: string | null = null;
  productName: string | null = null;
  // Formulario reactivo para capturar los datos del cliente
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,           // Construcción del formulario
    private route: ActivatedRoute, 
    private router: Router,
    private readonly flow: PjiFlowService,    // Estado compartido del flujo
  ) {}

  ngOnInit(): void 
  {
    this.flow.setStep(3);
    this.productName = this.route.snapshot.queryParamMap.get('productName');
    // Inicializa el formulario reactivo con validaciones
    this.form = this.fb.group({
      titular: ['', [Validators.required, Validators.minLength(16)]],
      cardNumber: ['', [Validators.required, Validators.minLength(16)]],
      exp: ['', Validators.required],
      cvv: ['', Validators.required],
      bank: ['', Validators.required],
    });

  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;

    // quitar todo lo que no sea número
    let value = input.value.replace(/\D/g, '');

    // limitar a 16 dígitos
    value = value.substring(0, 16);

    // agregar espacio cada 4 números
    const formatted = value.replace(/(.{4})/g, '$1 ').trim();

    // actualizar input visualmente
    input.value = formatted;

    // actualizar form control SIN disparar loop
    this.form.get('cardNumber')?.setValue(formatted, { emitEvent: false });
  }

  back() {
    // vuelve al paso anterior conservando productId
    this.router.navigate(['/contratar/product'], {
      queryParams: { productId: this.productId },
    });
  }

  pay() 
  {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    
     // Simulación tipo Stripe
    setTimeout(() => {
      alert('Pago procesado exitosamente con Stripe');
      // aquí puedes redirigir
      // this.router.navigate(['/success']);
    }, 1500);
    

    // Construye el DTO esperado por el backend
    const dto = {
      amount: this.form.value.nombre,
      method: this.form.value.telefono,
      status: this.form.value.email,
      address: this.form.value.direccion,
    };

    /* Llama al backend para crear el cliente
    this.paymentService.create(dto).subscribe({
      next: (created) => {
        
    })*/
    
  }

  // Getters de conveniencia para el template.
  // Permiten escribir: nombreCtrl?.invalid en lugar de form.get('nombre')?.invalid
  get titularCtrl() {
    return this.form.get('titular');
  }

  get cardNumberCtrl() {
    return this.form.get('cardNumber');
  }

  get expCtrl() {
    return this.form.get('exp');
  }

  get cvvCtrl() {
    return this.form.get('cvv');
  }

  get bank() {
    return this.form.get('bank');
  }
}