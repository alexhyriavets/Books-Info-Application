import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book';

@Injectable()
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('./../assets/books.json');
  }

  getBookById(id: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>('./../assets/books.json')
      .map(data => data.filter(item => item.id === +id))
      .take(1);
  }

}
