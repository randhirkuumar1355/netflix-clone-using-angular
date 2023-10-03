import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, appRouting } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieService } from './services/movie.service';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    appRouting
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ SharedService, MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
