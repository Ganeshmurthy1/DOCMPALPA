import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOfInterestComponent } from './item-of-interest.component';

describe('ItemOfInterestComponent', () => {
  let component: ItemOfInterestComponent;
  let fixture: ComponentFixture<ItemOfInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOfInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOfInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
