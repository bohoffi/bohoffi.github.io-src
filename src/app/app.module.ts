import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './components/root/app.component';
import { LinksComponent } from './components/profile/links/links.component';
import { BasicComponent } from './components/profile/basic/basic.component';
import { RepoListComponent } from './components/repos/repo-list/repo-list.component';
import { RepoItemComponent } from './components/repos/repo-item/repo-item.component';
import { RepoNamePipe } from './pipes/repo-name.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    BasicComponent,
    RepoListComponent,
    RepoItemComponent,
    RepoNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatBadgeModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
