import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})

export class EnquiryComponent implements OnInit {

  private isDisable:boolean=true;
  private firstName:string='test';
  private tag:string="<button></button>";
  private empData:any=[{}]
  private resultEmpData:any;
  private isSubmit:boolean=false;
  constructor(private dataService:DataService) { 
   
  }

  ngOnInit() {
  }

  toggaleEnable()
  {
    if(this.isDisable==true){
      this.isDisable=false;
    }
    else {
      this.isDisable=true;
    }
  }

  onSubmit()
  {
    this.isSubmit = true;
    this.resultEmpData = this.empData;
   // return JSON.stringify(this.empData); 
  }
 // TODO: Remove this when we're done
 get diagnostic() { return JSON.stringify(this.empData); }
}
