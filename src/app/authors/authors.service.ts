import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../models/author';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorsService {

  constructor(private httpClient: HttpClient) { }

  getAllAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>('./../assets/authors.json');
  }

  getAuthorById(id: number): Observable<Author[]> {
    return this.httpClient.get<Author[]>('./../assets/authors.json')
      .map(data => data.filter(item => item.id === +id))
      .take(1);
  }

}
