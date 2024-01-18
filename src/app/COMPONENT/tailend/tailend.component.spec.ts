import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAILENDComponent } from './tailend.component';

describe('TAILENDComponent', () => {
  let component: TAILENDComponent;
  let fixture: ComponentFixture<TAILENDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TAILENDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TAILENDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
