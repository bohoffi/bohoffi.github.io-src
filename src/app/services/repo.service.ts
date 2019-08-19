import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../interfaces/repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http: HttpClient) {}

  userRepositories(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`https://api.github.com/users/${username}/repos`);
  }
}
