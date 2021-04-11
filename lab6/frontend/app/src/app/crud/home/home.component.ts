import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {CrudService} from '../crud.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  products: Product[]=[];

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.getAll().subscribe((data:Product[])=>{
      console.log(data);
      this.products= data;
    })
  }

}
