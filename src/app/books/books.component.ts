import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.booksService.getAllBooks()
      .subscribe(data => this.books = data);
  }

}
