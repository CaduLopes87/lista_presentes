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
  @ViewChild('paymentTemplate') paymentTemplate: any;

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
  }

  openSelectedGiftLink(method: 'card' | 'pix') {
    if (!this.selectedGift) {
      console.error('Selected gift link is not available.');
      return;
    }

    let link = '';

    if (method === 'card') link = this.selectedGift.cardLink;
    if (method === 'pix') link = this.selectedGift.pixLink;

    window.open(link, '_blank');
    this.openSnackBarSuccessGift();
  }

  openPaymentMethods() {
    const dialogRef = this.dialog.open(this.paymentTemplate);
    dialogRef.afterClosed().subscribe((result) => {
      this.selectedGift = null;
    });
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
