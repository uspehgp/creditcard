import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {DateFormControl} from "../date-form-control";
import {CardFormControl} from "../card-form-control";
import {CodeFormControl} from "../code-form-control";

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm: any = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new CardFormControl('', [Validators.required, Validators.minLength(19), Validators.maxLength(19)]),
    expiration: new DateFormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new CodeFormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form was submitted')
  }

  onReset() {
    this.cardForm.reset()
  }
}
