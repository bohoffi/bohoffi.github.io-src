import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/root/app.component';
import { LinksComponent } from './components/profile/links/links.component';
import { BasicComponent } from './components/profile/basic/basic.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
