import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempcComponent } from './tempc.component';

describe('TempcComponent', () => {
  let component: TempcComponent;
  let fixture: ComponentFixture<TempcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
