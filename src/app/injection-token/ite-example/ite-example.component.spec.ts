import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteExampleComponent } from './ite-example.component';

describe('IteExampleComponent', () => {
  let component: IteExampleComponent;
  let fixture: ComponentFixture<IteExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
