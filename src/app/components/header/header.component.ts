import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Ajusta el umbral a tu gusto (px)
    this.scrolled = window.scrollY > 80;
  }
}
