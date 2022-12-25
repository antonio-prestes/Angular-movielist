import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, pipe, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private url: string  = 'https://api.themoviedb.org/3/'
  private api_key: string = 'b8670d2d5fd61b26e1a9f5024e5acd38'
  private withBaseUrl = (path: any) =>   `${(this.url)}${path}?api_key=${(this.api_key)}`
  constructor(
    private http: HttpClient
  ) { }

  get apiListPopularMovies():Observable<any>{
    return this.http.get<any>(this.withBaseUrl('movie/popular'))
  }

  // @ts-ignore
  getMovie(id: any){
    return this.http.get<any>(this.withBaseUrl(`movie/${id}`))
  }
}
