import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from '../../../interfaces/repository';
import { RepoService } from '../../../services/repo.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoListComponent implements OnInit {

  public $repos: Observable<Repository[]>;

  constructor(private repos: RepoService) { }

  public ngOnInit(): void {
    const $bohoffi = this.repos.userRepositories('bohoffi')
      .pipe(
        map((repos: Repository[]) => repos.filter((repo: Repository) => !repo.fork && repo.stargazers_count > 0))
      );
    const $baltic = this.repos.userRepositories('balticcode')
      .pipe(
        map((repos: Repository[]) => repos.filter((repo: Repository) => !repo.fork && repo.stargazers_count > 0))
      );
    this.$repos = forkJoin({
      bohoffi: $bohoffi,
      balticCode: $baltic
    }
    )
      .pipe(
        map((repos: { bohoffi: Repository[], balticCode: Repository[] }) => [...repos.bohoffi, ...repos.balticCode]),
        map((repos: Repository[]) => repos.sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count))
      );
  }
}
