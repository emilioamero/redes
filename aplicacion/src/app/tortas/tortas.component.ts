import { Component, OnInit } from '@angular/core';
import { TortasService } from '../tortas.service';

@Component({
  selector: 'app-tortas',
  templateUrl: './tortas.component.html',
  styleUrls: ['./tortas.component.css']
})
export class TortasComponent implements OnInit {

  resultado: any = [];

  /* @HostBinding('class') classes = 'row'; */
  constructor(private tortasServicio: TortasService) { }

  ngOnInit() {
    this.getTortas();
  }
  getTortas() {
    this.tortasServicio.getTortas()
      .subscribe(
        res => {
          this.resultado = res;
        },
        err => console.error(err)
      );
  }

}
