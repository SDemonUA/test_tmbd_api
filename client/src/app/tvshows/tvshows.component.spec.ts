import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsComponent } from './tvshows.component';

describe('TvshowsComponent', () => {
  let component: TvShowsComponent;
  let fixture: ComponentFixture<TvShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});