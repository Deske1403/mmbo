export class Channel {

  private channelTypeId: string;
  private channelCode: string;
  private description: string;
  private businessUnitId: number;
  private  isActive: boolean;
  private isAutoForexAllowed: boolean;
  private aqSubscriberName: string;
  private instructionCheckId: number;

  constructor(channelTypeId: string, channelCode: string, description: string, businessUnitId: number,
    isActive: boolean, isAutoForexAllowed: boolean, aqSubscriberName: string, instructionCheckId: number) {
    this.channelTypeId = channelTypeId;
    this.channelCode = channelCode;
    this.description = description;
    this.businessUnitId = businessUnitId;
    this.isActive = isActive;
    this.isAutoForexAllowed = isAutoForexAllowed;
    this.aqSubscriberName = aqSubscriberName;
    this.instructionCheckId = instructionCheckId;
  }
}
