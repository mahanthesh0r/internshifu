import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [AuthGuard]
    
  },
 {
   path: 'sign-up',
   component: SignUpComponent,
   //canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  }
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  declarations: [],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = 
                                  [ NavbarComponent, 
                                    HomeComponent, 
                                    SignUpComponent, 
                                    LoginComponent, 
                                    FooterComponent,
                                    DetailComponent,
                                    UserProfileComponent]
