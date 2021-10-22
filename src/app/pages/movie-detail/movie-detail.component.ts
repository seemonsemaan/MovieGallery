import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id: number = 0;
  movie: any;

  imageBaseUrl = environment.imageBaseUrl;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getMovieDetails();
  }

  getMovieDetails(){
    this.api.GetMovieDetails(this.id).subscribe(response => this.movie = response);
    const movies: any[] = [];
  }

}
