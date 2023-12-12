import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVshowesComponent } from './tvshowes.component';

describe('TVshowesComponent', () => {
  let component: TVshowesComponent;
  let fixture: ComponentFixture<TVshowesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TVshowesComponent]
    });
    fixture = TestBed.createComponent(TVshowesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
