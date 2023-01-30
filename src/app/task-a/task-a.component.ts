import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-a',
  templateUrl: './task-a.component.html',
  styleUrls: ['./task-a.component.css']
})
export class TaskAComponent implements OnInit {
  myForm !: FormGroup;
  selected = '';
  email : FormControl = new FormControl('',[Validators.required , Validators.email]);
  phNumber : FormControl = new FormControl('' , [Validators.required])

  ngOnInit(): void {
    this.myForm = new FormGroup({
      fName : new FormControl('', [Validators.required]),
      lName : new FormControl('', [Validators.required]),
      contactMethod : new FormControl('' ,[Validators.required])
    });
  }

  contactMethod(){
    console.log(this.selected)
   if(this.selected == 'email'){
    this.myForm.removeControl('phNumber')
    this.myForm.addControl('email' , this.email)
   }else if(this.selected == 'phone'){
    this.myForm.addControl('phNumber' , this.phNumber);
    this.myForm.removeControl('email')
   }
  }

  submit(){
    console.log(this.myForm.value);
  }

}
