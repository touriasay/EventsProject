 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeAppliComponent } from './home-appli/home-appli.component';
import { NotreMissionComponent } from './notre-mission/notre-mission.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionAdminServiceComponent } from './connexion-admin-service/connexion-admin-service.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { CreerEvenementComponent } from './creer-evenement/creer-evenement.component';
 import {FormsModule} from "@angular/forms";
import { DescriptionEvenementComponent } from './description-evenement/description-evenement.component';
import { InscriptionParticipantComponent } from './inscription-participant/inscription-participant.component';
import { ListeParticipantsComponent } from './liste-participants/liste-participants.component';
import { RechercherEvenementComponent } from './rechercher-evenement/rechercher-evenement.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppliComponent,
    NotreMissionComponent,
    ConnexionAdminServiceComponent,
    BackOfficeComponent,
    CreerEvenementComponent,
    DescriptionEvenementComponent,
    InscriptionParticipantComponent,
    ListeParticipantsComponent,
    RechercherEvenementComponent,
    EnTeteComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
