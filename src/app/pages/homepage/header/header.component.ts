import { Component, inject, ElementRef, ViewChild, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { TranslationService } from '../../../translation.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('image') imageElement!: ElementRef;

  constructor(public translateService: TranslateService, private renderer: Renderer2) {
  }

  translate = inject(TranslationService);

  languageDE(): boolean {
    return this.translateService.currentLang === 'de';
  }

  ngAfterViewInit(): void {
    this.setImageHeight(); // Setze die Bildhöhe beim Initialisieren
  }

  setImageHeight(): void {
    const image: HTMLImageElement = this.imageElement.nativeElement;
    image.onload = () => {
      const imageHeight = `${image.height / 2}px`; // Höhe des SVG-Bildes auslesen und als String setzen
      document.documentElement.style.setProperty('--imageHeight', imageHeight); // Setze den Wert der CSS-Variable
    };
    image.src = './../../../../assets/img/background/background-curve1.svg'; // Lade das SVG-Bild explizit
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.setImageHeight(); // Aktualisiere die Bildhöhe bei Änderungen der Fenstergröße
  }
}
