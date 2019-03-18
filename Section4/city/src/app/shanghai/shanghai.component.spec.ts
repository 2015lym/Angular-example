import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShanghaiComponent } from './shanghai.component';

describe('ShanghaiComponent', () => {
  let component: ShanghaiComponent;
  let fixture: ComponentFixture<ShanghaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShanghaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShanghaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
