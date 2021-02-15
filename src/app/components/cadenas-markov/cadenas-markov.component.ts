import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadenas-markov',
  templateUrl: './cadenas-markov.component.html',
  styleUrls: ['./cadenas-markov.component.scss'],
})
export class CadenasMarkovComponent implements OnInit {
  posibleWays = [];
  //este es el objeto que muestra los bloqueos en el camino, inicialmente están todos en falso, pero posteriormente se modifican aleatoriamente
  randomPosition = {
    A1: false,
    B1: false,
    C1: false,
    A2: false,
    B2: false,
    C2: false,
    A3: false,
    B3: false,
    C3: false,
  };
  bestWay;
  posibleWayToString = [];
  bestWayToString = [];

  constructor() {}

  ngOnInit(): void {
    this.randomWay();
  }

  randomWay() {
    for (const property in this.randomPosition) {
      this.randomPosition[property] = Math.random() < 0.4;
    }
    console.log('position', this.randomPosition);
  }

  selectWay() {
    this.posibleWays = [];
    if (
      !this.randomPosition.B1 &&
      !this.randomPosition.C1 &&
      !this.randomPosition.C2
    ) {
      let way1 = ['B1', 'C1', 'C2'];
      this.posibleWays.push(way1);
    }
    if (
      !this.randomPosition.B1 &&
      !this.randomPosition.A1 &&
      !this.randomPosition.A2 &&
      !this.randomPosition.A3 &&
      !this.randomPosition.B3
    ) {
      let way2 = ['B1', 'A1', 'A2', 'A3', 'B3'];
      this.posibleWays.push(way2);
    }
    if (
      !this.randomPosition.A2 &&
      !this.randomPosition.A3 &&
      !this.randomPosition.B3
    ) {
      let way3 = ['A2', 'A3', 'B3'];
      this.posibleWays.push(way3);
    }
    if (
      !this.randomPosition.A2 &&
      !this.randomPosition.A1 &&
      !this.randomPosition.B1 &&
      !this.randomPosition.C1 &&
      !this.randomPosition.C2
    ) {
      let way4 = ['A2', 'A1', 'B1', 'C1', 'C2'];
      this.posibleWays.push(way4);
    }
    if (!this.randomPosition.B3) {
      let way5 = ['B3'];
      this.posibleWays.push(way5);
    }
    if (
      !this.randomPosition.B3 &&
      !this.randomPosition.A3 &&
      !this.randomPosition.A2 &&
      !this.randomPosition.A1 &&
      !this.randomPosition.B1 &&
      !this.randomPosition.C1 &&
      !this.randomPosition.C2
    ) {
      let way6 = ['B3', 'A3', 'A2', 'A1', 'B1', 'C1', 'C2'];
      this.posibleWays.push(way6);
    }
    if (!this.randomPosition.C2) {
      let way7 = ['C2'];
      this.posibleWays.push(way7);
    }
    if (
      !this.randomPosition.C2 &&
      !this.randomPosition.C1 &&
      !this.randomPosition.B1 &&
      !this.randomPosition.A1 &&
      !this.randomPosition.A2 &&
      !this.randomPosition.A3 &&
      !this.randomPosition.B3
    ) {
      let way8 = ['C2', 'C1', 'B1', 'A1', 'A2', 'A3', 'B3'];
      this.posibleWays.push(way8);
    }

    if (
      this.randomPosition.B2 &&
      this.randomPosition.A2 &&
      this.randomPosition.B3 &&
      this.randomPosition.C2
    ) {
      Swal.fire({
        icon: 'info',
        title: 'Vayaaa...!!',
        text:
          'Parece que no hay caminos disponibles, reiniciaremos los bloqueos',
      }).then(() => this.randomWay());
    }
    console.log('posible', this.posibleWays);
    //en esta función validamos los caminos posibles y dentro de ellos se escoge el mejor camino
    this.waysValidaton();
  }

  waysValidaton() {
    let lenghtWay = [];
    this.posibleWays.forEach((resp) => {
      lenghtWay.push(resp.length);
    });
    let min = Math.min(...lenghtWay);
    this.bestWay = this.posibleWays.filter((way) => way.length === min);
    this.bestWay.forEach((element) => {
      let bWayToString = {
        bWay: element.toString(),
      };
      this.bestWayToString.push(bWayToString);
    });
    this.posibleWays.forEach((elm) => {
      elm.toString();
      let pWayString = {
        pWay: elm.toString(),
      };
      this.posibleWayToString.push(pWayString);
    });
  }
}
