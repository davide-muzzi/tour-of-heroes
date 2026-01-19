import { Component, inject, OnInit } from '@angular/core';
import { HeroService } from '../service/hero-service';
import { Hero } from '../hero';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true,
})
export class DashboardComponent implements OnInit {
  private heroService = inject(HeroService);
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
