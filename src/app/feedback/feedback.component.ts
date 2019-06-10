import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  private employeeData:any;
  @Input()
  public set empData(value) {
    this.employeeData = value;
  }
  constructor() {
   }

  ngOnInit() {
    console.log('input ata',this.employeeData)
  }

  

}
