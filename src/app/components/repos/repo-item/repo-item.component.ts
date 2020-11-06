import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Repository } from '../../../interfaces/repository';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoItemComponent {

  @Input()
  repository: Repository;
}
