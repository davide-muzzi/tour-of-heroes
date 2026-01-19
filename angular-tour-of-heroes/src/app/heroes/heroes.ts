import { Component, inject, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail';
import { HeroService } from '../service/hero-service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, HeroDetailComponent, RouterLink],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class HeroesComponent implements OnInit {
  private heroService = inject(HeroService);
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
