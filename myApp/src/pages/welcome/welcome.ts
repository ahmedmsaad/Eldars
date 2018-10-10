import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { SignupTeacherPage } from '../signup-teacher/signup-teacher';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-welcome',
  templateUrl: './welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {}

  goToSignup() {
    this.navCtrl.push(SignUpPage);
    //this.navCtrl.setRoot(SignUpPage);
  }
  goToTeacherSignup(){
    this.navCtrl.push(SignupTeacherPage);
   // this.navCtrl.setRoot(SignupTeacherPage);
  }
  goTohome(){
    this.navCtrl.push(TabsPage);
  }
  goToLogin(){
    this.navCtrl.push(LoginPage);
  }
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/ringing.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/girl.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/teacher.png",
    }
  ];



}
