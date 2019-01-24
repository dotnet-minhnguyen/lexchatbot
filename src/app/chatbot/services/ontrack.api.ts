import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class OntrackApi {
  apiUrl = 'http://ontrack-prototype.codestream.com.sg/api';

  private _options = {};

  constructor(private _httpClient: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(operation, error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  get<T>(apiUrl: string): Observable<T> {
    return this._httpClient
      .get<T>(`${this.apiUrl}/${apiUrl}`, this._options)
      .pipe(
        tap(_ => console.log('get', apiUrl)),
        catchError(this.handleError('get', []))
      );
  }

  signin(emailAddress: string, password: string) {
    const body = `grant_type=password&username=${emailAddress}&password=${password}&client_id=nab-client`;
    return this._httpClient.post(`${this.apiUrl}/token`, body)
      .pipe(
        tap(_ => {
          console.log('login', _);
          this._options = this._getRequestHeader(_);
        }),
        catchError(this.handleError('post', []))
      );
  }

  post<T>(apiUrl: string, body: any): Observable<T> {
    return this._httpClient
      .post<T>(`${this.apiUrl}/${apiUrl}`, body, this._options)
      .pipe(
        tap(_ => console.log('post', apiUrl)),
        catchError(this.handleError('post', []))
      );
  }

  private _getAuthorizationToken(auth: any): string {
    const authToken = auth.access_token;
    return authToken;
  }

  private _getRequestHeader(auth: any): any {
    const authToken = this._getAuthorizationToken(auth);
    const options = { headers: new HttpHeaders({ Authorization: `Bearer ${authToken}`}) };
    return options;
  }
}
