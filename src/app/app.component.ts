import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { OnlineComponent } from './online/online.component';
import { OflineComponent } from './ofline/ofline.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CetOnline';
}
