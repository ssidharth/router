import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {enableProdMode} from '@angular/core';
@Component({
  selector: 'app-reactiveformssee',
  templateUrl: './reactiveformssee.component.html',
  styleUrls: ['./reactiveformssee.component.css']
})
export class ReactiveformsseeComponent implements OnInit {
form=new FormGroup({

  username:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('njj')])

});

get username(){
return this.form.get('username');
}
  constructor() { }

  ngOnInit() {
  }

}
