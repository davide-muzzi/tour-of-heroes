import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeroesComponent } from './heroes/heroes';
import { MessagesComponent } from './messages/messages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeroesComponent, MessagesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  title = 'Tour of Heroes';
}
