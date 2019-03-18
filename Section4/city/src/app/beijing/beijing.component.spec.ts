import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeijingComponent } from './beijing.component';

describe('BeijingComponent', () => {
  let component: BeijingComponent;
  let fixture: ComponentFixture<BeijingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeijingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeijingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
