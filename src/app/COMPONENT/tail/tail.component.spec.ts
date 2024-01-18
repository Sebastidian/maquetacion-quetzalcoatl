import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAILComponent } from './tail.component';

describe('TAILComponent', () => {
  let component: TAILComponent;
  let fixture: ComponentFixture<TAILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TAILComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TAILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
