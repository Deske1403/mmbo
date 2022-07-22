import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Channel } from './channel'
import { MatDialog } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';



@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ProbaDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  rowData = [];
  data: any = '';
  isActiveChecked: boolean = false;
  isAutoForexAllowedChecked = false;
  channelId: number = 0;
  businessUnit: string = '';
  errorMessage: string = '';
  ctrDisabled: boolean = false;
  channelsTypeData: any = '';
  businessUnitsData: any = '';
  configData: any = '';
  a: any = "1";


  ngOnInit(): void {
    this.FillTable();
    this.GetBusinessUnits();
    this.GetChannelType();
  }

  FillTable() {
    fetch('https://localhost:5001/settlement-channels')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
  }

  makeRequest(id: any): void {

    this.http
      .get('https://localhost:5001/settlement-channels/' + id)
      .subscribe(data => {
        this.data = data;
      });
  }

  GetChannelType() {
    this.http
      .get('https://localhost:5001/settlement-channels/channel-types')
      .subscribe(data => {
        this.channelsTypeData = data;
      });
  }

  GetBusinessUnits() {
    this.http
      .get('https://localhost:5001/business-units')
      .subscribe(data => {
        this.businessUnitsData = data;
      });
  }

  ModifyChannel() {

    var channelTypeId = (<HTMLInputElement>document.getElementById('channelType')).value;
    var channelCode =  (<HTMLInputElement>document.getElementById('channelCode')).value;
    var description = (<HTMLInputElement>document.getElementById('description')).value;
    var businessUnitId = (<HTMLInputElement>document.getElementById('businessUnit')).value;
    var isActive = (<HTMLInputElement>document.getElementById('isActive')).checked;
    var isAutoForexAllowed = (<HTMLInputElement>document.getElementById('isAutoForexAllowed')).checked;
    var aqSubscriberName  = (<HTMLInputElement>document.getElementById('aqSubscriberName')).value;
    var instructionCheckId = 0
    var channel = new Channel(channelTypeId, channelCode, description,+businessUnitId, isActive, isAutoForexAllowed, aqSubscriberName, instructionCheckId);

    this.http.put<any>('https://localhost:5001/settlement-channels/' + this.channelId, channel)
      .subscribe({
        next: data => {
          this.data = data;
          this.FillTable();
          this.EnableModify(true);//maybe error try later
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
          alert(this.errorMessage);
        }
      });
  }

  GetConfig(id: number) {
    this.http
      .get('https://localhost:5001/settlement-channels/config/'+id)
      .subscribe(data => {
        this.configData = data;
      });
  }


  FillParamsForm(event: any) {
    this.makeRequest(event.data.id);
    this.channelId = event.data.id;

    if (event.data.isActive == 'NO') {
      this.isActiveChecked = false;
    }
    else {
      this.isActiveChecked = true;
    }

    if (event.data.isAutoForexAllowed) {
      this.isAutoForexAllowedChecked = true;
    } else {
      this.isAutoForexAllowedChecked = false;
    }
  }

  EnableModify(makeEnabled: boolean) {
    this.ctrDisabled = makeEnabled;
  }

  columnDefs = [
    { headerName: 'ID', field: 'id', hide: true },
    { headerName: 'Business Unit', field: 'businessUnit' },
    { headerName: 'Channel Type', field: 'channelType' },
    { headerName: 'Channel Code', field: 'channelCode' },
    { headerName: 'Is Active', field: 'isActive' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Sbscriber Name', field: 'subscriberName' },
    { headerName: 'Is Auto Forex Allowed', field: 'isAutoForexAllowed' },
  ];

  defaultColDef = {
    sortable: true,
    resizable: true,
  };

}

@Component({
  selector: 'proba.component',
  templateUrl: './proba/proba.component.html',
})
export class ProbaDialog {

}
