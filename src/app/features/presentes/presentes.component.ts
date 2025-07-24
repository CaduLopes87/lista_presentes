import { Component } from '@angular/core';

@Component({
  selector: 'app-presentes',
  standalone: true,
  imports: [],
  templateUrl: './presentes.component.html',
  styleUrl: './presentes.component.scss',
})
export class PresentesComponent {
  lista_presentes: Array<{
    nome: string;
    imagem: string;
    link: string;
    status: string;
  }> = [
    // {
    //   nome: 'Pano de Prato',
    //   imagem: 'assets/images/pano-de-prato.png',
    //   link: '/pano-de-prato',
    //   status: 'disponível'
    // }
    {
      nome: 'Pano de Prato',
      imagem:
        'https://imgs.search.brave.com/r_H5A0doMuY4BRJRTl2XtXgWxIQBXgorZjzDyKB1FOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzEwNTE1OTMv/MTgwX2tpdF81X3Bh/bm9zX2RlX3ByYXRv/X25vdm9zX21vZGVs/b3NfY29wYV9tYXN0/ZXJfYm9yZGFkb19j/b21fcG9tcG9tXzM2/N18yX2ZiOWE4YjFm/ZTdhY2ZkMDQ1YjNm/MzAwMjQ0M2VlM2Q3/LmpwZw',
      link: 'https://nubank.com.br/cobrar/1bn9q5/68818975-d185-41b1-8527-d3d6a70bad69',
      status: 'disponível',
    },
    {
      nome: 'Kit de Panelas',
      imagem:
        'https://imgs.search.brave.com/hmXZlPwDKeOTBjmJTBJI2nzG0yCjNqkf_oTUB003pBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgwMTI3MS1NTEI4/MzMzODM5OTQyMV8w/MzIwMjUtRS1raXQt/NS1wYW5lbGFzLWNh/Y2Fyb2xhLWFsdW1p/bmlvLXRhbXBhLXZp/ZHJvLWdyYWZpdGUt/YnJpbmRlLndlYnA',
      link: 'https://nubank.com.br/cobrar/1bn9q5/68818975-d185-41b1-8527-d3d6a70bad69',
      status: 'disponível',
    },
    {
      nome: 'Pano de Prato',
      imagem:
        'https://imgs.search.brave.com/RjDWRULk-Qn_sOjzYGUGSiKZlin3jML7M-_QGBwEHRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzU0ODU5OS8x/ODBfa2l0X3Bhbm9f/ZGVfcHJhdG9zXzNf/cGVjYXNfYnJhbmNv/X2VfcHJldG9fNTA2/N18xXzdmM2JiYzkx/ZTAwNGMyMzg3ODI0/NjJmZTUyNzUwNzNh/XzIwMjQwMjI2MTMy/ODM0LmpwZw',
      link: 'https://nubank.com.br/cobrar/1bn9q5/68818975-d185-41b1-8527-d3d6a70bad69',
      status: 'disponível',
    },
    {
      nome: 'Pano de Prato',
      imagem:
        'https://imgs.search.brave.com/RjDWRULk-Qn_sOjzYGUGSiKZlin3jML7M-_QGBwEHRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzU0ODU5OS8x/ODBfa2l0X3Bhbm9f/ZGVfcHJhdG9zXzNf/cGVjYXNfYnJhbmNv/X2VfcHJldG9fNTA2/N18xXzdmM2JiYzkx/ZTAwNGMyMzg3ODI0/NjJmZTUyNzUwNzNh/XzIwMjQwMjI2MTMy/ODM0LmpwZw',
      link: 'https://nubank.com.br/cobrar/1bn9q5/68818975-d185-41b1-8527-d3d6a70bad69',
      status: 'disponível',
    },
  ];
}
