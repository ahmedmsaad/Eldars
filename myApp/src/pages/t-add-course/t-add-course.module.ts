import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TAddCoursePage } from './t-add-course';

@NgModule({
  declarations: [
    TAddCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(TAddCoursePage),
  ],
})
export class TAddCoursePageModule {}
