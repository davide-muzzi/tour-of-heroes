import { Component, inject } from '@angular/core';
import { MessageService } from '../service/message-service';

@Component({
  selector: 'app-messages',
  imports: [],
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
  standalone: true,
})
export class MessagesComponent {
  public messageService = inject(MessageService);
}
