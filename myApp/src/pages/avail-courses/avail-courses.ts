import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AvailCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avail-courses',
  templateUrl: 'avail-courses.html',
})
export class AvailCoursesPage {
  course;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.course = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailCoursesPage');
  }

}
