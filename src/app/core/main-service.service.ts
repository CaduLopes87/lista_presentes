import { Injectable } from '@angular/core';
import { IListaPresentes } from '../shared/models/IListaPresentes.interface';
import { lista_presentes } from '../../assets/lista-de-presentes';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  getListaPresentes(): IListaPresentes[] {
    const listaPresentes: IListaPresentes[] = lista_presentes;
    return listaPresentes;
  }
}
