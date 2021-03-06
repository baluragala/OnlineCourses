import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoursesModule} from "./courses/courses.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
