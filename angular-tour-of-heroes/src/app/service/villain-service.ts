import { Injectable } from '@angular/core';
import { Villain } from '../villain';
import { VILLAINS } from '../mock-villains';
import { Observable, of } from 'rxjs';
import { MessageService } from './message-service';

@Injectable({ providedIn: 'root' })
export class VillainService {
  constructor(private messageService: MessageService) {}

  getVillains(): Observable<Villain[]> {
    this.messageService.add('VillainService: fetched villains');
    return of(VILLAINS);
  }

  getVillain(id: number): Observable<Villain | undefined> {
    return of(VILLAINS.find((v) => v.id === id));
  }

  addVillain(villain: Villain): Observable<Villain> {
    VILLAINS.push(villain);
    this.messageService.add(`VillainService: added villain id=${villain.id}`);
    return of(villain);
  }

  deleteVillain(id: number): Observable<void> {
    const index = VILLAINS.findIndex((v) => v.id === id);
    VILLAINS.splice(index, 1);
    this.messageService.add(`VillainService: deleted villain id=${id}`);
    return of();
  }
}
