import { Pipe, PipeTransform } from '@angular/core';
import { Repository } from '../interfaces/repository';

@Pipe({
  name: 'repoName'
})
export class RepoNamePipe implements PipeTransform {

  transform(repo: Repository): any {
    return repo.owner.type === 'Organization'
      ? `@${repo.owner.login}/${repo.name}`
      : repo.name;
  }
}
