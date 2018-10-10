import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailCoursesPage } from './avail-courses';

@NgModule({
  declarations: [
    AvailCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailCoursesPage),
  ],
})
export class AvailCoursesPageModule {}
