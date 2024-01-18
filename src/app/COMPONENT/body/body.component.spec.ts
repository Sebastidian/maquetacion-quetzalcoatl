import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BODYComponent } from './body.component';

describe('BODYComponent', () => {
  let component: BODYComponent;
  let fixture: ComponentFixture<BODYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BODYComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BODYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
