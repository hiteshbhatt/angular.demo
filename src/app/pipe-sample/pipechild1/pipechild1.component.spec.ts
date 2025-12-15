import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipechild1Component } from './pipechild1.component';

describe('Pipechild1Component', () => {
  let component: Pipechild1Component;
  let fixture: ComponentFixture<Pipechild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipechild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pipechild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
