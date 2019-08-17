import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/root/app.component';
import { LinksComponent } from './components/profile/links/links.component';
import { BasicComponent } from './components/profile/basic/basic.component';
import { RepoListComponent } from './components/repos/repo-list/repo-list.component';
import { RepoItemComponent } from './components/repos/repo-item/repo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    BasicComponent,
    RepoListComponent,
    RepoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
