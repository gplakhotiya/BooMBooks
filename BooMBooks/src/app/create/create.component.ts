import { Component, OnInit,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
@Output() Add=new EventEmitter<{Title:string,Author:string,Publisher:string}>()
  constructor() { }
  Title='';
  Author='';
  Publisher='';
  ngOnInit(): void {
  }
   create(){
      this.Add.emit({
        Title:this.Title,
        Author:this.Author,
        Publisher:this.Publisher
      })
   }

}
