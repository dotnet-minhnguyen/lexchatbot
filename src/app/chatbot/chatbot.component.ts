import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PostTextRequest } from 'aws-sdk/clients/lexruntime';
import { MessageModel, DialogState } from './message-model';
import { RetirewellService } from './retire-well.service';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  animations: [
    trigger('expandCollapseChatWindow', [
      state('void', style({
        'height': '0px',
        overflow: 'hidden'
      })),
      transition(':enter', [
        animate('500ms ease-in-out', style({
          'height': '*',
          overflow: 'hidden'
        }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({
          'height': '0px',
          overflow: 'hidden'
        }))
      ])
    ])
  ]
})
export class ChatbotComponent implements OnInit, AfterViewChecked {

  // Auto-scroll chat window
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  bot = botRequset;
  aws = awsConfig;
  options = appOptions;
  // LexRuntime object declaration
  awsLex: AWS.LexRuntime;
  // Chat messages array
  messages: MessageModel[] = [new MessageModel(this.options.firstMessage, this.bot.botName)];

  constructor(private _retirewellService: RetirewellService) {
    const credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: awsConfig.IdentityPoolId});
    // Set AWS configurations
    AWS.config.region = awsConfig.region;
    AWS.config.credentials = credentials;

    // Initialize AWS Lex object
    this.awsLex = new AWS.LexRuntime();
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  // push message from user to AWS chatbot and wait for response
  pushChat(event: Event) {
    // get message typed by user
    const message = this._getMessage(event);
    // add message to messages array
    this.messages.push(new MessageModel(message, this.options.user));
    if (message.length > 0) {
      // send it to the Lex runtime
      this.bot.inputText = message;

      this.awsLex.postText(this.bot, function (err, data) {
        if (err) {
          // error
          this.messages.push(new MessageModel(data.message, 'error'));
        }
        console.log(data);
        if (data) {
          this.bot.sessionAttributes = data.sessionAttributes;
          if (data.dialogState === DialogState.ReadyForFulfillment) {
            this.messages.push(new MessageModel('Ready for fulfillment!', this.bot.botName));
            // TODO:  show slot values
          } else {
            // capture the sessionAttributes for the next cycle
            this.messages.push(new MessageModel(data.message, this.bot.botName));
          }
        }
      }.bind(this));
    }
  }

  // Auto-scroll chat window
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  // show hide chat window on chat header click
  onShowHideChatWindow() {
    this.options.isChatWindowVisible = this.options.isChatWindowVisible === false ? true : false;
  }

  private _getMessage(event): any {
    const msg = (<HTMLInputElement>event.target).value;
    (<HTMLInputElement>event.target).value = '';
    (<HTMLInputElement>event.target).focus();
    return msg;
  }
}

const awsConfig = {
  region: 'us-east-1',
  User: 'ontrack',
  UserPool: 'ontrack',
  UserPoolId: 'ontrack',
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

const appOptions = {
  inputPlaceHolder: 'I would like to book a car',
  firstMessage: 'You can ask me for help in booking a trip. Just type \'book a car\' or \'book a hotel\'.',
  isChatWindowVisible: false,
  user: 'user'
};
