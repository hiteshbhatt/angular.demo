import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipechild2Component } from './pipechild2.component';

describe('Pipechild2Component', () => {
  let component: Pipechild2Component;
  let fixture: ComponentFixture<Pipechild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipechild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pipechild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
