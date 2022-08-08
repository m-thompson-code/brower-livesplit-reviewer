import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth';
import { FirestoreService } from './services/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly authService = inject(AuthService);
  readonly firestoreService = inject(FirestoreService);

  constructor() {
    this.authService.getUser().subscribe(user => {
      console.log(user);
    });

    this.firestoreService.getDocs('players').subscribe(docs => {
      console.log(docs);
    });
  }
}
