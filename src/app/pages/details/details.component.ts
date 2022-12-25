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
    this.movies()
  }

  public movies() {

  }

  getMovieCover(url: any) {
    return `https://image.tmdb.org/t/p/w300${url}`
  }
}
