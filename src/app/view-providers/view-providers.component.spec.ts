import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProvidersComponent } from './view-providers.component';

describe('ViewProvidersComponent', () => {
  let component: ViewProvidersComponent;
  let fixture: ComponentFixture<ViewProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
