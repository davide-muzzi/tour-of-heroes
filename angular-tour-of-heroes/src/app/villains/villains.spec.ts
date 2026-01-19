import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Villains } from './villains';

describe('Villains', () => {
  let component: Villains;
  let fixture: ComponentFixture<Villains>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Villains]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Villains);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
