import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: any;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  navigateTo(nav: string) {
    /* As we don`t have backend and database, we navigate user. 
    Otherwise, we would implement authentification and authorisation regulary */
    this.router.navigate([nav])
  }
}
