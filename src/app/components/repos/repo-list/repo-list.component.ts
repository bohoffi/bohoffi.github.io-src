import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import { Observable, combineLatest } from 'rxjs';
import { Repository } from 'src/app/interfaces/repository';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoListComponent implements OnInit {

  $bohoffi: Observable<Repository[]>;
  $baltic: Observable<Repository[]>;
  $repos: Observable<Repository[]>;

  constructor(private repos: RepoService) { }

  ngOnInit() {
    this.$bohoffi = this.repos.userRepositories('bohoffi')
      .pipe(
        map((repos: Repository[]) => repos.filter((repo: Repository) => !repo.fork && repo.stargazers_count > 0))
      );
    this.$baltic = this.repos.userRepositories('balticcode')
      .pipe(
        map((repos: Repository[]) => repos.filter((repo: Repository) => !repo.fork && repo.stargazers_count > 0))
      );
    this.$repos = combineLatest(
      this.$bohoffi,
      this.$baltic
    )
    .pipe(
      map((streams: Repository[][]) => [].concat.apply([], streams)),
      map((repos: Repository[]) => repos.sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count))
    );
  }
}
