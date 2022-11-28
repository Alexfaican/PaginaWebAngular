import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from 'src/app/components/componente1/comp1/comp1.component';
import { Comp2Component } from 'src/app/components/componente2/comp2/comp2.component';
import { Comp3Component } from 'src/app/components/componente3/comp3/comp3.component';
import { Comp4Component } from 'src/app/components/componente4/comp4/comp4.component';


const routes: Routes = [
  {
    path: '', component: Comp1Component
  },
  {
    path: 'web2', component: Comp2Component
  },
  {
    path: 'web3', component: Comp3Component
  },
  {
    path: 'web4', component: Comp4Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
