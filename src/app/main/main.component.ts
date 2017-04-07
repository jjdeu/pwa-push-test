import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from "../shared/services/subscriptions.service";

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

}
