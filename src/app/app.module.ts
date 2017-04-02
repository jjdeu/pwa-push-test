import { MaterialModule } from "@angular/material";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from "./app-routing.module";
import { SubscriptionsService } from "./shared/services/subscriptions.service";
import { NgServiceWorker } from "@angular/service-worker";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    NgServiceWorker,
    SubscriptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
