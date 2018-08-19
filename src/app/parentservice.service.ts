import { Injectable } from '@angular/core';

@Injectable()
export class ParentserviceService {
  employee(){
  return [
  {
    name:"Sidharth",
  class:"B" ,
  Roll : "12",
  place:"Pune"
  },

{name: "Rahul",
class:"C",
Roll: "13",
place:"chennai"
}
  ]
}
skills(){
  return[{
    play2:"basketball", 
    play1:"Cricket"
  },
  {
    playA:"basket", 
    playB:"Crick"
  }
  ]
}
  
  constructor() { }

}
