(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome Lex\r\n  </h1>\r\n  <app-login [(user)]=\"auth\"></app-login>\r\n  <app-user-info [user]=\"auth\"></app-user-info>\r\n</div>\r\n<app-chatbot [user]=\"auth\"></app-chatbot>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatbot/chatbot.component */ "./src/app/chatbot/chatbot.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _chatbot_services_ontrack_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatbot/services/ontrack.api */ "./src/app/chatbot/services/ontrack.api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _chatbot_services_retire_well_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chatbot/services/retire-well.service */ "./src/app/chatbot/services/retire-well.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_4__["ChatbotComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__["UserInfoComponent"]
            ],
            providers: [
                _chatbot_services_ontrack_api__WEBPACK_IMPORTED_MODULE_6__["OntrackApi"],
                _chatbot_services_retire_well_service__WEBPACK_IMPORTED_MODULE_8__["RetirewellService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chatbot/chatbot.component.css":
/*!***********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input#message {\r\n  padding: 4px;\r\n  font-size: 1em;\r\n  width: 600px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n  color: #ccc;\r\n  font-style: italic;\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n  color: #ccc;\r\n  font-style: italic;\r\n}\r\n\r\ninput::-ms-input-placeholder {\r\n  color: #ccc;\r\n  font-style: italic;\r\n}\r\n\r\ninput::placeholder {\r\n  color: #ccc;\r\n  font-style: italic;\r\n}\r\n\r\np.userRequest {\r\n  margin: 4px;\r\n  padding: 4px 10px 4px 10px;\r\n  border-radius: 4px;\r\n  min-width: 50%;\r\n  max-width: 85%;\r\n  float: left;\r\n  background-color: #f0f8ff;\r\n}\r\n\r\np.lexResponse {\r\n  margin: 4px;\r\n  padding: 4px 10px 4px 10px;\r\n  border-radius: 4px;\r\n  text-align: right;\r\n  min-width: 50%;\r\n  max-width: 85%;\r\n  float: right;\r\n  background-color: #dcdcdc;\r\n  font-style: italic;\r\n}\r\n\r\np.lexError {\r\n  margin: 4px;\r\n  padding: 4px 10px 4px 10px;\r\n  border-radius: 4px;\r\n  text-align: right;\r\n  min-width: 50%;\r\n  max-width: 85%;\r\n  float: right;\r\n  background-color: #f77;\r\n}\r\n\r\nbody {\r\n  background: #e9e9e9;\r\n  color: #9a9a9a;\r\n  font: 100%/1.5em \"Droid Sans\", sans-serif;\r\n  margin: 0;\r\n}\r\n\r\na { text-decoration: none; }\r\n\r\nfieldset {\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh4, h5 {\r\n  line-height: 1.5em;\r\n  margin: 0;\r\n}\r\n\r\nhr {\r\n  background: #e9e9e9;\r\n  border: 0;\r\n  box-sizing: content-box;\r\n  height: 1px;\r\n  margin: 0;\r\n  min-height: 1px;\r\n}\r\n\r\nimg {\r\n  border: 0;\r\n  display: block;\r\n  height: auto;\r\n  max-width: 100%;\r\n}\r\n\r\ninput {\r\n  border: 0;\r\n  color: inherit;\r\n  font-family: inherit;\r\n  font-size: 100%;\r\n  line-height: normal;\r\n  margin: 0;\r\n}\r\n\r\np { margin: 0; }\r\n\r\n.clearfix { *zoom: 1; }\r\n\r\n.clearfix:before, .clearfix:after {\r\n  content: \"\";\r\n  display: table;\r\n}\r\n\r\n.clearfix:after { clear: both; }\r\n\r\n#live-chat {\r\n  bottom: 0;\r\n  font-size: 14px;\r\n  right: 24px;\r\n  position: fixed;\r\n  width: 400px;\r\n}\r\n\r\n#live-chat header {\r\n  background: #293239;\r\n  border-radius: 5px 5px 0 0;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  padding: 16px 24px;\r\n}\r\n\r\n#live-chat h4:before {\r\n  background: #1a8a34;\r\n  border-radius: 50%;\r\n  content: \"\";\r\n  display: inline-block;\r\n  height: 8px;\r\n  margin: 0 8px 0 0;\r\n  width: 8px;\r\n}\r\n\r\n#live-chat h4 {\r\n  font-size: 14px;\r\n}\r\n\r\n#live-chat h5 {\r\n  font-size: 12px;\r\n}\r\n\r\n#live-chat form {\r\n  padding: 24px;\r\n}\r\n\r\n#live-chat input[type=\"text\"] {\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n  padding: 8px;\r\n  margin-left: 33px;\r\n  width: 315px;\r\n}\r\n\r\n.chat-message-counter {\r\n  background: #e62727;\r\n  border: 1px solid #fff;\r\n  border-radius: 50%;\r\n  display: none;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  height: 28px;\r\n  left: 0;\r\n  line-height: 28px;\r\n  margin: -15px 0 0 -15px;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 0;\r\n  width: 28px;\r\n}\r\n\r\n.chat-close {\r\n  background: #1b2126;\r\n  border-radius: 50%;\r\n  color: #fff;\r\n  display: block;\r\n  float: right;\r\n  font-size: 10px;\r\n  height: 16px;\r\n  line-height: 16px;\r\n  margin: 2px 0 0 0;\r\n  text-align: center;\r\n  width: 16px;\r\n}\r\n\r\n.chat {\r\n  background: #f8f8f8;\r\n}\r\n\r\n.chat-history {\r\n  height: 252px;\r\n  padding: 8px 24px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.chat-message {\r\n  margin: 16px 0;\r\n}\r\n\r\n.chat-message img {\r\n  border-radius: 50%;\r\n  float: left;\r\n}\r\n\r\n.chat-message-content {\r\n  margin-left: 56px;\r\n}\r\n\r\n.chat-time {\r\n  float: right;\r\n  font-size: 10px;\r\n}\r\n\r\n.chat-feedback {\r\n  font-style: italic;\r\n  margin: 0 0 0 80px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.html":
/*!************************************************!*\
  !*** ./src/app/chatbot/chatbot.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"live-chat\">\r\n  <header (click)=\"onShowHideChatWindow()\" class=\"clearfix\">\r\n    <a href=\"#\" class=\"chat-close\">x</a>\r\n    <h4>{{bot.botName}}</h4>\r\n    <span class=\"chat-message-counter\">3</span>\r\n  </header>\r\n  <div [@expandCollapseChatWindow] *ngIf=\"options.isChatWindowVisible\" class=\"chat\">\r\n    <div  #scrollMe class=\"chat-history\">\r\n      <div class=\"chat-message clearfix\" *ngFor=\"let msg of messages\">\r\n        <div>\r\n          <span class=\"chat-time\">{{msg.messageTime}}</span>\r\n          <!--replace with switch case-->\r\n          <p *ngIf=\"msg.messageBy==bot.botName\" class='lexResponse'>{{msg.messageText}}</p>\r\n          <p *ngIf=\"msg.messageBy==options.user\" class='userRequest'>{{msg.messageText}}</p>\r\n          <p *ngIf=\"msg.messageBy=='error'\" class='lexError'>{{msg.messageText}}</p>\r\n        </div>\r\n        <div class=\"chat-message-content clearfix\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <input id=\"message\" type=\"text\" (keyup.enter)=\"pushChat($event);\" placeholder={{options.inputPlaceHolder}}>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.ts ***!
  \**********************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/message-model */ "./src/app/chatbot/models/message-model.ts");
/* harmony import */ var _services_aws_lex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/aws-lex.service */ "./src/app/chatbot/services/aws-lex.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent(_lexService) {
        this._lexService = _lexService;
        this.options = this._lexService.options;
        this.bot = this._lexService.bot;
        this.messages = this._lexService.messages;
    }
    ChatbotComponent.prototype.ngOnInit = function () {
        this.scrollToBottom();
    };
    ChatbotComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    // push message from user to AWS chatbot and wait for response
    ChatbotComponent.prototype.pushChat = function (event) {
        // get message typed by user
        var message = this._getMessage(event);
        // add message to messages array
        this._lexService.push(new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["MessageModel"](message, this.options.user));
        if (message.length > 0) {
            this._lexService.postText(message, this.user, function (err, data) {
                this._processMessage(err, data);
            }.bind(this));
        }
    };
    // Auto-scroll chat window
    ChatbotComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    // show hide chat window on chat header click
    ChatbotComponent.prototype.onShowHideChatWindow = function () {
        this.options.isChatWindowVisible = this.options.isChatWindowVisible === false ? true : false;
    };
    ChatbotComponent.prototype._processMessage = function (err, data) {
        if (err) {
            // error
            var rs = JSON.stringify({ data: data, err: err }, undefined, 2);
            this._lexService.push(new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["MessageModel"](rs, 'error'));
        }
        if (data) {
            this.bot.sessionAttributes = data.sessionAttributes;
            if (data.dialogState === _models_message_model__WEBPACK_IMPORTED_MODULE_2__["DialogState"].ReadyForFulfillment) {
                this._lexService.push(new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["MessageModel"]('Ready for fulfillment!', this.bot.botName));
                // TODO:  show slot values
            }
            else {
                // capture the sessionAttributes for the next cycle
                this._lexService.push(new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["MessageModel"](data.message, this.bot.botName));
            }
        }
    };
    ChatbotComponent.prototype._getMessage = function (event) {
        var msg = event.target.value;
        event.target.value = '';
        event.target.focus();
        return msg;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatbotComponent.prototype, "myScrollContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatbotComponent.prototype, "user", void 0);
    ChatbotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatbot',
            template: __webpack_require__(/*! ./chatbot.component.html */ "./src/app/chatbot/chatbot.component.html"),
            styles: [__webpack_require__(/*! ./chatbot.component.css */ "./src/app/chatbot/chatbot.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expandCollapseChatWindow', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        'height': '0px',
                        overflow: 'hidden'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'height': '*',
                            overflow: 'hidden'
                        }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'height': '0px',
                            overflow: 'hidden'
                        }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_aws_lex_service__WEBPACK_IMPORTED_MODULE_3__["AwsLexService"]])
    ], ChatbotComponent);
    return ChatbotComponent;
}());



