import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SignupTeacherPage } from '../pages/signup-teacher/signup-teacher';
import { AvailCoursesPage } from '../pages/Avail-Courses/avail-courses';
import { LoginPage } from '../pages/login/login';
import { TeacherSystemPage } from '../pages/teacher-system/teacher-system';
import { TAccountPage } from '../pages/t-account/t-account';
import { TAddCoursePage } from '../pages/t-add-course/t-add-course';
import { TCoursesPage } from '../pages/t-courses/t-courses';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
const config = {
  apiKey: "AIzaSyBNwHW5Uj1Qc09nOEf8z3DvVJEF6RDsIro",
  authDomain: "aldars-977fb.firebaseapp.com",
  databaseURL: "https://aldars-977fb.firebaseio.com",
  projectId: "aldars-977fb",
  storageBucket: "aldars-977fb.appspot.com",
  messagingSenderId: "453020633300"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    SignUpPage,
    SignupTeacherPage,
    AvailCoursesPage,
    LoginPage,
    TeacherSystemPage,
    TAccountPage,
    TAddCoursePage,
    TCoursesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    SignUpPage,
    SignupTeacherPage,
    AvailCoursesPage,
    LoginPage,
    TeacherSystemPage,
    TAccountPage,
    TAddCoursePage,
    TCoursesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  exports: [ WelcomePage,SignUpPage,SignupTeacherPage ,AvailCoursesPage,LoginPage,TeacherSystemPage,TAccountPage,TAddCoursePage,TCoursesPage] 
})
export class AppModule {}
