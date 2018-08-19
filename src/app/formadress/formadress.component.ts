import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formadress',
  templateUrl: './formadress.component.html',
  styleUrls: ['./formadress.component.css']
})
export class FormadressComponent implements OnInit {
  onclick(value){
     console.log(value);

   }
  constructor() {

   }

  ngOnInit() {
  }

}
