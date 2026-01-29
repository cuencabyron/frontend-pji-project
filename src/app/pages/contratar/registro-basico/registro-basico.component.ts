import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-basico',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-basico.component.html',
  styleUrls: ['./registro-basico.component.scss'],
})
export class RegistroBasicoComponent implements OnInit {
  productId: string | null = null;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.queryParamMap.get('productId');
    console.log('productId:', this.productId);

    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  cancelar(): void {
    this.router.navigate(['/planes']);
  }

  siguiente(): void {
    if (this.form.invalid || !this.productId) return;

    this.router.navigate(['/contratar/estado-plan'], {
      queryParams: { productId: this.productId },
    });
  }

  // helpers para template (evitan el problema de f.nombre)
  get nombreCtrl() { return this.form.get('nombre'); }
  get telefonoCtrl() { return this.form.get('telefono'); }
  get emailCtrl() { return this.form.get('email'); }
  get passwordCtrl() { return this.form.get('password'); }
}