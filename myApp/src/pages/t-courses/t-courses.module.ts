import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TCoursesPage } from './t-courses';

@NgModule({
  declarations: [
    TCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(TCoursesPage),
  ],
})
export class TCoursesPageModule {}
