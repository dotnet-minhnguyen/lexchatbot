import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OntrackApi } from './chatbot/services/ontrack.api';
import { HttpClientModule } from '@angular/common/http';
import { RetirewellService } from './chatbot/services/retire-well.service';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ChatbotComponent,
    LoginComponent,
    UserInfoComponent
  ],
  providers: [
    OntrackApi,
    RetirewellService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
