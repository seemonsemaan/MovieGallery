import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-cat-tv',
  templateUrl: './cat-tv.component.html',
  styleUrls: ['./cat-tv.component.scss']
})
export class CatTvComponent implements OnInit {
  id: number = 0;
  page: number = 0;
  tvs: any[]= [];

  totalPages: number = 0;
  
  movieGenres: any[] = [];
  tvGenres: any[] = [];

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.GetGenres('tv');
    this.page = 1
    this.getMovies(this.page);
  }
    
  getMovies(newPage: number) {
    this.tvs = [];
    this.api.TvDiscover('with_genres=' + this.id + '&page=' + newPage)
      .subscribe((response: any) => {
        this.totalPages = response.total_Pages;
        this.tvs = response.results
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
