import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Http2servicesService {
  private url='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:Http) {}

  
    getPosts(){
     return this.http.get(this.url);
    }
   
create(car ){
    return this.http.post(this.url,JSON.stringify(car));
}
 
update(car){
  return this.http.put(this.url + '/' + car.id,JSON.stringify(car));
}
delete(car){
  return this.http.delete(this.url + '/'+ car.id);
}
}
