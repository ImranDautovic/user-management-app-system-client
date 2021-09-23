import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { users } from '../mock-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  allUsers: any;
  searchString: string = '';

  constructor(
    private userService: UserService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    /* When connected to backend, uncomment following code */
    /* this.userService.getUsers().subscribe((response) => {
      this.allUsers = response.data;
    }) */
    this.allUsers = users;
  }

  editUser(user_id:number){
    console.log(user_id);
    this.router.navigate([`user/${user_id}`]);
  }

  createUser(){
    this.router.navigate([`user/create`]);
  }

  filteredUsers() {
    if (this.searchString.length > 0) {
      return this.allUsers.filter((user:any) => user.name.toLowerCase().includes(this.searchString.toLowerCase()) || 
      user.surname.toLowerCase().includes(this.searchString.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchString.toLowerCase()))
    } else {
      return this.allUsers;
    }
  }

}
