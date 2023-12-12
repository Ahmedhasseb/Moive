import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneComponent } from './hone.component';

describe('HoneComponent', () => {
  let component: HoneComponent;
  let fixture: ComponentFixture<HoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoneComponent]
    });
    fixture = TestBed.createComponent(HoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
