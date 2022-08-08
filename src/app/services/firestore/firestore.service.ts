import { inject, Injectable } from '@angular/core';
import { Firestore, collectionData, collection as firestoreCollection, query, where, FieldPath, WhereFilterOp, Query, DocumentData } from '@angular/fire/firestore';

export interface QueryMoo {
  fieldPath: string | FieldPath;
  opStr: WhereFilterOp;
  value: unknown;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private readonly firestore = inject(Firestore);

  getDocs(path: string, queries?: QueryMoo[]) {
    const collection = firestoreCollection(this.firestore, path);

    let moo: Query<DocumentData> = collection;

    queries?.forEach(q => {
      moo = query(moo, where(q.fieldPath, q.opStr, q.value));
    });

    return collectionData(moo);
  }
}
