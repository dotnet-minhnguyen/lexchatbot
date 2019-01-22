import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class OntrackApi {
  private _apiUrl = 'http://ontrack-prototype.codestream.com.sg/api';

  constructor(private _httpClient: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(operation, error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  get<T>(apiUrl: string, options?: any): Observable<T> {
    return this._httpClient
      .get<T>(`${this._apiUrl}/${apiUrl}`, (options = { headers: options.headers }))
      .pipe(
        tap(_ => console.log('get', apiUrl)),
        catchError(this.handleError('get', []))
      );
  }

  post<T>(apiUrl: string, body: any, options?: any): Observable<T> {
    return this._httpClient
      .post<T>(`${this._apiUrl}/${apiUrl}`, body, (options = { headers: options.headers }))
      .pipe(
        tap(_ => console.log('post', apiUrl)),
        catchError(this.handleError('post', []))
      );
  }
}
