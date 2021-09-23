import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    pathMatch: 'full'
  },
  {
    path: 'user/create',
    component: AddUserComponent,
    pathMatch: 'full'
  },
  {
    path: 'user/:user_id',
    component: EditUserComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
