import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TAccountPage } from '../t-account/t-account';
import { TAddCoursePage } from '../t-add-course/t-add-course';
import { TCoursesPage } from '../t-courses/t-courses';
/**
 * Generated class for the TeacherSystemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-system',
  templateUrl: 'teacher-system.html',
})
export class TeacherSystemPage {

  tab1Root = TAccountPage;
  tab2Root = TCoursesPage;
  tab3Root = TAddCoursePage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherSystemPage');
  }

}
