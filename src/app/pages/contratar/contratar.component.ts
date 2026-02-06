import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PjiFlowService } from '../../services/pji-flow.service';

@Component({
  selector: 'app-contratar',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './contratar.component.html',
  styleUrls: ['./contratar.component.scss']
})
export class ContratarComponent implements OnInit {
  steps = [
    'Registro del cliente',
    'Confirmar plan',
    'Confirmar pago',
  ];

  currentStep = 1;

  constructor(private flow: PjiFlowService) {}

  ngOnInit() {
    this.flow.getStep().subscribe(step => {
      this.currentStep = step;
    });
  }
}

