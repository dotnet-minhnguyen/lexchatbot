import { Injectable } from '@angular/core';
import { PostTextRequest } from 'aws-sdk/clients/lexruntime';
import * as AWS from 'aws-sdk';
import { MessageModel } from '../models/message-model';
import { RetirewellService } from './retire-well.service';
import { OntrackApi } from './ontrack.api';

@Injectable({
  providedIn: 'root'
})
export class AwsLexService {

  bot = botRequset;
  options = lexUI;
  // LexRuntime object declaration
  private _awsLex: AWS.LexRuntime;
  // Chat messages array
  private _messages: MessageModel[] = [new MessageModel(this.options.firstMessage, this.bot.botName)];
  public get messages(): MessageModel[] {
    return this._messages;
  }


  constructor(private _retirewellService: RetirewellService,
    private _ontrackApi: OntrackApi) {

    const credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: awsConfig.IdentityPoolId});
    // Set AWS configurations
    AWS.config.region = awsConfig.region;
    AWS.config.credentials = credentials;

    // Initialize AWS Lex object
    this._awsLex = new AWS.LexRuntime();
  }

  public push(message) {
    // send it to the Lex runtime
    this._messages.push(message);
  }

  public postText(message, user, callback) {
    // send it to the Lex runtime
    this.bot.inputText = message;
    this.bot.sessionAttributes  = {
      access_token: user ? user.access_token : null,
      api_url: this._ontrackApi.apiUrl,
    };
    this._awsLex.postText(this.bot, callback);
  }
}


const awsConfig = {
  region: 'us-east-1',
  IdentityPool: 'ontrack',
  IdentityPoolId: 'us-east-1:4b662f9b-cef6-401e-a6a6-cb486cc588d1',
};

const botRequset: PostTextRequest = {
  botName: 'ontrack',
  botAlias: 'LATEST',
  userId: 'ontrack',
  inputText: '',
  sessionAttributes: {}
};

const lexUI = {
  inputPlaceHolder: 'Write a message',
  firstMessage: 'Hi my name is Otto, the OnTrack Help Bot. What can I help you with?',
  isChatWindowVisible: false,
  user: 'user',
};
