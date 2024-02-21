import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// C:\Users\DAY\chattingnew2\src\app\home
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AppComponent, HomeComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
