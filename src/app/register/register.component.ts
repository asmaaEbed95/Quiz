import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.form = fb.group ({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
