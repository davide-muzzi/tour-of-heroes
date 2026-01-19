import { Component, input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.scss',
})
export class HeroDetail {
  hero = input.required<Hero>();
}
