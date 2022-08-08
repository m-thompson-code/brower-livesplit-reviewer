import { inject, Injectable } from '@angular/core';
import { Firestore, collectionData, collection as firestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private readonly firestore = inject(Firestore);

  getDocs(path: string) {
    const collection = firestoreCollection(this.firestore, path);

    return collectionData(collection);
  }
}
