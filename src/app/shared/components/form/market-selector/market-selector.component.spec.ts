import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSelectorComponent } from './market-selector.component';

describe('MarketSelectorComponent', () => {
  let component: MarketSelectorComponent;
  let fixture: ComponentFixture<MarketSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
