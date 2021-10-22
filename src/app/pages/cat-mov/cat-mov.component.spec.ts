import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMovComponent } from './cat-mov.component';

describe('CatMovComponent', () => {
  let component: CatMovComponent;
  let fixture: ComponentFixture<CatMovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatMovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatMovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
