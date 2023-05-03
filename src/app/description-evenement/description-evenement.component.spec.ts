import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionEvenementComponent } from './description-evenement.component';

describe('DescriptionEvenementComponent', () => {
  let component: DescriptionEvenementComponent;
  let fixture: ComponentFixture<DescriptionEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
