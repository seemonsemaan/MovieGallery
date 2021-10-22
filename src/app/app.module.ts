import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieSummaryComponent } from './components/movie-summary/movie-summary.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { TvSummaryComponent } from './components/tv-summary/tv-summary.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { MovieCategoryComponent } from './components/movie-category/movie-category.component';
import { TvShowCategoryComponent } from './components/tv-show-category/tv-show-category.component';
import { TvDetailComponent } from './pages/tv-detail/tv-detail.component';
import { CatMovComponent } from './pages/cat-mov/cat-mov.component';
import { CatTvComponent } from './pages/cat-tv/cat-tv.component';
import { PagingComponent } from './components/paging/paging.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieSummaryComponent,
    MovieDetailComponent,
    TvSummaryComponent,
    MoviesComponent,
    TvShowsComponent,
    MovieCategoryComponent,
    TvShowCategoryComponent,
    TvDetailComponent,
    CatMovComponent,
    CatTvComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [HttpClientModule, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
