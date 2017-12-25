import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.sass']
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
      this.getAllAuthors();
  }

  getAllAuthors(): void {
    this.authorsService.getAllAuthors()
      .subscribe(data => this.authors = data);
  }

}
