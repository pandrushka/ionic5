import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class StarWarsService {

  private starWarsApiUrl = environment.starWarsApiUrl;

  constructor(private http: HttpClient) { }

  getStarWarsPeople(): Observable<any> {
    return this.http.get(this.starWarsApiUrl).pipe(
      catchError(this.handleError('getStarWarsPeople', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
