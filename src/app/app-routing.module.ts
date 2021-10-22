import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatMovComponent } from './pages/cat-mov/cat-mov.component';
import { CatTvComponent } from './pages/cat-tv/cat-tv.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvDetailComponent } from './pages/tv-detail/tv-detail.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'tv-detail/:id', component: TvDetailComponent },
  { path: 'cat-mov/:id', component: CatMovComponent },
  { path: 'cat-tv/:id', component: CatTvComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
