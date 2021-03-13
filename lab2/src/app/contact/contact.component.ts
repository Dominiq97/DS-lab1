import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  contactName = '';
  contactAddress = '';
  isDeleted = false;
  date = new Date();
  myPicker = '';
  contactSource='';
  contactGender=new Boolean;

  ngOnInit(): void {
  }

  saveContact(){}

}
