import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-cat-mov',
  templateUrl: './cat-mov.component.html',
  styleUrls: ['./cat-mov.component.scss']
})
export class CatMovComponent implements OnInit {
  id: number = 0;
  page: number = 0;
  movies: any[]= [];

  totalPages: number = 0;
  
  movieGenres: any[] = [];
  tvGenres: any[] = [];

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.GetGenres('movie');
    this.page = 1
    this.getMovies(this.page);
  }
    
  getMovies(newPage: number) {
    this.movies = [];
    this.api.MovieDiscover('with_genres=' + this.id + '&page=' + newPage)
      .subscribe((response: any) => {
        this.totalPages = response.total_Pages;
        this.movies = response.results
      });
  }

  goToPage(newPage: number) {
    this.page = newPage;
    this.getMovies(this.page);
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
