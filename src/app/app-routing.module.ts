import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { GenresComponent } from './genres/genres.component';
import { AuthorPageComponent } from './authors/author-page/author-page.component';
import { BookPageComponent } from './books/book-page/book-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BooksComponent },
    { path: 'books/:id', component: BookPageComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: 'authors/:id', component: AuthorPageComponent },
    { path: 'genres', component: GenresComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

