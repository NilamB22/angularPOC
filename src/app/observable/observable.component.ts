import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  private ob:any;
  private mypromise:Promise<string>

  constructor() { 
    this.test();
  }
  ngOnInit() {
    console.log("observable intitalized");

  }

  test()
  {
    this.ob= Observable.create((observer)=>
    {
      observer.next('Hello');
      observer.next('World');
    });
    this.mypromise = new Promise(
      (resolve,reject)=>{
        resolve('Hello')
        resolve('World')
    })

    console.log("LISTEN PROMISE AND OBSERVER");
    this.mypromise.then(
      data=>{
        console.log("promise : -",data);
      }
    )
    this.ob.subscribe(
      data=>{
        console.log("Observable : -",data);
      }
    )
  }
  

}
