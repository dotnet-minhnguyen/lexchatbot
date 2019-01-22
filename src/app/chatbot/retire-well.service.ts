import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OntrackApi } from './ontrack.api';
import { HttpHeaders } from '@angular/common/http';
import { ModelType } from './message-model';

@Injectable()
export class RetirewellService {

  private _options = {};

  constructor(private _api: OntrackApi) {}

  public login(emailAddress: string, password: string): Observable<any> {
    const body = `grant_type=password&username=${emailAddress}&password=${password}&client_id=nab-client`;
    return this._api.post('token', body)
      .pipe(auth => this._options = this._getRequestHeader(auth));
  }

  public getSurveyInfo(modelType: ModelType): Observable<any> {
    const ctrUrl = `chat-bot/get-survey?modelType=${modelType}`;
    return this._api.get(ctrUrl, this._options);
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
