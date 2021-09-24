import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //root level component will come in bootstrasp
})
export class AppModule { }
