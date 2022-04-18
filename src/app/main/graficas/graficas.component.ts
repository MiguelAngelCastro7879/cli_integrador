import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  @ViewChild("newCanvas ")
  constructor() { }

  ngOnInit(){
    new Chart(elemento, configs);
  }

}
