import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description-evenement',
  templateUrl: './description-evenement.component.html',
  styleUrls: ['./description-evenement.component.css']
})
export class DescriptionEvenementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToInscription() {
    this.router.navigate(['/inscription-participant']);
  }

}
