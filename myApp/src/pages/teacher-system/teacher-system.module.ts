import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherSystemPage } from './teacher-system';

@NgModule({
  declarations: [
    TeacherSystemPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherSystemPage),
  ],
})
export class TeacherSystemPageModule {}
