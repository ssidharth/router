import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  register=FormGroup;
genders=[ {id:'1',value:'male'},{id:'2',value:'female'},{id:'3',value:'male2'}];

  constructor() { }
  
  Onsubmit(f){
  console.log(f);
}
  ngOnInit() {
  }

}
