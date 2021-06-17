import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { HeaderComponent } from './header/header.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { ReviewListComponent } from './review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieEditComponent,
    HeaderComponent,
    ReviewEditComponent,
    ReviewListComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
