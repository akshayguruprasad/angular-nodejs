import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloaterMenuComponent } from './floater-menu.component';

describe('FloaterMenuComponent', () => {
  let component: FloaterMenuComponent;
  let fixture: ComponentFixture<FloaterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloaterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloaterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
