import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { AboutComponent } from './My_Application/dashbord/about/about.component';
import { BagsComponent } from './My_Application/dashbord/bags/bags.component';
import { CartpageComponent } from './My_Application/dashbord/cartpage/cartpage.component';
import { DashbordComponent } from './My_Application/dashbord/dashbord.component';
import { GlassesComponent } from './My_Application/dashbord/glasses/glasses.component';
import { HeadphonesComponent } from './My_Application/dashbord/headphones/headphones.component';
import { LoginComponent } from './My_Application/dashbord/login/login.component';
import { MainComponent } from './My_Application/dashbord/main/main.component';
import { PAYMENTComponent } from './My_Application/dashbord/payment/payment.component';
import { RegisterComponent } from './My_Application/dashbord/register/register.component';
import { ShoesComponent } from './My_Application/dashbord/shoes/shoes.component';
import { TermsComponent } from './My_Application/dashbord/terms/terms.component';
import { TestComponent } from './My_Application/dashbord/test/test.component';
import { WatchComponent } from './My_Application/dashbord/watch/watch.component';


const routes: Routes = [
{
  path:'main',
  component: MainComponent
},

{
  path:'about',
  component: AboutComponent
},
{
  path:'PAYMENT',
  component: PAYMENTComponent
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'terms',
  component: TermsComponent
},
{
  path:'bags',
  component : BagsComponent
},
{
  path:'watch',
  component:WatchComponent
},
{
  path:'shoes',
  component:ShoesComponent
},
{
  path:'headphones',
  component:HeadphonesComponent
},
{
  path:'glasses',
  component:GlassesComponent
},
{
  path:"cartpage",
  component:CartpageComponent
},
{
path: 'test',
component:TestComponent

}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
