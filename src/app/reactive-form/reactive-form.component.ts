import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  signupForm: FormGroup;
  genders:string[]=['male','female'];
  forbiddenUserNames:string[]=['Aamir','Hamza'];
  constructor() { }

  ngOnInit() {
    this.signupForm=new FormGroup({
      userData: new FormGroup(
        {
      'username': new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required],this.forbiddenEmail),
        }
      ),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges
    // .subscribe(
    //   (value)=>{
    //     console.log(value)
    //   }
    // );
    // this.signupForm.statusChanges
    // .subscribe(
    //   (value)=>{
    //     console.log(value);
    //   }
    // );

    this.signupForm.setValue({
       userData: 
        {
      'username': 'Aamir',
      'email': 'naeemmalik@gmail.com'
        }
      ,
      'gender': 'male',
      'hobbies': []
    });

     this.signupForm.patchValue({
        'userData':{
            'username':'Naeem'
        }
  });

  }
 

  onSubmit(){
            console.log(this.signupForm);
        //  console.log(this.signupForm.get('hobbies'));

        //reset the form
        this.signupForm.reset({
           'gender':'female'
        });

  }

  onAddHobby(){
     const control = new FormControl(null,Validators.required);
     (<FormArray>this.signupForm.get('hobbies')).push(control); 
  }
  
  forbiddenNames(control:FormControl): {[s:string]:boolean}{
    if(this.forbiddenUserNames.indexOf(control.value)!==-1){
                   return {"forbidden":true};

    }
    return null;

  }
  
  forbiddenEmail(control:FormControl) : Promise<any> | Observable<any>{
          
          const promise = new Promise<any>((resolve,reject)=>{
            setTimeout(()=>{
              if(control.value ==='aamirsaleem167@gmail.com')
              {
                resolve({'emailIsForbidden':true});
              }
              else{
                resolve(null);
              }
            },1500);
          });
          return promise;
  }

}
