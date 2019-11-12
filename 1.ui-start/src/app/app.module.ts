import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatService } from './shared/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [BrowserModule],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
