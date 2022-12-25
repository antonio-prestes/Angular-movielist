import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [
    MovieHeaderComponent,
    MovieSearchComponent,
    MovieListComponent
  ],
  exports: [
    MovieHeaderComponent,
    MovieSearchComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
