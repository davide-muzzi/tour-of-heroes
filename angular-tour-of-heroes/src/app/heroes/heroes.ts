import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetail } from '../hero-detail/hero-detail';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, HeroDetail],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
