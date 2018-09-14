import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-ofline',
  templateUrl: './ofline.component.html',
  styleUrls: ['./ofline.component.css']
})
export class OflineComponent implements OnInit {

  form: FormGroup;
  form1: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      mobile: [null, Validators.required]
    });

    this.form1 = this.formBuilder.group({
      otp: [null, Validators.required]
    });
  }
}
