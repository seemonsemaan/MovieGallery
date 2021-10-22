import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowCategoryComponent } from './tv-show-category.component';

describe('TvShowCategoryComponent', () => {
  let component: TvShowCategoryComponent;
  let fixture: ComponentFixture<TvShowCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
