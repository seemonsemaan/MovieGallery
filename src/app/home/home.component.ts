import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topMovies: any[] = [];
  topTvs: any[] = [];

  movieGenres: any[] = [];
  tvGenres: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getTopMovies();
    this.GetTopTvs();
    this.GetGenres('movie');
    this.GetGenres('tv');
  }

  getTopMovies() {
    this.api.getTopMovies().subscribe((response: any) => this.topMovies = response.results)
  }

  GetTopTvs() {
    this.api.GetTopTv().subscribe((response: any) => this.topTvs = response.results)
  }

  GetGenres(type: string) {
    this.api.GetGenres(type).subscribe((response: any) => {
      
      if (type == 'movie') {
        this.movieGenres = response;
      }
      else if (type == 'tv') {
        this.tvGenres = response;
      }
    })
  }

}
