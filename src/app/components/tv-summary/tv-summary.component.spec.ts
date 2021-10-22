import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSummaryComponent } from './tv-summary.component';

describe('TvSummaryComponent', () => {
  let component: TvSummaryComponent;
  let fixture: ComponentFixture<TvSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
