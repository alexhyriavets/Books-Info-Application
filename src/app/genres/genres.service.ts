import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Genre } from '../models/genre';


@Injectable()
export class GenresService {

  constructor(private httpClient: HttpClient) { }

  getAllGenres(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>('./../assets/genres.json');
  }

}
