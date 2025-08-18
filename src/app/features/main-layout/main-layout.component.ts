import { Component } from '@angular/core';
import { PresentesComponent } from '../presentes/presentes.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { EventInfoComponent } from '../event-info/event-info.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    PresentesComponent,
    HeaderComponent,
    FooterComponent,
    EventInfoComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
