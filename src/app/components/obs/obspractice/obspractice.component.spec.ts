import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObspracticeComponent } from './obspractice.component';

describe('ObspracticeComponent', () => {
  let component: ObspracticeComponent;
  let fixture: ComponentFixture<ObspracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObspracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObspracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
