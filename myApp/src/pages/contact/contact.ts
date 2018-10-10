import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AvailCoursesPage } from '../Avail-Courses/avail-courses';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items;
  constructor(public navCtrl: NavController) {

  }

  initializeItems() {
    this.items = [
      'math',
      'physics',
      'chemistry',
      'english',
      'French',
      'geography',
    ];
  }
  gitThisCourse(item){
    item = item || 'No Color Entered';
  
      this.navCtrl.push(AvailCoursesPage, {
        data: item
      });
       // this.navCtrl.push(TabsPage);
 }
  
  

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
