import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  translate = inject(TranslationService);

  constructor(public translateService: TranslateService) {
  }

  projects = [
    {
      name: 'Join',
      technologie: ['JavaScript', 'HTML', 'CSS'],
      img: './../../../../assets/img/projects/join.png',
      descriptionEN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionDE: 'Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
      liveTest: 'https://join.kutupcevik.com/',
      gitHub: 'https://github.com/KutupCevik/join'
    },
    {
      name: 'Talon\'s Odyssey',
      technologie: ['JavaScript', 'HTML', 'CSS'],
      img: './../../../../assets/img/projects/odyssey.png',
      descriptionEN: 'A simple jump-and-run game based on an object-oriented approach. Talon collects coins and arrows to fight against the dragon.',
      descriptionDE: 'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Talon sammelt Münzen und Pfeile, um gegen den Drachen zu kämpfen.',
      liveTest: 'https://odyssey.kutupcevik.com/',
      gitHub: 'https://github.com/KutupCevik/odyssey_lost_world'
    },
  ]
}
