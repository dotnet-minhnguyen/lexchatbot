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
