import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CountriesComponent } from './countries/countries.component';
import { ServerCommunicationComponent } from './server-communication/server-communication.component';
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';
import { SearchDataComponent } from './search-data/search-data.component';
import { EnquiryComponent} from './enquiry/enquiry.component'
import { ObservableComponent } from './observable/observable.component';

const routes :Routes =[
  { 
    path: 'login', 
    component: LoginComponent ,
    canDeactivate:[CanDeactivateGuardService]
  },
  { 
    path: 'country', 
    component: CountriesComponent 
  },
  { 
    path: 'ServerCommunication', 
    component: ServerCommunicationComponent 
  },
  { 
    path: 'SearchData', 
    component: SearchDataComponent 
  },
  {
    path:'Enquiry',
    component:EnquiryComponent
  },
  {
    path:'Observable',
    component:ObservableComponent
  },
  {
    path: '**', 
    component: WelcomeComponent 
  }
]
//export default RouterModule.forRoot(routes);
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  providers: [
    CanDeactivateGuardService,
  ]
})


export class AppRoutingModule {
  
 }
