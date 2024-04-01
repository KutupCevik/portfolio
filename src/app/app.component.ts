import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { PrivacyPoliceComponent } from './legal/privacy-police/privacy-police.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomepageComponent, FooterComponent, ImprintComponent, PrivacyPoliceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
