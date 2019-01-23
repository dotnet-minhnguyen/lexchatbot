import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MessageModel, DialogState } from './models/message-model';
import { AwsLexService } from './services/aws-lex.service';

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
  @Input() user: any;


  constructor(private _lexService: AwsLexService) { }

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
    this._lexService.push(new MessageModel(message, this._lexService.options.user));
    if (message.length > 0) {
      this._lexService.postText(message, this.user, function (err, data) {
        this._processMessage(err, data);
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
    this._lexService.options.isChatWindowVisible = this._lexService.options.isChatWindowVisible === false ? true : false;
  }

  private _processMessage(err, data) {
    if (err) {
      // error
      let rs = JSON.stringify({ data, err }, undefined, 2)
      this._lexService.push(new MessageModel(rs, 'error'));
    }
    if (data) {
      this._lexService.bot.sessionAttributes = data.sessionAttributes;
      if (data.dialogState === DialogState.ReadyForFulfillment) {
        this._lexService.push(new MessageModel('Ready for fulfillment!', this._lexService.bot.botName));
        // TODO:  show slot values
      } else {
        // capture the sessionAttributes for the next cycle
        this._lexService.push(new MessageModel(data.message, this._lexService.bot.botName));
      }
    }
  }

  private _getMessage(event): any {
    const msg = (<HTMLInputElement>event.target).value;
    (<HTMLInputElement>event.target).value = '';
    (<HTMLInputElement>event.target).focus();
    return msg;
  }
}

