import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipSelfComponent } from './skip-self.component';

describe('SkipSelfComponent', () => {
  let component: SkipSelfComponent;
  let fixture: ComponentFixture<SkipSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipSelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
