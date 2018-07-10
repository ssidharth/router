import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { InbuilddirectiveComponent } from './inbuilddirective/inbuilddirective.component';
import { ReactiveformsseeComponent } from './reactiveformssee/reactiveformssee.component';
import {HttpModule} from '@angular/http';
import { Http2Component } from './http2/http2.component';
import { Http2servicesService } from './http2/http2services.service';
import { NgifComponent } from './ngif/ngif.component';
//import { CalciComponent } from './calci/calci.component';
import {Routes, RouterModule} from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { PostComponent } from './post/post.component';



const routes = [{path:'post',Component: PostComponent},{path:'to-do-list',
Component : ToDoListComponent} ];
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    InbuilddirectiveComponent,
    ReactiveformsseeComponent,
    PostComponent,
    Http2Component,
    NgifComponent,
    ToDoListComponent,
    //CalciComponent,
  ],
    
  
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot(routes)
  ],
  providers: [Http2servicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
