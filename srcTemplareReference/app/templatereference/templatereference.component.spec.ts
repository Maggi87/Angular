import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatereferenceComponent } from './templatereference.component';

describe('TemplatereferenceComponent', () => {
  let component: TemplatereferenceComponent;
  let fixture: ComponentFixture<TemplatereferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatereferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatereferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
