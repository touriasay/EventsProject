import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotreMissionComponent } from './notre-mission/notre-mission.component';
import { ConnexionAdminServiceComponent } from './connexion-admin-service/connexion-admin-service.component';
import {BackOfficeComponent} from "./back-office/back-office.component";
import {RechercherEvenementComponent} from "./rechercher-evenement/rechercher-evenement.component";
import {CreerEvenementComponent} from "./creer-evenement/creer-evenement.component";
import {ListeParticipantsComponent} from "./liste-participants/liste-participants.component";
import {DescriptionEvenementComponent} from "./description-evenement/description-evenement.component";
import {HomeAppliComponent} from "./home-appli/home-appli.component";
import {InscriptionParticipantComponent} from "./inscription-participant/inscription-participant.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";


const routes: Routes = [
  { path: '', redirectTo: '/home-appli', pathMatch: 'full' },
  { path: 'home-appli', component: HomeAppliComponent },
  { path: 'notre-mission', component: NotreMissionComponent },
  { path: 'connexion-admin-service', component: ConnexionAdminServiceComponent },
  { path: 'back-office', component: BackOfficeComponent },
  { path: 'rechercher-evenement', component: RechercherEvenementComponent },
  { path: 'creer-evenement', component: CreerEvenementComponent },
  { path: 'liste-participants', component: ListeParticipantsComponent },
  { path: 'description-evenement', component: DescriptionEvenementComponent },
  { path: 'inscription-participant', component: InscriptionParticipantComponent },
  { path: 'formulaire', component:FormulaireComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
