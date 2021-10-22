import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tv-summary',
  templateUrl: './tv-summary.component.html',
  styleUrls: ['./tv-summary.component.scss']
})
export class TvSummaryComponent implements OnInit, OnChanges {
  @Input() item: any;
  @Input()
  genres: any[] = [];

  imageBaseUrl = environment.imageBaseUrl;
  genresString: string = '';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    let genreNames: string[] = [];
    for (let index = 0; index < this.item.genre_Ids.length; index++) {
      const element = this.item.genre_Ids[index];
      if (this.genres != null) {
        const genre = this.genres.filter(g => g.id == element)[0];
        if (genre != null)
          genreNames.push(genre.name);
      }
    }
    this.genresString = genreNames.join(', ');
  }

  ngOnInit(): void {
  }
}
