import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchdetailsComponent } from './batchdetails.component';

describe('BatchdetailsComponent', () => {
  let component: BatchdetailsComponent;
  let fixture: ComponentFixture<BatchdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
