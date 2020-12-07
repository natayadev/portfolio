import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesroutesComponent } from './slidesroutes.component';

describe('SlidesroutesComponent', () => {
  let component: SlidesroutesComponent;
  let fixture: ComponentFixture<SlidesroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
