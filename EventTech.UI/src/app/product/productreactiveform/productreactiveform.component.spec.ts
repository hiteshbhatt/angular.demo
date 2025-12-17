import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductreactiveformComponent } from './productreactiveform.component';

describe('ProductreactiveformComponent', () => {
  let component: ProductreactiveformComponent;
  let fixture: ComponentFixture<ProductreactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductreactiveformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
