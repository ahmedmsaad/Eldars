import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
//import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
/**
 * Generated class for the SignupTeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-teacher',
  templateUrl: 'signup-teacher.html',
})
export class SignupTeacherPage {
  itemsRef: AngularFireList<any>;
  teachers: Observable<any[]>;
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {
    this.itemsRef =  db.list('/teachers')
    this.teachers = this.itemsRef.valueChanges() ;
  }
  addteacher(name,mobile,gender,course,first,second,third,experience,location,password,confirm) {
    this.itemsRef.push({
      name     : name,
      mobile   : mobile,
      gender   : gender,
      course   : course,
      first    : first,
      second   : second,
      third    : third,
      experience:experience,
      location :location,
      password : password,
      confirm  : confirm
    }).then(newTeacher=>{this.navCtrl.push(TabsPage)})
  /* 
    if (true) {
      const toast = this.toastCtrl.create({
        message: 'Your sign up were successfully done',
        showCloseButton: true,
        closeButtonText: 'Ok'
      });
      toast.present(),
      this.navCtrl.setRoot(TabsPage);
    } else {
      
    }
    */
  }
}