/***/ }),

/***/ "./src/app/chatbot/models/message-model.ts":
/*!*************************************************!*\
  !*** ./src/app/chatbot/models/message-model.ts ***!
  \*************************************************/
/*! exports provided: MessageModel, ModelType, DialogState, lexFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModel", function() { return MessageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelType", function() { return ModelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogState", function() { return DialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lexFormat", function() { return lexFormat; });
var MessageModel = /** @class */ (function () {
    function MessageModel(messageText, messageBy) {
        this.messageText = messageText;
        this.messageTime = new Date().getHours() + ':' +
            (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes();
        this.messageBy = messageBy;
    }
    return MessageModel;
}());

var ModelType;
(function (ModelType) {
    ModelType[ModelType["Goals"] = 1] = "Goals";
    ModelType[ModelType["Households"] = 2] = "Households";
    ModelType[ModelType["Persons"] = 3] = "Persons";
    ModelType[ModelType["PersonFinancials"] = 4] = "PersonFinancials";
    ModelType[ModelType["HouseholdFinancials"] = 5] = "HouseholdFinancials";
    ModelType[ModelType["Assets"] = 6] = "Assets";
    ModelType[ModelType["Debts"] = 7] = "Debts";
    ModelType[ModelType["Assumptions"] = 8] = "Assumptions";
    ModelType[ModelType["PersonCalculates"] = 9] = "PersonCalculates";
    ModelType[ModelType["PersonFinancialCalculates"] = 10] = "PersonFinancialCalculates";
    ModelType[ModelType["RiskScores"] = 11] = "RiskScores";
    ModelType[ModelType["WillingnessScores"] = 12] = "WillingnessScores";
    ModelType[ModelType["Primary"] = 13] = "Primary";
    ModelType[ModelType["Activities"] = 14] = "Activities";
    ModelType[ModelType["Insurances"] = 15] = "Insurances";
    ModelType[ModelType["HouseholdCalulates"] = 16] = "HouseholdCalulates";
    ModelType[ModelType["Scores"] = 17] = "Scores";
})(ModelType || (ModelType = {}));
var DialogState = {
    // Lambda service
    Close: 'Close',
    ConfirmIntent: 'ConfirmIntent',
    Delegate: 'Delegate',
    ElicitIntent: 'ElicitIntent',
    ElicitSlot: 'ElicitSlot',
    // Lex service
    Fulfilled: 'Fulfilled',
    ReadyForFulfillment: 'ReadyForFulfillment',
    Failed: 'Failed',
};
var lexFormat = {
    cloudName: 'aws',
    region: 'us-east-1',
    identityPoolId: 'us-east-1:4b662f9b-cef6-401e-a6a6-cb486cc588d1',
    inputEventFormat: {
        currentIntent: {
            name: "intent-name",
            slots: {
                slotname: "value",
            },
            slotDetails: {
                slotname: {
                    resolutions: [
                        { value: "resolved value" },
                        { value: "resolved value" }
                    ],
                    originalValue: "original text"
                }
            },
            confirmationStatus: "None, Confirmed, or Denied (intent confirmation, if configured)"
        },
        bot: {
            name: "bot name",
            alias: "bot alias",
            version: "bot version"
        },
        userId: "User ID specified in the POST request to Amazon Lex.",
        inputTranscript: "Text used to process the request",
        invocationSource: "FulfillmentCodeHook or DialogCodeHook",
        outputDialogMode: "Text or Voice, based on ContentType request header in runtime API request",
        messageVersion: "1.0",
        sessionAttributes: {
            key: "value",
        },
        requestAttributes: {
            key: "value",
        }
    },
    dialogAction: {
        Close: {
            type: "Close",
            fulfillmentState: "Fulfilled or Failed",
            message: {
                contentType: "PlainText or SSML or CustomPayload",
                content: "Message to convey to the user. For example, Thanks, your pizza has been ordered."
            },
            responseCard: {
                version: 'integer - value',
                contentType: "application/vnd.amazonaws.card.generic",
                genericAttachments: [
                    {
                        title: "card-title",
                        subTitle: "card-sub-title",
                        imageUrl: "URL of the image to be shown",
                        attachmentLinkUrl: "URL of the attachment to be associated with the card",
                        buttons: [
                            {
                                text: "button-text",
                                value: "Value sent to server on button click"
                            }
                        ]
                    }
                ]
            }
        },
        ConfirmIntent: {
            type: "ConfirmIntent",
            message: {
                contentType: "PlainText or SSML or CustomPayload",
                content: "Message to convey to the user. For example, Are you sure you want a large pizza?"
            },
            intentName: "intent-name",
            slots: {
                slotname: "value",
            },
            responseCard: {
                version: 'integer-value',
                contentType: "application/vnd.amazonaws.card.generic",
                genericAttachments: [
                    {
                        title: "card-title",
                        subTitle: "card-sub-title",
                        imageUrl: "URL of the image to be shown",
                        attachmentLinkUrl: "URL of the attachment to be associated with the card",
                        buttons: [
                            {
                                text: "button-text",
                                value: "Value sent to server on button click"
                            }
                        ]
                    }
                ]
            }
        },
        Delegate: {
            type: "Delegate",
            slots: {
                slotname: "value"
            }
        },
        ElicitIntent: {
            type: "ElicitIntent",
            message: {
                contentType: "PlainText or SSML or CustomPayload",
                content: "Message to convey to the user. For example, What can I help you with?"
            },
            responseCard: {
                version: 'integer-value',
                contentType: "application/vnd.amazonaws.card.generic",
                genericAttachments: [
                    {
                        title: "card-title",
                        subTitle: "card-sub-title",
                        imageUrl: "URL of the image to be shown",
                        attachmentLinkUrl: "URL of the attachment to be associated with the card",
                        buttons: [
                            {
                                text: "button-text",
                                value: "Value sent to server on button click"
                            }
                        ]
                    }
                ]
            }
        },
        ElicitSlot: {
            type: "ElicitSlot",
            message: {
                contentType: "PlainText or SSML or CustomPayload",
                content: "Message to convey to the user. For example, What size pizza would you like?"
            },
            intentName: "intent-name",
            slots: {
                slotname: "value",
            },
            slotToElicit: "slot-name",
            responseCard: {
                version: 'integer-value',
                contentType: "application/vnd.amazonaws.card.generic",
                genericAttachments: [
                    {
                        title: "card-title",
                        subTitle: "card-sub-title",
                        imageUrl: "URL of the image to be shown",
                        attachmentLinkUrl: "URL of the attachment to be associated with the card",
                        buttons: [
                            {
                                text: "button-text",
                                value: "Value sent to server on button click"
                            }
                        ]
                    }
                ]
            }
        },
    }
};


/***/ }),

