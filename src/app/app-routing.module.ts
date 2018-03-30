import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { CoeComponent } from './component/coe/coe.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
 
const routes: Routes = [
 
    { path: '', pathMatch: 'full', redirectTo: 'signin'},   
    { path: 'signin', component: SignInComponent },
    { path: 'coe', component: CoeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
