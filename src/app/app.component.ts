import { Component,ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {  
  rootPage:any = HomePage;
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages=[
      { title: 'Home',component: HomePage,icon:'create'},
      { title: 'Edit Profile',component: 'WorkprofilePage',icon:''},
      
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  }
  