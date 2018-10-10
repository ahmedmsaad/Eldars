import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TAccountPage } from './t-account';

@NgModule({
  declarations: [
    TAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(TAccountPage),
  ],
})
export class TAccountPageModule {}
