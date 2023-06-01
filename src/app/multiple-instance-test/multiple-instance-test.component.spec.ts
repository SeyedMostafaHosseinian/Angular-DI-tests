import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleInstanceTestComponent } from './multiple-instance-test.component';

describe('MultipleInstanceTestComponent', () => {
  let component: MultipleInstanceTestComponent;
  let fixture: ComponentFixture<MultipleInstanceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleInstanceTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleInstanceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
