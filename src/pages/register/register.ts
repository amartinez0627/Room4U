import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fireAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  async register(user:User){
    try{
      const result = await this.fireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
      console.log(result)
    }catch(e){
      console.error(e)
    }
   
  }
}
