import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { DeveloperComponent } from './developer/developer.component';
import { DataAnalystComponent } from './data-analyst/data-analyst.component';
import { TesterComponent } from './tester/tester.component';

const routes: Routes = [
 {component:LoginComponent,path:'login'},
 {component:RegisterComponent,path:'register'},
 {component:HomeComponent,path:'',canActivate:[AuthGuard]},
 {component:UserlistingComponent,path:'user',canActivate:[AuthGuard]},
{component:CustomerComponent,path:'customer',canActivate:[AuthGuard]},
{component:DeveloperComponent,path:'developer',canActivate:[AuthGuard]},
{component:DataAnalystComponent,path:'data_analyst',canActivate:[AuthGuard]},
{component:TesterComponent,path:'tester',canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