/***/ "./src/app/chatbot/services/aws-lex.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/chatbot/services/aws-lex.service.ts ***!
  \*****************************************************/
/*! exports provided: AwsLexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsLexService", function() { return AwsLexService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ "./node_modules/aws-sdk/lib/browser.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/message-model */ "./src/app/chatbot/models/message-model.ts");
/* harmony import */ var _retire_well_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retire-well.service */ "./src/app/chatbot/services/retire-well.service.ts");
/* harmony import */ var _ontrack_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ontrack.api */ "./src/app/chatbot/services/ontrack.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AwsLexService = /** @class */ (function () {
    function AwsLexService(_retirewellService, _ontrackApi) {
        this._retirewellService = _retirewellService;
        this._ontrackApi = _ontrackApi;
        this.bot = botRequset;
        this.options = lexUI;
        // Chat messages array
        this._messages = [new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["MessageModel"](this.options.firstMessage, this.bot.botName)];
        var credentials = new aws_sdk__WEBPACK_IMPORTED_MODULE_1__["CognitoIdentityCredentials"]({ IdentityPoolId: awsConfig.IdentityPoolId });
        // Set AWS configurations
        aws_sdk__WEBPACK_IMPORTED_MODULE_1__["config"].region = awsConfig.region;
        aws_sdk__WEBPACK_IMPORTED_MODULE_1__["config"].credentials = credentials;
        // Initialize AWS Lex object
        this._awsLex = new aws_sdk__WEBPACK_IMPORTED_MODULE_1__["LexRuntime"]();
    }
    Object.defineProperty(AwsLexService.prototype, "messages", {
        get: function () {
            return this._messages;
        },
        enumerable: true,
        configurable: true
    });
    AwsLexService.prototype.push = function (message) {
        // send it to the Lex runtime
        this._messages.push(message);
    };
    AwsLexService.prototype.postText = function (message, user, callback) {
        // send it to the Lex runtime
        this.bot.inputText = message;
        this.bot.sessionAttributes = {
            access_token: user ? user.access_token : null,
            api_url: this._ontrackApi.apiUrl,
        };
        this._awsLex.postText(this.bot, callback);
    };
    AwsLexService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_retire_well_service__WEBPACK_IMPORTED_MODULE_3__["RetirewellService"],
            _ontrack_api__WEBPACK_IMPORTED_MODULE_4__["OntrackApi"]])
    ], AwsLexService);
    return AwsLexService;
}());

