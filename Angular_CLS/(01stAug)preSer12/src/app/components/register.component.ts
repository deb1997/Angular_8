import { Component, OnInit } from '@angular/core';
import { FormGroup,
         FormControl,
         Validators } from "@angular/forms";
import { RegisterService } from "../services/register.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  private result:any;
  private employeeDetails:FormGroup;
  constructor(private _service:RegisterService) { 
    this.employeeDetails = new FormGroup({
        'fname':new FormControl("Naresh",[Validators.required,
                                    Validators.minLength(3),
                                    Validators.maxLength(6)]),
        'lname':new FormControl(),
        'email':new FormControl(),
        'mobile':new FormControl(),
        'age':new FormControl(),
        'dob':new FormControl(),
        'gender':new FormControl(),
        'city':new FormControl(),
        'country':new FormControl()
    })
  }
  ngOnInit() {
  }
  register():any{
      this._service.register(this.employeeDetails.value)
          .subscribe((posRes)=>{
              this.result = posRes;
          },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
              console.log("Client Side Error !!!");
            }else{
              console.log("Server Side Error !!!");
            }
          });
  };
};
