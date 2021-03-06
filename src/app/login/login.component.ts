import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable }    from 'rxjs';
import { DialogService } from '../services/dialog.service';
import { Router } from '@angular/router'

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _dialogService:DialogService,
    public router:Router) { }
  ngOnInit() { }

  loginData: any = {};
  public UserName: string;
  public Password: string;
  public RememberMe: boolean;
  public bgcolor: string = '';

  /**
   * validateLogin : check user valid or not
   */
  public validateLogin(loginData): void {
    if (loginData.UserName == 'test' && loginData.Password == 'test') {
     this.bgcolor = 'green';
     this.router.navigate(['./country']);
    }
    else {
      this.bgcolor = 'red';
    }
    console.log(loginData);
  }

  canDeactivate(): Observable<boolean> | boolean {
    
  //  return this._dialogService.confirm('Navigationg Away?');
  return this._dialogService.confirmbox();

} 
}
