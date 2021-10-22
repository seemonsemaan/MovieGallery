import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tvGenres: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.GetGenres();
  }

  GetGenres() {
    this.api.GetGenres('tv').subscribe((response: any) => {
        this.tvGenres = response;
    })
  }
}
