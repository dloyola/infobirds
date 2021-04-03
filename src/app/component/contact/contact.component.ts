import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  
  contactForm: FormGroup;
  submitted: boolean = false;
  sent: boolean = false;
  message: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newForm();
  }

  get contactFormControls(){
    return this.contactForm.controls;
  }

  newForm = () => this.contactForm = this.fb.group({
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  })

  resetForm = () => {
    this.contactForm.reset();
    this.submitted = false;
    this.sent = false;
  }

  onSubmit = () => {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.sent = true;
      this.message = `Hola ${this.contactForm.value.name}! tu mensaje fue enviado con exito.`;
      setTimeout(this.resetForm, 10000);
    } else {
      console.log("mensaje no enviado");
    }
  }
}