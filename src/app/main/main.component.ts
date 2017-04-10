import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from "../shared/services/subscriptions.service";
import * as firebase from 'firebase';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private _subscriptionsService:SubscriptionsService) { }

  ngOnInit() {


  }

  public subscribeToPush() {
    this._subscriptionsService.subscribeToPush();
  }

  public unsubscribeFromPush() {
    this._subscriptionsService.unsubscribeFromPush();
  }

  public loginWithGoogle() {

// Using a redirect.
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token.
        let token = result.credential.accessToken;
      }
      let user = result.user;

    });

// Start a sign in process for an unauthenticated user.
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  }

  public logCurrentUser() {
    console.log(firebase.auth().currentUser);
  }

  public logoutCurrentUser() {
    firebase.auth().signOut().then(() => {});
  }

}
