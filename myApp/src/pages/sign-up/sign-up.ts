import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
//import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  itemsRef: AngularFireList<any>;
  students: Observable<any[]>;
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {
    this.itemsRef =  db.list('/students')
    this.students = this.itemsRef.valueChanges() ;
  }
  addStudent(name,mobile,gender,year,password,confirm) {
    this.itemsRef.push({
      name : name,
      mobile : mobile,
      gender : gender,
      year : year,
      password : password,
      confirm : confirm
    }).then(newStudent=>{this.navCtrl.push(TabsPage)})
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
