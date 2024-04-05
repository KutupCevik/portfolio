import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { PrivacyPoliceComponent } from './legal/privacy-police/privacy-police.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy', component: PrivacyPoliceComponent },
];