import { Component, inject } from '@angular/core';
import { PrivacyPoliceComponent } from '../privacy-police/privacy-police.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [PrivacyPoliceComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  translate = inject(TranslationService);
}
