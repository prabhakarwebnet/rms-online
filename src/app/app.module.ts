import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OnlineComponent } from './online/online.component';
import { OflineComponent } from './ofline/ofline.component';
import{HttpModule, Response} from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {UserService} from './user.service';
import { DownloadFormComponent } from './download-form/download-form.component';
// import { SubmitpropertyComponent } from './submitproperty/submitproperty.component';



const appRoutes: Routes = [
  {path: 'Home', component:HomeComponent},
  {path: 'Online', component:OnlineComponent},
  {path: 'Ofline', component: OflineComponent },
  {path: 'Download', component: DownloadFormComponent },
  // {path: 'submit', component: SubmitpropertyComponent },
  { path: '**', redirectTo: 'Home' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    OnlineComponent,
    OflineComponent,
    HomeComponent,
    DownloadFormComponent
    // SubmitpropertyComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    FormsModule,HttpModule, HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
