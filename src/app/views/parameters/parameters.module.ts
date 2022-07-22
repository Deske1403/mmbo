import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { ChannelsComponent } from './channels/channels.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { ProbaComponent } from './channels/proba/proba.component';



@NgModule({
  declarations: [
    ChannelsComponent,
    ProbaComponent,
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule
  ]
})
export class ParametersModule { }
