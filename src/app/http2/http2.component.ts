import { Http2servicesService } from './http2services.service';
import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-http2',
  templateUrl: './http2.component.html',
  styleUrls: ['./http2.component.css']
})
export class Http2Component implements OnInit {
 posts:any[];


  constructor(private service: Http2servicesService) {
   
   
  }

  ngOnInit() {
  this.service.getPosts().subscribe(response=>{
      this.posts=response.json()
      //console.log(response.json());
      },error=> {alert('An unexpected error occurred');
    console.log(alert)
    });
  }

  createpost(input:HTMLInputElement){
    let car:any={userfeed:input.value};
    input.value='';
    this.service.create(car).subscribe(response=>{
      car=response.json().id;

      this.posts.splice(0,0,car);
      console.log(response.json());

    },error=>{alert('An unexpected error occured');
    console.log(alert)
  });

  }

  updatepost(car){
    
    this.service.update(car).subscribe(response=>{
      console.log(response.json());
    },error=>{
      alert('An unexpected error occured');
      console.log(alert)
    });
  }

  deletepost(car){
   this.service.delete(car).subscribe(Response=>{
      let index= this.posts.indexOf(car);
      this.posts.splice(index,1);
    },error=>{
      alert('Án unexpected error occured');
      console.log(alert)
    });

  } 
}
