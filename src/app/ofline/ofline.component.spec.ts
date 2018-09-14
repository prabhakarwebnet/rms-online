import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OflineComponent } from './ofline.component';

describe('OflineComponent', () => {
  let component: OflineComponent;
  let fixture: ComponentFixture<OflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