var awsConfig = {
    region: 'us-east-1',
    IdentityPool: 'ontrack',
    IdentityPoolId: 'us-east-1:4b662f9b-cef6-401e-a6a6-cb486cc588d1',
};
var botRequset = {
    botName: 'ontrack',
    botAlias: 'LATEST',
    userId: 'ontrack',
    inputText: '',
    sessionAttributes: {}
};
var lexUI = {
    inputPlaceHolder: 'Write a message',
    firstMessage: 'Hi my name is Otto, the OnTrack Help Bot. What can I help you with?',
    isChatWindowVisible: false,
    user: 'user',
};


/***/ }),

/***/ "./src/app/chatbot/services/ontrack.api.ts":
/*!*************************************************!*\
  !*** ./src/app/chatbot/services/ontrack.api.ts ***!
  \*************************************************/
/*! exports provided: OntrackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntrackApi", function() { return OntrackApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OntrackApi = /** @class */ (function () {
    function OntrackApi(_httpClient) {
        this._httpClient = _httpClient;
        this.apiUrl = 'http://ontrack-prototype.codestream.com.sg/api';
        this._options = {};
    }
    OntrackApi.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(operation, error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    OntrackApi.prototype.get = function (apiUrl) {
        return this._httpClient
            .get(this.apiUrl + "/" + apiUrl, this._options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('get', apiUrl); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get', [])));
    };
    OntrackApi.prototype.signin = function (emailAddress, password) {
        var _this = this;
        var body = "grant_type=password&username=" + emailAddress + "&password=" + password + "&client_id=nab-client";
        return this._httpClient.post(this.apiUrl + "/token", body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            console.log('login', _);
            _this._options = _this._getRequestHeader(_);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('post', [])));
    };
    OntrackApi.prototype.post = function (apiUrl, body) {
        return this._httpClient
            .post(this.apiUrl + "/" + apiUrl, body, this._options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('post', apiUrl); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('post', [])));
    };
    OntrackApi.prototype._getAuthorizationToken = function (auth) {
        var authToken = auth.access_token;
        return authToken;
    };
    OntrackApi.prototype._getRequestHeader = function (auth) {
        var authToken = this._getAuthorizationToken(auth);
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: "Bearer " + authToken }) };
        return options;
    };
    OntrackApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OntrackApi);
    return OntrackApi;
}());



