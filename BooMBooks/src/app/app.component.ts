import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { CreateComponent } from './create/create.component';
// import { UpdateComponent } from './update/update.component';
const $ = require( "jquery" )()
;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'
              ]
})
export class AppComponent {
  Data='';
  book='';
  myData=[];
  CreateNode!: { Title: string; Author: string; Publisher: string; };
  constructor(private http:HttpClient){
    
  }
  flag=false;
  title = 'BooMBooks';
  API_URL ="http://127.0.0.1:8000/search";
  changeflag(){
    this.flag=true;
    this.Data=''
  }

  createNode(d:{Title: string; Author: string; Publisher: string;}){
    this.CreateNode={
      Title:d.Title,
      Author:d.Author,
      Publisher:d.Publisher
    }
    

  }
  sendData() {
    this.flag=false
  return this.http.post(this.API_URL,this.Data).subscribe()
  }
  delete(){
    const id= ($(this).attr("#data-id"))
    console.log(id)
    return this.http.post("http://127.0.0.1:8000/delete",id).subscribe()
  }
  update(){

  }
}
