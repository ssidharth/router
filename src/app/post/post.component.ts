import { Component, OnInit,Input } from '@angular/core';
import { ParentserviceService } from '../parentservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[ ParentserviceService]
})
export class PostComponent implements OnInit {
 @Input() car;
 
 skills;
  constructor(private skillservice:ParentserviceService ) { }

  ngOnInit() {
    this.skills=this.skillservice.skills();
    console.log(this.skills);

  }

}
