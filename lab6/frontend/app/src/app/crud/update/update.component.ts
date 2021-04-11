import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  angForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private cs: CrudService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Quantity: ['', Validators.required],
      Price: ['', Validators.required],
    });
  }

  update(Name, Description,  Quantity,Price) {
    this.route.params.subscribe(params => {
      const obj = {Name, Description,  Quantity,Price}
      this.cs.update(params.id, obj);
      this.router.navigate(['products']);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cs.editProduct(params[`id`]).subscribe(res => {
        this.product = res;
      });
    });
  }

}
