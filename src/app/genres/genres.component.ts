import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../books/books.service';
import { Genre } from '../models/genre';
import { GenresService } from './genres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.sass']
})
export class GenresComponent implements OnInit {
  currentGenre: string;
  books: Book[];
  genres: Genre[];

  constructor(
    private booksService: BooksService,
    private genresService: GenresService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentGenre = this.route.snapshot.queryParams['filterBy'];
    this.getAllBooks();
    this.getAllGenres();
  }

  getAllGenres(): void {
    this.genresService.getAllGenres()
      .subscribe(data => this.genres = data);
  }

  getAllBooks(): void {
    this.booksService.getAllBooks()
      .subscribe(data => this.books = data);
  }

}
