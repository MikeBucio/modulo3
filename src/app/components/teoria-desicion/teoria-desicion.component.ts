import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-teoria-desicion',
  templateUrl: './teoria-desicion.component.html',
  styleUrls: ['./teoria-desicion.component.scss'],
})
export class TeoriaDesicionComponent implements OnInit {
  formTeoriaDecision: FormGroup;
  probabilidad1;
  probabilidad2;
  probabilidad3;
  probabilidad4;
  mejorOpcion;
  showResults = false;
  constructor() {}

  ngAfterViewInit(): void {
    this.formTeoriaDecision.get('pBaja').valueChanges.subscribe((resp) => {
      if (this.formTeoriaDecision.get('pBaja').value >= 1) {
        this.formTeoriaDecision.get('pBaja').reset();
      } else {
        this.validacionP();
      }
    });
    this.formTeoriaDecision.get('pMedia').valueChanges.subscribe((resp) => {
      if (this.formTeoriaDecision.get('pMedia').value >= 1) {
        this.formTeoriaDecision.get('pMedia').reset();
      } else {
        this.validacionP();
      }
    });
    this.formTeoriaDecision.get('pAlta').valueChanges.subscribe((resp) => {
      if (this.formTeoriaDecision.get('pAlta').value >= 1) {
        this.formTeoriaDecision.get('pAlta').reset();
      } else {
        this.validacionP();
      }
    });
  }

  ngOnInit(): void {
    this.crearFormulario();
  }

  validacionP() {
    let sumP =
      this.formTeoriaDecision.get('pBaja').value +
      this.formTeoriaDecision.get('pMedia').value +
      this.formTeoriaDecision.get('pAlta').value;
    console.log(sumP);

    if (sumP > 1) {
      Swal.fire({
        icon: 'error',
        title: 'Vayaaa...!!',
        text: 'La sumatoría de P.Baja, P.Media y P.Alta no puede ser mayor a 1',
      });
    }
  }

  crearFormulario() {
    this.formTeoriaDecision = new FormGroup({
      opcion1: new FormControl('', Validators.required),
      opcion2: new FormControl('', Validators.required),
      opcion3: new FormControl('', Validators.required),
      opcion4: new FormControl('', Validators.required),

      GBOpcion1: new FormControl('', Validators.required),
      GMOpcion1: new FormControl('', Validators.required),
      GAOpcion1: new FormControl('', Validators.required),

      GBOpcion2: new FormControl('', Validators.required),
      GMOpcion2: new FormControl('', Validators.required),
      GAOpcion2: new FormControl('', Validators.required),

      GBOpcion3: new FormControl('', Validators.required),
      GMOpcion3: new FormControl('', Validators.required),
      GAOpcion3: new FormControl('', Validators.required),

      GBOpcion4: new FormControl('', Validators.required),
      GMOpcion4: new FormControl('', Validators.required),
      GAOpcion4: new FormControl('', Validators.required),

      pBaja: new FormControl('', Validators.required),
      pMedia: new FormControl('', Validators.required),
      pAlta: new FormControl('', Validators.required),
    });
  }

  calcularPropbabilidad() {
    let requestRow = this.formTeoriaDecision.getRawValue();

    this.probabilidad1 =
      requestRow.pBaja * requestRow.GBOpcion1 +
      requestRow.pMedia * requestRow.GMOpcion1 +
      requestRow.pAlta * requestRow.GAOpcion1;
    this.probabilidad2 =
      requestRow.pBaja * requestRow.GBOpcion2 +
      requestRow.pMedia * requestRow.GMOpcion2 +
      requestRow.pAlta * requestRow.GAOpcion2;
    this.probabilidad3 =
      requestRow.pBaja * requestRow.GBOpcion3 +
      requestRow.pMedia * requestRow.GMOpcion3 +
      requestRow.pAlta * requestRow.GAOpcion3;
    this.probabilidad4 =
      requestRow.pBaja * requestRow.GBOpcion4 +
      requestRow.pMedia * requestRow.GMOpcion4 +
      requestRow.pAlta * requestRow.GAOpcion4;

    this.showResults = true;

    let bOption = [];
    bOption.push(
      this.probabilidad1,
      this.probabilidad2,
      this.probabilidad3,
      this.probabilidad4
    );
    let max = Math.max(...bOption);
    this.mejorOpcion = max;
    console.log(this.mejorOpcion);
  }

  reset() {
    this.formTeoriaDecision.reset();
  }
}
