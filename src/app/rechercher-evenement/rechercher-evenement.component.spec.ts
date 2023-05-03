import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherEvenementComponent } from './rechercher-evenement.component';

describe('RechercherEvenementComponent', () => {
  let component: RechercherEvenementComponent;
  let fixture: ComponentFixture<RechercherEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
