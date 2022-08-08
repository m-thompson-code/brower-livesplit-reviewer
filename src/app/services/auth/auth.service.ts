import { inject, Injectable } from '@angular/core';
import { Auth, User, signInAnonymously, UserCredential } from '@angular/fire/auth';
import { finalize, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly auth = inject(Auth);

  readonly user$ = this.getUser();

  signIn(): Observable<UserCredential> {
    return from(signInAnonymously(this.auth));
  }

  signOut(): Observable<void> {
    return from(this.auth.signOut());
  }

  getUser(): Observable<User | null> {
    let unsubscribe: () => void = () => { throw Error("wrapper never set") };

    const obs$ = new Observable<User | null>(subscriber => {
      unsubscribe = this.auth.onAuthStateChanged(
        (user => subscriber.next(user)),
        (error => subscriber.error(error))
      );
    });

    return obs$.pipe(
      finalize(unsubscribe),
    );
  }
}