/***/ }),

/***/ "./src/app/chatbot/services/retire-well.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/chatbot/services/retire-well.service.ts ***!
  \*********************************************************/
/*! exports provided: RetirewellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetirewellService", function() { return RetirewellService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ontrack_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ontrack.api */ "./src/app/chatbot/services/ontrack.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RetirewellService = /** @class */ (function () {
    function RetirewellService(_api) {
        this._api = _api;
    }
    RetirewellService.prototype.login = function (emailAddress, password) {
        return this._api.signin(emailAddress, password);
    };
    RetirewellService.prototype.getProfile = function () {
        var url = "account/profile?userName=ontrack@admin.com";
        return this._api.get(url);
    };
    RetirewellService.prototype.getSurveyInfo = function (modelType) {
        var url = "chat-bot/get-survey?modelType=" + modelType;
        return this._api.get(url);
    };
    RetirewellService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ontrack_api__WEBPACK_IMPORTED_MODULE_1__["OntrackApi"]])
    ], RetirewellService);
    return RetirewellService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown-menu\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleDropdownFormEmail1\">Email address</label>\r\n    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"loginModel.Email\" [ngModelOptions]=\"{standalone: true}\" id=\"exampleDropdownFormEmail1\"\r\n      placeholder=\"email@example.com\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleDropdownFormPassword1\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"loginModel.Password\" [ngModelOptions]=\"{standalone: true}\"\r\n      id=\"exampleDropdownFormPassword1\" placeholder=\"Password\">\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"signin()\">Sign in</button>\r\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"getProfile()\">Get Profile</button>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chatbot_services_retire_well_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chatbot/services/retire-well.service */ "./src/app/chatbot/services/retire-well.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(_retirewellService) {
        this._retirewellService = _retirewellService;
        this.loginModel = {
            Email: 'ontrack@admin.com',
            Password: 'admin'
        };
        this.userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signin = function () {
        var _this = this;
        this._retirewellService.login(this.loginModel.Email, this.loginModel.Password)
            .subscribe(function (auth) {
            _this.user = auth;
            _this.userChange.emit(_this.user);
        });
    };
    LoginComponent.prototype.getProfile = function () {
        this._retirewellService.getProfile()
            .subscribe(function (profile) { return console.log(profile); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "userChange", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
        }),
        __metadata("design:paramtypes", [_chatbot_services_retire_well_service__WEBPACK_IMPORTED_MODULE_1__["RetirewellService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user-info/user-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\r\n  {{this.userInfoStr}}\r\n</pre>\r\n"

/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
        this.user = {};
    }
    UserInfoComponent.prototype.ngOnChanges = function () {
        this.userInfoStr = JSON.stringify(this.user, undefined, 2);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "user", void 0);
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-info/user-info.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AzureDevOps\AWS\lexchatbot\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map