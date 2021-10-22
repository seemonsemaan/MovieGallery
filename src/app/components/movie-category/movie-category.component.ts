import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit, OnChanges {
  @Input() category: number = 0;
  @Input() genres: any[] = [];

  movieGenre: any;

  movies: any[] = [];

  constructor(private api: ApiService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.GetGenre(changes.genres.currentValue);
    // if (changes.genres.previousValue != changes.genres.currentValue) {
    // }
  }

  ngOnInit(): void {
  }

  GetGenre(g: any[]) {
    this.movieGenre = g.filter(g => g.id == this.category)[0];
    this.getTopMovies();
  }

  getTopMovies() {
    this.api.MovieDiscover('sort_by=vote_average.desc&with_genres=' + this.movieGenre.id)
      .subscribe((response: any) => this.movies = response.results.slice(0, 3));
  }

}
