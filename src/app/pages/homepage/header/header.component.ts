import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { TranslationService } from '../../../translation.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public translateService: TranslateService) {
  }

  translate = inject(TranslationService);

  languageDE(): boolean {
    return this.translateService.currentLang === 'de';
  }
}
