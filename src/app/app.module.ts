import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { GenresComponent } from './genres/genres.component';
import { MenuComponent } from './menu/menu.component';
import { AuthorPageComponent } from './authors/author-page/author-page.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRouting } from './app-routing.module';
import { BooksService } from './books/books.service';
import { AuthorsService } from './authors/authors.service';
import { HttpClientModule } from '@angular/common/http';
import { BookPageComponent } from './books/book-page/book-page.component';
import { GenresService } from './genres/genres.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './genres/genres.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AuthorsComponent,
    GenresComponent,
    AuthorPageComponent,
    MenuComponent,
    BookPageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    AppRouting,
    HttpClientModule,
    FormsModule
  ],
  providers: [BooksService, AuthorsService, GenresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
