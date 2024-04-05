import { Component } from '@angular/core';
import { PrivacyPoliceComponent } from '../privacy-police/privacy-police.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [PrivacyPoliceComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
