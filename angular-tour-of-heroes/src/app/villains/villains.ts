import { Component, OnInit } from '@angular/core';
import { Villain } from '../villain';
import { VillainService } from '../service/villain-service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.html',
  styleUrls: ['./villains.scss'],
})
export class VillainsComponent implements OnInit {
  villains: Villain[] = [];

  constructor(private villainService: VillainService) {}

  ngOnInit(): void {
    this.getVillains();
  }

  getVillains(): void {
    this.villainService.getVillains().subscribe((v) => (this.villains = v));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;

    this.villainService
      .addVillain({
        id: Math.max(...this.villains.map((v) => v.id)) + 1,
        name,
      })
      .subscribe((v) => this.villains.push(v));
  }

  delete(villain: Villain): void {
    this.villains = this.villains.filter((v) => v !== villain);
    this.villainService.deleteVillain(villain.id).subscribe();
  }
}
