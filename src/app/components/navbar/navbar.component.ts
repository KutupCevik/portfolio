import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
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
}
