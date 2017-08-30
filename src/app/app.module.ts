import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Screen1Component } from './screen-1/screen-1.component';
import { Screen2Component } from './screen-2/screen-2.component';
import { Screen3Component } from './screen-3/screen-3.component';
import { Screen4Component } from './screen-4/screen-4.component';
import { Screen5Component } from './screen-5/screen-5.component';
import { Screen6Component } from './screen-6/screen-6.component';

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component,
    Screen5Component,
    Screen6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
