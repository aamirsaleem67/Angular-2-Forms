import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    onSubmit(form:NgForm){
       console.log(form.value.subscription);
 }
}
