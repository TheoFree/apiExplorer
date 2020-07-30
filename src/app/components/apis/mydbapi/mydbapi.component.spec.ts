import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydbapiComponent } from './mydbapi.component';

describe('MydbapiComponent', () => {
  let component: MydbapiComponent;
  let fixture: ComponentFixture<MydbapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydbapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydbapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
