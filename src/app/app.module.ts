import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
