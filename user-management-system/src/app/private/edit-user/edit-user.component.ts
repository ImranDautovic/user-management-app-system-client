import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { users } from '../mock-users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user:any;
  user_id:any;
  users = users;
  editUserForm: any;

  constructor(private formBuilder: FormBuilder, private currentRoute: ActivatedRoute, private router: Router, private usersService: UserService) { }

  ngOnInit(): void {
    this.getUserId();
  }

  getUserId(){
    console.log(this.currentRoute);
    this.currentRoute.params.subscribe(params => {
      this.user_id = params.user_id;
      this.getUserById(this.user_id);
    })
  }

  getUserById(user_id:any){
    /* this.usersService.getUserById(user_id).subscribe(response => {
      this.user = response.data[0];
    }) */
    this.user = this.users.find((user) => user.id == user_id);
    this.createForm();
  }

  createForm() {
    this.editUserForm = this.formBuilder.group(this.user)
  }
  
  clearForm() {
    this.editUserForm = this.formBuilder.group({
      name:[null, Validators.required],
      surname:[null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  updateUser(){
    /* this.usersService.updateUser(this.user).subscribe(response => {
    }) */
    alert('User updated.');
  }

  deleteUser(){
     /* this.usersService.deleteUser(this.user_id).subscribe(response => {
    }) */
    if (confirm('Are you sure?')) {
      alert('User deleted!');
      this.router.navigate(['user'])
    }
   }
}
