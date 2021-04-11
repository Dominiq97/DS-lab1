import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ms: CrudService, private router: Router ) {
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

  addProduct(Name, Description, Quantity, Price) {
    const obj = {
      Name, Description, Quantity, Price
    }
    this.ms.create(obj);
    this.router.navigate(['products']);
  }

  ngOnInit(): void {
  }

}

