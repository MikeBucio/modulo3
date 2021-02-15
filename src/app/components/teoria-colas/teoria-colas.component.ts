import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teoria-colas',
  templateUrl: './teoria-colas.component.html',
  styleUrls: ['./teoria-colas.component.scss'],
})
export class TeoriaColasComponent implements OnInit {
  formTeoriaCola: FormGroup;
  showResults: boolean = false;
  l; //
  Mn; //
  L; //
  Lq; //
  W; //
  Wq; //
  Po; //
  P; //
  Unidad;

  constructor() {}

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formTeoriaCola = new FormGroup({
      lambda: new FormControl('', Validators.required),
      miu: new FormControl('', Validators.required),
      unidadMinutos: new FormControl('', Validators.required),
    });
  }
  calcularPropbabilidad() {
    this.showResults = true;
    let requestRow = this.formTeoriaCola.getRawValue();

    this.l = requestRow.lambda / (requestRow.miu - requestRow.unidadMinutos);
    this.Lq =
      Math.pow(requestRow.lambda, 2) /
      (requestRow.miu * (requestRow.miu - requestRow.lambda));
    this.W = 1 / (requestRow.miu - requestRow.lambda);
    this.Wq =
      requestRow.lambda /
      (requestRow.miu * (requestRow.miu - requestRow.lambda));
    this.Po = 1 - requestRow.lambda / requestRow.miu;
    this.P = requestRow.lambda / requestRow.miu;

    console.log(this.l);
    console.log(this.Lq);
    console.log(this.W);
    console.log(this.Wq);
    console.log(this.Po);

    if (this.P > 1) {
      Swal.fire({
        icon: 'error',
        title: 'Vayaaa...!!',
        text: 'Parece que tu sistema colapsó',
      });
      console.log(
        'P: ' + this.P + ' % de que este ocupado el sistema y poder colapsar'
      );
    } else if (this.P < 1) {
      console.log('P: ' + this.P + ' % de que este ocupado el sistema');
    }
  }

  reiniciar() {
    this.formTeoriaCola.reset();
    this.showResults = false;
  }
}
