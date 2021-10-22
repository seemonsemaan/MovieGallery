import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tv-show-category',
  templateUrl: './tv-show-category.component.html',
  styleUrls: ['./tv-show-category.component.scss']
})
export class TvShowCategoryComponent implements OnInit, OnChanges {
  @Input() category: number = 0;
  @Input() genres: any[] = [];

  tvGenre: any;

  tvs: any[] = [];

  constructor(private api: ApiService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.GetGenre(changes.genres.currentValue);
    // if (changes.genres.previousValue != changes.genres.currentValue) {
    // }
  }

  ngOnInit(): void {
  }

  GetGenre(g: any[]) {
    this.tvGenre = g.filter(g => g.id == this.category)[0];
    this.getTopTvs();
  }

  getTopTvs() {
    this.api.TvDiscover('sort_by=vote_average.desc&with_genres=' + this.tvGenre.id)
      .subscribe((response: any) => this.tvs = response.results.slice(0, 3));
  }

}
