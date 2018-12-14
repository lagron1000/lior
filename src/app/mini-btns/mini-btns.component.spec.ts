import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniBtnsComponent } from './mini-btns.component';

describe('MiniBtnsComponent', () => {
  let component: MiniBtnsComponent;
  let fixture: ComponentFixture<MiniBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
