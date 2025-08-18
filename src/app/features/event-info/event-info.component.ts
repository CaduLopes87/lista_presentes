import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-event-info',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './event-info.component.html',
  styleUrl: './event-info.component.scss',
})
export class EventInfoComponent {}
