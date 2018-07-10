import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-inbuilddirective',
  templateUrl: './inbuilddirective.component.html',
  styleUrls: ['./inbuilddirective.component.css']
})
export class InbuilddirectiveComponent implements OnInit {


  constructor(public el:ElementRef) { }

  @HostListener('click') onclick(){
    let value:string=this.el.nativeElement.value;
    this.el.nativeElement.value=value.toUpperCase();
  }

  ngOnInit() {
  }

}
