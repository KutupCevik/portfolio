import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    @ViewChild('checkbox') checkbox!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    // Jetzt ist die ViewChild-Referenz initialisiert
  }

  screenWidth: number = window.innerWidth;

  constructor(public translateService: TranslateService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  translate = inject(TranslationService);

  switchLanguage() {
    if (this.translateService.currentLang == "de") {
      this.translateService.use('en');
    } else {
      this.translateService.use('de');
    }
  }

  toggleCheckbox(event: Event): void {
    if (this.checkbox) {
      const checkboxElement = this.checkbox.nativeElement;
      checkboxElement.checked = !checkboxElement.checked; // Ändert den Zustand der Checkbox
    }
  }
}
