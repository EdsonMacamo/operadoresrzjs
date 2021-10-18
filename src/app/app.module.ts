import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { BasicCreationsComponent } from './basic-creations/basic-creations.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicCreationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
