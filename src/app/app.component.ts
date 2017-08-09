import { AppModule } from './app.module';
import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles: [`.myColor {color:white}`]
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {
  submitted=false;
 user={
   username:'',
   email:'',
   secretquestion:'',
   gender:''
 }

 @ViewChild('f') signupForm: NgForm;
 defaultQuestion:string="teacher";
 genders=['male','female'];
  constructor(){

  }
  ngOnInit(){
    
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
          username:suggestedName
      }
    });
  }
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted=true;
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.secretquestion=this.signupForm.value.secret;
    this.user.gender=this.signupForm.value.gender;

    this.signupForm.reset();
  }
 
}
