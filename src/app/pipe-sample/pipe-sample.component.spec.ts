import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipleSampleComponent } from './pipe-sample.component';

describe('PipleSampleComponent', () => {
  let component: PipleSampleComponent;
  let fixture: ComponentFixture<PipleSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipleSampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PipleSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
