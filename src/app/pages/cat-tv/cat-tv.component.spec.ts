import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTvComponent } from './cat-tv.component';

describe('CatTvComponent', () => {
  let component: CatTvComponent;
  let fixture: ComponentFixture<CatTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
