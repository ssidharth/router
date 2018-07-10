import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
// settle=true;
// public call(){
// this.settle=!this.settle;
// }
  // exists=true;
  // call(){
  //   this.exists = !this.exists;
  // }

posts:any[];


  constructor(http: Http) {
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response=>{
      this.posts=response.json();
console.log(response.json());

    })
   }

  ngOnInit() {
  }

}
