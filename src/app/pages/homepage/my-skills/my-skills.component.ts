import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  translate = inject(TranslationService);

  skills = [
    {
      name: 'Angular',
      icon: './../../../../assets/img/icons/skills/angular.svg'
    },
    {
      name: 'TypeScript',
      icon: './../../../../assets/img/icons/skills/typescript.svg'
    },
    {
      name: 'JavScript',
      icon: './../../../../assets/img/icons/skills/javscript.svg'
    },
    {
      name: 'HTML',
      icon: './../../../../assets/img/icons/skills/html.svg'
    },
    {
      name: 'Firebase',
      icon: './../../../../assets/img/icons/skills/firebase.svg'
    },
    {
      name: 'GIT',
      icon: './../../../../assets/img/icons/skills/git.svg'
    },
    {
      name: 'CSS',
      icon: './../../../../assets/img/icons/skills/css.svg'
    },
    {
      name: 'SCSS',
      icon: './../../../../assets/img/icons/skills/scss.svg'
    },
    {
      name: 'Rest-Api',
      icon: './../../../../assets/img/icons/skills/api.svg'
    },
    {
      name: 'Scrum',
      icon: './../../../../assets/img/icons/skills/scrum.svg'
    },
    {
      name: 'Material design',
      icon: './../../../../assets/img/icons/skills/material-design.svg'
    },
  ];
}
