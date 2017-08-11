
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormAssignmentComponent } from './reactive-form-assignment/reactive-form-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentFormComponent,
    ReactiveFormComponent,
    ReactiveFormAssignmentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
