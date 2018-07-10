import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
    // email="singhsidharth.03@gmail.com";
// onclick(x){
// console.log("email is" + x );

onclick(x){
  console.log("email is" + x );
}

  constructor() { }

  ngOnInit() {
  }

}
