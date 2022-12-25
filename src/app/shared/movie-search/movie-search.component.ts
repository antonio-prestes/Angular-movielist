import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  public search(value: string) {
    this.emitSearch.emit(value)
  }
}
