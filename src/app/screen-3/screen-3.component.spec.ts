import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen3Component } from './screen-3.component';

describe('Screen3Component', () => {
  let component: Screen3Component;
  let fixture: ComponentFixture<Screen3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
