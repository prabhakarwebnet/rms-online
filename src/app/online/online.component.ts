import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../online/user.model';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})




export class OnlineComponent implements OnInit {

  user: User = new User();
  form: FormGroup;
  

  constructor(private router: Router, private userService: UserService,private formBuilder: FormBuilder) {

  }


 
  ngOnInit() {
   
  }


  createUser(): void {
    this.userService.createUser(this.user)
       .subscribe( data => {
          alert("User created successfully.");
      });

     

      }
       



  
}