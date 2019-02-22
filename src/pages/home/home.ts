import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public email: any;
  public password: any;

  constructor(public nav: NavController,public alertCtrl: AlertController,
    public service: ServiceProvider) {
  }

    // login() {
    //   if(this.var1=="user" && this.var2=="user123")
    //   {
    //     // this.service.login(this.var1).then(data=>{
    //     //   console.log("loged in");
    //     // })
    //    // this.nav.push('ServicelistPage');
    // }
    // else{
    //   const alert = this.alertCtrl.create({
    //     title: 'sorry!!!', 
    //     subTitle: 'invalid credentials',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    //}
   // }
   login(){
     let data={
       email:this.email,
       password:this.password
     }
     console.log("my object value",data);
    this.service.postlogin(data).then(data=>{
      console.log("response value",data);
      this.nav.push('ServicelistPage');
    })
   }

    signup(){
      this.nav.push('SignupPage');
    }
    
    frgtpswd(){
      this.nav.push('ForgotpasswordPage');
     }


   
  }