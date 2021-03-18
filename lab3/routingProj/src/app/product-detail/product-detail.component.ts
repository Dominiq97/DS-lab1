import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product = new Product(-1,"no Products");

  constructor(private productService:ProductService) { }

  ngOnInit(){
    this.productService.getProduct(1).subscribe((product:Product)=>{
      this.product = product;
    })
  }

}
