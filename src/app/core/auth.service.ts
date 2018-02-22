import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class AuthService {

 constructor(private afAuth: AngularFireAuth, private router: Router){}

 googleLogin(){
   const provider = new firebase.auth.GoogleAuthProvider();
   return this.oAuthLogin(provider).then(value => {
     console.log('sucess', value),
     this.router.navigateByUrl('profile');
   })
   .catch(error => {
    console.log('Some thing went wrong', error);
   });
 }

 logout() {
   this.afAuth.auth.signOut().then(()=> {
     this.router.navigate(['/']);
   });
 }
 private oAuthLogin(provider) {
  return this.afAuth.auth.signInWithPopup(provider);
 }
}
