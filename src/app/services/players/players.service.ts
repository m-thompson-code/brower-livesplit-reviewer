import { inject, Injectable } from '@angular/core';
import { FirestoreService } from '../firestore';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  firestoreService = inject(FirestoreService);

  getPlayers(room: string, pass?: string) {
    return this.firestoreService.getDocs('players', [
      {
        fieldPath: 'room',
        opStr: '==',
        value: room
      },
      {
        fieldPath: 'pass',
        opStr: '==',
        value: pass ?? 'none'
      }
    ])
  }
}
