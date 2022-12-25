import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.movies
  }

  get movies() {
    const id = this.activeRoute.snapshot.params['id']
    return console.log(id)
  }
}
