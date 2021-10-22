import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieGenres: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.GetGenres();
  }

  GetGenres() {
    this.api.GetGenres('movie').subscribe((response: any) => {
        this.movieGenres = response;
    })
  }
}
