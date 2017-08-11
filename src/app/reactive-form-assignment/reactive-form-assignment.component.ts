import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form-assignment',
  templateUrl: './reactive-form-assignment.component.html',
  styleUrls: ['./reactive-form-assignment.component.css']
})
export class ReactiveFormAssignmentComponent implements OnInit {
  

  projectForm: FormGroup;
  statuses=['stable','critical','finished'];
  constructor() { }

  ngOnInit() {
    this.projectForm= new FormGroup({
      name: new FormControl(null,[Validators.required],this.forbiddenNameAsync),
      email: new FormControl(null,Validators.required),
      status: new FormControl('critical')
    });
  }

  forbiddenName(control:FormControl): {[s:string]:boolean}{

    if(control.value==="Test"){
         return {"Not a valid project name":true};  
    }
    return null;
  
}

forbiddenNameAsync(control:FormControl):Promise<any>{
     const promise = new Promise(
       (resolve,reject) =>{
         setTimeout(()=>{
           if(control.value==="Test"){
            resolve({ 'Not a valid project name':true });
          }
          else{
            resolve(null);
          }
         },1500);
          
       }
     );
     return promise;
}

onSubmit(){
  console.log(this.projectForm.value);
}
}
