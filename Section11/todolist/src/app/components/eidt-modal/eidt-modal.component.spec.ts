import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtModalComponent } from './eidt-modal.component';

describe('EidtModalComponent', () => {
  let component: EidtModalComponent;
  let fixture: ComponentFixture<EidtModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EidtModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EidtModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
