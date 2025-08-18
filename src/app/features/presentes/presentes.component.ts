import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IListaPresentes } from '../../shared/models/IListaPresentes.interface';
import { MainServiceService } from '../../core/main-service.service';
import { CurrencyPipe, NgClass } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-presentes',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatIconModule,
    MatIcon,
    MatTooltip,
    NgClass,
    MatDialogModule,
  ],
  templateUrl: './presentes.component.html',
  styleUrl: './presentes.component.scss',
})
export class PresentesComponent implements OnInit {
  mainService = inject(MainServiceService);
  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);

  @ViewChild('dialogSuccessTemplate') dialogSuccessTemplate: any;

  lista_presentes: IListaPresentes[] = [];
  selectedGift: IListaPresentes | null = null;

  ngOnInit(): void {
    this.lista_presentes = this.mainService.getListaPresentes();
  }

  openSuccessDialog(selectedGift: IListaPresentes): void {
    this.selectedGift = selectedGift;
    const dialogRef = this.dialog.open(this.dialogSuccessTemplate, {
      data: selectedGift,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.selectedGift = null;
    });
  }

  openSelectedGiftLink() {
    if (this.selectedGift && this.selectedGift.link) {
      window.open(this.selectedGift.link, '_blank');
      this.openSnackBarSuccessGift();
    } else {
      console.error('Selected gift link is not available.');
    }
  }

  openSnackBarSuccessGift() {
    this._snackBar.open('Enviou o Presente? Ficamos muito gratos 💚', 'X');
  }

  openSnackBarDisabledItem() {
    this._snackBar.open(
      'Este presente já foi enviado por outra pessoa! Por favor, escolha outro presente 😊',
      'X'
    );
  }
}
