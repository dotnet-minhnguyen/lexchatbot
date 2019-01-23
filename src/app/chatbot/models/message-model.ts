export class MessageModel {
  public messageText: string;
  public messageTime: string;
  public messageBy: string;

  constructor(messageText: string, messageBy: string) {
    this.messageText = messageText;
    this.messageTime = new Date().getHours() + ':' +
      (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes();
    this.messageBy = messageBy;
  }
}

export enum ModelType {
  Goals = 1,
  Households,
  Persons,
  PersonFinancials,
  HouseholdFinancials,
  Assets,
  Debts,
  Assumptions,
  PersonCalculates,
  PersonFinancialCalculates,
  RiskScores,
  WillingnessScores,
  Primary,
  Activities,
  Insurances,
  HouseholdCalulates,
  Scores,
}

export const DialogState = {
  // Lambda service
  Close: 'Close', // Finish conversation
  ConfirmIntent: 'ConfirmIntent', // Asking for confirmation
  Delegate: 'Delegate', // Out of control
  ElicitIntent: 'ElicitIntent', // Error, Start a dialog
  ElicitSlot: 'ElicitSlot', // Asking for information

  // Lex service
  Fulfilled: 'Fulfilled', // Match
  ReadyForFulfillment: 'ReadyForFulfillment', // Not match
  Failed: 'Failed', // Error
};

export const lexFormat = {
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
}
