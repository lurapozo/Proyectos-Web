import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincpalComponent } from './princpal.component';

describe('PrincpalComponent', () => {
  let component: PrincpalComponent;
  let fixture: ComponentFixture<PrincpalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincpalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
