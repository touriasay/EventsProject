import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-participants',
  templateUrl: './liste-participants.component.html',
  styleUrls: ['./liste-participants.component.css']
})
export class ListeParticipantsComponent {

  participants = [
    { nom: 'Doe', prenom: 'John' },
    { nom: 'Smith', prenom: 'Jane' }
    // Ajouter plus de participants récupérés de la base de données
  ];

  toggleEdit() {
    const table = document.getElementsByTagName('table')[0];
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      for (let j = 0; j < cells.length - 1; j++) {
        if (cells[j].getAttribute('contenteditable') === 'true') {
          cells[j].setAttribute('contenteditable', 'false');
        } else {
          cells[j].setAttribute('contenteditable', 'true');
        }
      }
    }

    const editButton = document.getElementsByClassName('edit-button')[0];
    if (editButton.innerHTML === 'Editer liste participants') {
      editButton.innerHTML = 'Enregistrer changements';
    } else {
      editButton.innerHTML = 'Editer liste participants';
    }
  }
}
