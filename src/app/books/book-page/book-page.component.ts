import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.sass']
})
export class BookPageComponent implements OnInit {
  bookInfo: Book;
  bookId: number;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {
    this.route.params.subscribe(params => this.bookId = params.id);
  }

  ngOnInit() {
    this.getBookById(this.bookId);
  }

  getBookById(id: number): void {
    this.booksService.getBookById(id)
      .subscribe(data => this.bookInfo = data[0]);
  }

}
