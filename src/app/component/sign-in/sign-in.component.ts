import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinForm:FormGroup;
  loginBlock:boolean;
  forgotEmail:FormGroup;
  constructor(private router:Router, private fb: FormBuilder) {
    this.signinForm = fb.group({
      'username': [null,Validators.required],
      'password': [null,Validators.required],
      'remember': [false] 
    });
    this.forgotEmail = fb.group({
      'email': [null,Validators.required],
    });
   }

  ngOnInit() {
  }

  loginUser(formData:any){
    this.router.navigate(['coe']);
  }
}
