import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfoodComponent } from './displayfood.component';

describe('DisplayfoodComponent', () => {
  let component: DisplayfoodComponent;
  let fixture: ComponentFixture<DisplayfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayfoodComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});