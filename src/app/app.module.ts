import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ValidateDirective } from './directive/validate.directive';
import { CountriesComponent } from './countries/countries.component';
import { CitiesComponent } from './cities/cities.component';

import { MyService } from './services/my.service';
import { FilterPipe } from './pipe/filter.pipe';
import { ServerCommunicationComponent } from './server-communication/server-communication.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';
import { DialogService } from './services/dialog.service';
import { HttpModule } from '@angular/http';
import { SearchDataComponent } from './search-data/search-data.component';
import { DataService } from './services/data.service';

import { HttpClientModule} from "@angular/common/http";
import { EnquiryComponent } from './enquiry/enquiry.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidateDirective,
    CountriesComponent,
    CitiesComponent,
    FilterPipe,
    ServerCommunicationComponent,
    WelcomeComponent,
    SearchDataComponent,
    EnquiryComponent,
    FeedbackComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
      MyService,
      CanDeactivateGuardService,
      DialogService,
      DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
