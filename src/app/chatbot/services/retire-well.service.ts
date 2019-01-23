import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OntrackApi } from './ontrack.api';
import { ModelType } from '../models/message-model';

@Injectable()
export class RetirewellService {

  constructor(private _api: OntrackApi) {}

  public login(emailAddress: string, password: string): Observable<any> {
    return this._api.signin(emailAddress, password);
  }

  public getProfile() {
    const url = `account/profile?userName=ontrack@admin.com`;
    return this._api.get(url);
  }

  public getSurveyInfo(modelType: ModelType): Observable<any> {
    const url = `chat-bot/get-survey?modelType=${modelType}`;
    return this._api.get(url);
  }
}
