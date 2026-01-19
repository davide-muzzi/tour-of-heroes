import { Component, OnInit } from '@angular/core';
import { Villain } from '../villain';
import { VillainService } from '../service/villain-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.html',
  styleUrls: ['./villains.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true,
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
        id: this.villains.length ? Math.max(...this.villains.map((v) => v.id)) + 1 : 11,
        name,
      })
      .subscribe(() => {
        // 🔥 RE-FETCH instead of pushing manually
        this.getVillains();
      });
  }

  delete(villain: Villain): void {
    this.villainService.deleteVillain(villain.id).subscribe(() => {
      this.getVillains();
    });
  }
}
