import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes';
import { MessagesComponent } from './messages/messages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroesComponent, MessagesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'Tour of Heroes';
}
