import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OntrackApi } from './chatbot/ontrack.api';
import { HttpClientModule } from '@angular/common/http';
import { RetirewellService } from './chatbot/retire-well.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    OntrackApi,
    RetirewellService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
