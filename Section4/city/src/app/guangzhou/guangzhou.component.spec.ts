import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuangzhouComponent } from './guangzhou.component';

describe('GuangzhouComponent', () => {
  let component: GuangzhouComponent;
  let fixture: ComponentFixture<GuangzhouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuangzhouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuangzhouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
