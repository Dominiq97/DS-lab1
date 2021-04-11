import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './crud/home/home.component';
import {DetailsComponent} from './crud/details/details.component'
import {CreateComponent} from './crud/create/create.component'
import {UpdateComponent} from './crud/update/update.component'



const routes: Routes = []


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
