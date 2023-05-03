import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion-admin-service',
  templateUrl: './connexion-admin-service.component.html',
  styleUrls: ['./connexion-admin-service.component.css']
})
export class ConnexionAdminServiceComponent {
  constructor(private router: Router) {}
  login() {
    this.router.navigate(['/back-office']);
  }

}
