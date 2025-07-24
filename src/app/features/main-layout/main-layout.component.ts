import { Component } from '@angular/core';
import { PresentesComponent } from "../presentes/presentes.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [PresentesComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  
}
