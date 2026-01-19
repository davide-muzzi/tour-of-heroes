import { Component, inject } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HEROES } from '../mock-heroes';
import { HeroDetail } from '../hero-detail/hero-detail';
import { HeroService } from '../service/hero-service';
import { MessageService } from '../service/message-service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, HeroDetail],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  private heroService = inject(HeroService);
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
