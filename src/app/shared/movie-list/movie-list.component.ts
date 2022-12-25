import {Component, OnInit} from '@angular/core';
import {MovieApiService} from "../../service/movie-api.service";

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  private setAllPopularMovies: any
  public getAllPopularMovies: any

  constructor(
    private movieApiService: MovieApiService
  ) {
  }

  ngOnInit(): void {
    this.movieApiService.apiListPopularMovies.subscribe(
      res => {
        this.setAllPopularMovies = res.results
        this.getAllPopularMovies = this.setAllPopularMovies
        console.log(this.getAllPopularMovies)
      })
  }

  getMovieCover(url: any) {
    return `https://image.tmdb.org/t/p/w300${url}`
  }

  getSearch(value: string) {
    const filter = this.setAllPopularMovies.filter((res: any) => {
      return !res.title.indexOf(value.toLowerCase())
    })

    this.getAllPopularMovies = filter
  }
}
