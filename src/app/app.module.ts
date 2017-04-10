import { MdIconRegistry, MaterialModule } from "@angular/material";
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from "./app-routing.module";
import { SubscriptionsService } from "./shared/services/subscriptions.service";
import { NgServiceWorker } from "@angular/service-worker";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

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
    SubscriptionsService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'rotation',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/material/rotation.svg'));
  }

}
