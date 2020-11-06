import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Link } from '../../../interfaces/link';

@Component({
  selector: 'app-profile-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksComponent {
  public links: Link[] = [
    {
      url: 'https://github.com/bohoffi',
      classes: [
        'fab',
        'fa-github-square'
      ]
    },
    {
      url: 'https://medium.com/@bohoffi',
      classes: [
        'fab',
        'fa-medium'
      ]
    },
    {
      url: 'https://www.xing.com/profile/Sebastian_Hoffmann82',
      classes: [
        'fab',
        'fa-xing-square'
      ]
    },
    {
      url: 'https://www.linkedin.com/in/sebastian-hoffmann-39b542156',
      classes: [
        'fab',
        'fa-linkedin'
      ]
    },
    {
      url: 'https://stackoverflow.com/story/bohoffi',
      classes: [
        'fab',
        'fa-stack-overflow'
      ]
    },
    {
      url: 'https://inspierty.de',
      classes: [
        'fas',
        'fa-music'
      ]
    }
  ];
}
