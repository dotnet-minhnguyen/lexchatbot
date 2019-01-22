import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class OntrackApi {
    private _apiEnpoint: string = 'https://www.w3schools.com/tags/ref_httpmethods.asp/api';

    constructor(private _httpClient: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T): any {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    get<T>(apiUrl: string): Observable<T> {
        return this._httpClient.get<T>(apiUrl)
            .pipe(
                tap(_ => console.log('get', apiUrl)),
                catchError(this.handleError('get', []))
            );
    }

    post<T>(apiUrl: string, body: any): Observable<T> {
        return this._httpClient.post<T>(apiUrl, body)
            .pipe(
                tap(_ => console.log('post', apiUrl)),
                catchError(this.handleError('post', []))
            );
    }
}