import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth';
import { PlayersService } from './services/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly authService = inject(AuthService);
  readonly playersService = inject(PlayersService);

  constructor() {
    this.authService.getUser().subscribe(user => {
      console.log(user);
    });

    this.playersService.getPlayers('moocow', '1234').subscribe(docs => {
      console.log(docs);
    });
  }
}
