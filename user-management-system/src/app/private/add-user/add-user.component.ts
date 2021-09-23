import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  newUserForm: any;

  constructor(private formBuilder: FormBuilder, private usersService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      name:[null, Validators.required],
      surname:[null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  createUser(){
    /* this.usersService.createUser(this.newUserForm.value).subscribe(response => {
      this.newUserForm.reset();
    }) */
    alert('User created!')
  }
  cancel() {
    this.router.navigate(['user']);
  }
}
