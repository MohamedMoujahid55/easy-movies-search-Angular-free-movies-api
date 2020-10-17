import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : "" , 
    component : HomeComponent
  },
  /*{
    path : "details/:title" , 
    component : DetailsComponent
  },*/
  
  {
    path : "results/:searchbytitle" , 
    component : DetailsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
