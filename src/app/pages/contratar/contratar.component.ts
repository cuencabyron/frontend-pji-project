import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PjiFlowService } from '../../services/pji-flow.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contratar',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './contratar.component.html',
  styleUrls: ['./contratar.component.scss'],

  animations: [
  trigger('fadeAnimation', [
    transition('* => *', [
      style({ opacity: 0 }),
      animate('300ms ease-in-out', style({ opacity: 1 }))
    ])
  ])
]
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

  prepareRoute(outlet: any) {
    return outlet?.activatedRouteData?.['animation'];
  }
}

