import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsComponent } from './channels/channels.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Settlement parameters'
    },
    children: [
      {
        path: '',
        redirectTo: 'channels'
      },
      {
        path: 'channels',
        component: ChannelsComponent,
        data: {
          title: 'Settlement Channels'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
