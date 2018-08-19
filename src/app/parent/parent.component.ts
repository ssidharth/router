import { Component, OnInit,Input } from '@angular/core';
import {ParentserviceService} from '../parentservice.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers : [ ParentserviceService]
})
export class ParentComponent implements OnInit {
employees;
@Input() bycycle;
name="Sidharth";

  constructor(private employeeservice: ParentserviceService) { }

  ngOnInit() {
   this.employees=this.employeeservice.employee();
   console.log(this.employees);
  }

}
