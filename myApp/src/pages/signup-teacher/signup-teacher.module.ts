import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupTeacherPage } from './signup-teacher';

@NgModule({
  declarations: [
    SignupTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupTeacherPage),
  ],
})
export class SignupTeacherPageModule {}
