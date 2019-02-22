import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workprofile',
  templateUrl: 'workprofile.html',
})
export class WorkprofilePage {
  myDate:any;
  public value:any=true;
  public val2:any="edit";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value=navParams.get('vl');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  getDate(newdate) {
    console.log('newDate',newdate);
  }
  
  edit()
  {
    if(this.value==true){
    this.value=false;
    this.val2="save"
    }
    else{
      this.value=true;
      this.val2="Edit";
    }
  }

}
