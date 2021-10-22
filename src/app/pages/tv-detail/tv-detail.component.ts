import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {
  id: number = 0;
  tv: any;

  imageBaseUrl = environment.imageBaseUrl;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getTvDetails();
  }

  getTvDetails(){
    this.api.GetTvDetails(this.id).subscribe(response => this.tv = response);
    const movies: any[] = [];
  }
}
