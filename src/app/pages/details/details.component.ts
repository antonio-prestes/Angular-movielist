import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieApiService} from "../../service/movie-api.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public movie: any
  public apiError: boolean = false
  constructor(
    private activeRoute: ActivatedRoute,
    private movieService: MovieApiService
  ) {
  }

  ngOnInit(): void {
    this.movies
  }

  get movies() {
    const id = this.activeRoute.snapshot.params['id']
    // @ts-ignore
    console.log(this.movieService.getMovie(id).subscribe(
      res => {
        this.movie = res
      },
      error => {
        this.apiError = true
      }
    ))
    // @ts-ignore
    return this.movieService.getMovie(id)
  }

  getMovieCover(url: any) {
    return `https://image.tmdb.org/t/p/w300${url}`
  }
}
