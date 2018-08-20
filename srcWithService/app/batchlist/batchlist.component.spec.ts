import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchlistComponent } from './batchlist.component';

describe('BatchlistComponent', () => {
  let component: BatchlistComponent;
  let fixture: ComponentFixture<BatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
