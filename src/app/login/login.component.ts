import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { RetirewellService } from '../chatbot/services/retire-well.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginModel = {
    Email: 'ontrack@admin.com',
    Password: 'admin'
  };

  @Input() user: any;
  @Output() userChange = new EventEmitter();

  constructor(private _retirewellService: RetirewellService) { }

  ngOnInit() {
  }

  signin() {
    this._retirewellService.login(this.loginModel.Email, this.loginModel.Password)
      .subscribe(auth => {
        this.user = auth;
        this.userChange.emit(this.user);
      });
  }

  
  getProfile() {
    this._retirewellService.getProfile()
      .subscribe(profile => console.log(profile));
  }

}
