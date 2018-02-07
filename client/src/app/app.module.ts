import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbSidebarService, NbSpinnerService } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvShowDetailsComponent } from './tvshow-details/tvshow-details.component';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tvshows/tvshows.component';
import { MovieDbService } from './movie-db.service';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    TvShowDetailsComponent,
    SearchComponent,
    MoviesComponent,
    TvShowsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule, NbSidebarModule,
    AppRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [NbSidebarService, MovieDbService, NbSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
