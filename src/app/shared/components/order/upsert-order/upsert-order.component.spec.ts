import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertOrderComponent } from './upsert-order.component';

describe('UpsertOrderComponent', () => {
  let component: UpsertOrderComponent;
  let fixture: ComponentFixture<UpsertOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsertOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
