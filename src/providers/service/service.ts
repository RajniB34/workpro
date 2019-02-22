import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  public data:any;
public URL="https://100.112.134.54/workproapi/";

  constructor(public http: HttpClient) {
  console.log('Hello ServiceProvider Provider');
  }

  postData(url,data){
    return new Promise(resolve =>{
      this.http.post(url,data).subscribe(data =>  {
        this.data=data;
        resolve(this.data);
      },error=> {
        console.log("sorry...");
      });
    });
  }

//   getuser(url){
//     return new Promise(resolve => {
//       this.http.get(url).subscribe(data => {
//         this.data=data;
//         resolve(this.data);
//       }, err => {
//         console.log(err);
//       });
//     });

// } 


  postregister(data){
  var url = this.URL+"signup.php";
  console.log(JSON.stringify(data));
  return this.postData(url,data);
}

postlogin(data){
  var url = this.URL+"login.php";
  console.log(JSON.stringify(data));
  return this.postData(url,data);
}
}