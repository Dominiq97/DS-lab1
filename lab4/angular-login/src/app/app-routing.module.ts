import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component'
import {ProductListComponent} from './product-list/product-list.component'
import {ProductDetailComponent} from './product-detail/product-detail.component'
import {AdminComponent} from './admin/admin.component'
import {AuthGuard} from './auth.guard'


const routes: Routes = [{path: 'products', component:ProductListComponent},
{path:'product/:id', component:ProductDetailComponent},
{path:'',pathMatch:'full',redirectTo:'/login'},
{path:'login', component:LoginComponent},
{path:'admin', component:AdminComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
