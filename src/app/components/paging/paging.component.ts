import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  @Input() page: number = 0;
  @Input() maxNum: number = 0;

  @Output() goToEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  goToPage(newPage: number){
    this.goToEvent.emit(newPage);
  }
}
