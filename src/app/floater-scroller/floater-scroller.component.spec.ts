import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloaterScrollerComponent } from './floater-scroller.component';

describe('FloaterScrollerComponent', () => {
  let component: FloaterScrollerComponent;
  let fixture: ComponentFixture<FloaterScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloaterScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloaterScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
