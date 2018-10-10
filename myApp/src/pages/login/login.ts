import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';
import { TeacherSystemPage } from '../teacher-system/teacher-system';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  itemsRef: AngularFireList<any>;
  teachers_items: Observable<any[]>;
  students_items: Observable<any[]>;

  constructor(public navCtrl: NavController,afDB: AngularFireDatabase,public toastCtrl: ToastController) {
    this.itemsRef =  afDB.list('/teachers');
    this.teachers_items = this.itemsRef.valueChanges() ;
   // this.teachers_items = afDB.list('/teachers').valueChanges(); 
    this.students_items = afDB.list('/students').valueChanges(); 
  }
  
  Login(name,password){
    var counter=0;
    this.teachers_items.forEach(element => {
        if(element[counter].name==name&& element[counter].password===password){
          this.navCtrl.setRoot(TeacherSystemPage);
        }else{
          const toast = this.toastCtrl.create({
            message: ' error: name or password is wrong',
            showCloseButton: true,
            closeButtonText: 'Ok'
          });
          toast.present();
        }
        
            //console.log(element[counter].name);
        counter++;
    });
    
  
    
   
  }

}
