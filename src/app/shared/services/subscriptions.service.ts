import { Injectable } from '@angular/core';
import { NgServiceWorker } from "@angular/service-worker";
import 'isomorphic-fetch';

import { environment } from "../../../environments/environment";

declare let fetch;

@Injectable()
export class SubscriptionsService {

  private swScope: string = './';

  constructor(private _serviceWorker: NgServiceWorker) {
    this._serviceWorker.log().subscribe(message => console.log(message));
  }

  public checkServiceWorker(): void {

    navigator['serviceWorker']
      .getRegistrations()
      .then(registrations => {
        return registrations
          .map(reg => {
            return {
              scope: reg.scope,
              active: !!reg.active,
              installing: !!reg.installing,
              waiting: !!reg.waiting
            };
          })
      })
      .then(value => JSON.stringify(value))
      .then(value => {
        console.log(value);
      })
  }

  private _urlBase64ToUint8Array(base64String:string) {
    let padding = '='.repeat((4 - base64String.length % 4) % 4);
    let base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    let rawData = window.atob(base64);
    let outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  public subscribeToPush() {

    let theServiceUrl = environment.urls.service;
    console.log('url: ' + theServiceUrl);
    const vapidPublicKey = environment.vapid.public_key;
    const convertedVapidKey = this._urlBase64ToUint8Array(vapidPublicKey);

    navigator['serviceWorker']
      .getRegistration(this.swScope)
      .then(registration => {

        registration.pushManager
          .subscribe({ userVisibleOnly: true, applicationServerKey: convertedVapidKey })
          .then(function (subscription) {
            return fetch(theServiceUrl + "/webpush", {
              method: "POST",
              body: JSON.stringify({ action: 'subscribe', subscription: subscription }),
              headers: { 'Content-Type': 'application/json' }
            })
              .then(response => {
                return response.json()
              })
              .then(json => {
                console.log('Subscription request answer', json)
              })
              .catch(error => {
                console.log('Subscription request failed', error)
              });
          });

      })
      .catch(error => {
        console.log(error);
      })

  }

  public unsubscribeFromPush() {

    let theServiceUrl = environment.urls.service;
    console.log('url: ' + theServiceUrl);
    const vapidPublicKey = environment.vapid.public_key;
    const convertedVapidKey = this._urlBase64ToUint8Array(vapidPublicKey);

    navigator['serviceWorker']
      .getRegistration(this.swScope)
      .then(registration => {

        registration.pushManager
          .subscribe({ userVisibleOnly: true, applicationServerKey: convertedVapidKey })
          .then(function (subscription) {
            return fetch(theServiceUrl + "/webpush", {
              method: "POST",
              body: JSON.stringify({ action: 'unsubscribe', subscription: subscription }),
              headers: { 'Content-Type': 'application/json' }
            })
              .then(response => {
                return response.json()
              })
              .then(json => {
                console.log('Subscription request answer', json)
              })
              .catch(error => {
                console.log('Subscription request failed', error)
              });
          });

      })
      .catch(error => {
        console.log(error);
      })

  }

}
