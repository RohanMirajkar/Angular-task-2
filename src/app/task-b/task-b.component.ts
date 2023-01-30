import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-b',
  templateUrl: './task-b.component.html',
  styleUrls: ['./task-b.component.css']
})
export class TaskBComponent implements OnInit {
  myFrom !: FormGroup;
  selected: string = '';
  email : FormControl = new FormControl('',[Validators.required , Validators.email]);
  phNumber : FormControl = new FormControl('' , [Validators.required])
  constructor() { }

  ngOnInit(): void {
    this.myFrom = new FormGroup({
      fName : new FormControl('', [Validators.required]),
      lName : new FormControl('', [Validators.required]),
      contactMethod : new FormControl(false , [Validators.required])
    })
  }

  submit(){
    console.log(this.myFrom.value)
  }
  contactMethod(e : any){
    this.selected = e.value;
    if(this.selected == 'email'){
      this.myFrom.removeControl('phNumber')
      this.myFrom.addControl('email' , this.email)
     }else if(this.selected == 'phone'){
      this.myFrom.removeControl('email')
      this.myFrom.addControl('phNumber' , this.phNumber);
     }
  }
}
