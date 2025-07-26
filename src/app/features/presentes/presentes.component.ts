import { Component, inject, Inject, OnInit } from '@angular/core';
import { IListaPresentes } from '../../shared/models/IListaPresentes.interface';
import { MainServiceService } from '../../core/main-service.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-presentes',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './presentes.component.html',
  styleUrl: './presentes.component.scss',
})
export class PresentesComponent implements OnInit {
  mainService = inject(MainServiceService);

  lista_presentes: IListaPresentes[] = [];

  ngOnInit(): void {
    this.lista_presentes = this.mainService.getListaPresentes();
  }
}
