import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../authors.service';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.sass']
})
export class AuthorPageComponent implements OnInit {
  authorId: number;
  authorInfo: Author;

  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService
  ) {
    this.route.params.subscribe(params => this.authorId = params.id);
  }

  ngOnInit() {
    this.getAuthorInfo();
  }

  getAuthorInfo(): void {
    console.log(this.authorId);
    this.authorsService.getAuthorById(this.authorId)
      .subscribe(data => this.authorInfo = data[0]);
  }

}
