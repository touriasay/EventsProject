import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionAdminServiceComponent } from './connexion-admin-service.component';

describe('ConnexionAdminServiceComponent', () => {
  let component: ConnexionAdminServiceComponent;
  let fixture: ComponentFixture<ConnexionAdminServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionAdminServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionAdminServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
