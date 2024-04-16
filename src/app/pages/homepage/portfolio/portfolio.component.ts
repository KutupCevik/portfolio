import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Join',
      technologie: ['Angular', 'Typescipt', 'HTML', 'CSS'],
      img: './../../../../assets/img/projects/join.png',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      liveTest: 'https://join.kutupcevik.com/',
      gitHub: 'https://github.com/KutupCevik/join'
    },
    {
      name: 'Talon\'s Odyssey',
      technologie: ['Angular', 'Typescipt', 'HTML', 'CSS'],
      img: './../../../../assets/img/projects/odyssey.png',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      liveTest: 'https://odyssey.kutupcevik.com/',
      gitHub: 'https://github.com/KutupCevik/odyssey_lost_world'
    },
  ]
}
