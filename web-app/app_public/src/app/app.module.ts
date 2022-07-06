import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtworkDetailsComponent } from './artwork-details/artwork-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtworkDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ArtworkDetailsComponent]
})
export class AppModule { }
