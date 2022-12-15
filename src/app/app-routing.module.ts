import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoperComponent } from './components/stoper/stoper.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path: "stoper", component: StoperComponent},
  {path: "usersList", component: UsersListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
