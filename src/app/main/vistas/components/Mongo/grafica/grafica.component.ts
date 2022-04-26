import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { delay, interval, Subscription } from 'rxjs';
import { Infrarrojo1, Infrarrojo2, Movil, Temperatura, Ultrasonico1, Ultrasonico2, Velocidad } from 'src/app/Models/Auto';
import { SensoresService } from 'src/app/shared/services/sensores.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  
  displayedColumns: string[] = [ 'valor', 'fecha'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  datos!: Temperatura[]
  inf1!: Infrarrojo1[]
  inf2!: Infrarrojo2[]
  vel!:Velocidad[]
  ult1!: Ultrasonico1[]
  ult2!: Ultrasonico2[]
  movil: Movil = {}
  dataSource = new MatTableDataSource<Temperatura>(this.datos)
  dataSource1 = new MatTableDataSource<Infrarrojo1>(this.inf1)
  dataSource2= new MatTableDataSource<Infrarrojo2>(this.inf2)
  dataSource3 = new MatTableDataSource<Velocidad>(this.vel)
  dataSource4 = new MatTableDataSource<Ultrasonico1>(this.ult1)
  dataSource5 = new MatTableDataSource<Ultrasonico2>(this.ult2)
  // sus!: Subscription
  // dataSourceGraficaTemperatura = new MatTableDataSource<Temperatura>(this.datos)
  dataSourceGraficaTemperatura: Array<any> = [];  dataSourceGraficaUltrasonicos1: Array<any> = [];
  dataSourceGraficaInfrarrojo1: Array<any> = [];  dataSourceGraficaUltrasonicos2: Array<any> = [];
  dataSourceGraficaInfrarrojo2: Array<any> = [];  dataSourceGraficaVelocidades: Array<any> = [];
  chart: any = []
  ultimaGrafica = 0

  contador = interval(5000).subscribe({
    next:()=>{
      // console.log("se actualiza la grafica")
      this.leerlista(this.movil._id);
    }
  })

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private peticion: SensoresService, private readonly dialog: MatDialog, private activatedRouter: ActivatedRoute) {
    Chart.register(...registerables)
    this.activatedRouter.params.subscribe(
      params => {
        this.getauto(params['id'])
        
      })
  }
  ngOnDestroy(): void {
    this.contador.unsubscribe()
  }
  ngOnInit() {
    this.contador
    // this.sus = this.peticion.refresh$.pipe(delay(500)).subscribe(() => {
    // })
  }

  getauto(_id: any) {
    this.movil._id = _id
    this.peticion.Datos(_id).subscribe(
      respuesta => {
        this.movil = respuesta.auto![0]
      })
  }

  leerlista(id: any) {
    let actualizar = 0
    this.peticion.Datos(id).subscribe({
      next: (data) => {

        if( this.dataSourceGraficaTemperatura!.length != data.auto![0].temperatura!.length){
          actualizar = 1
          // console.log("son arrays diferentes 1")
          this.dataSource.data = data.auto![0].temperatura!
          this.dataSourceGraficaTemperatura = []
          data.auto![0].temperatura!.forEach((valores: any) => { this.dataSourceGraficaTemperatura.push(valores.valor!.toFixed(2)) });
  
          this.dataSource4.data = data.auto![0].ultrasonico1!
          this.dataSourceGraficaUltrasonicos1 = []
          data.auto![0].ultrasonico1!.forEach((valores: any) => { this.dataSourceGraficaUltrasonicos1.push(valores.valor!.toFixed(2)) });
          
          this.dataSource1.data = data.auto![0].infrarrojo1!
          this.dataSourceGraficaInfrarrojo1 = []
          data.auto![0].infrarrojo1!.forEach((valores: any) => { this.dataSourceGraficaInfrarrojo1.push(valores.valor!.toFixed(2)) });
          
          this.dataSource5.data = data.auto![0].ultrasonico2!
          this.dataSourceGraficaUltrasonicos2 = []
          data.auto![0].ultrasonico2!.forEach((valores: any) => { this.dataSourceGraficaUltrasonicos2.push(valores.valor!.toFixed(2)) });
          
          this.dataSource2.data = data.auto![0].infrarrojo2!
          this.dataSourceGraficaInfrarrojo2 = []
          data.auto![0].infrarrojo2!.forEach((valores: any) => { this.dataSourceGraficaInfrarrojo2.push(valores.valor!.toFixed(2)) });
          
          this.dataSource3.data = data.auto![0].velocidad!
          this.dataSourceGraficaVelocidades = []
          data.auto![0].velocidad!.forEach((valores: any) => { this.dataSourceGraficaVelocidades.push(valores.valor!.toFixed(2)) });
        }
      },
      complete: () => {
        // console.log(actualizar)
        // if( this.dataSourceGraficaTemperatura!.length != data.auto![0].temperatura!.length){
        // }
        if(actualizar == 1){
          if (this.chart instanceof Chart) {
            this.chart.destroy();
          }
          switch(this.ultimaGrafica){
            case 0:
              this.temperatura()
              break;
            case 1:
              this.ultrasonicos()
              break;
            case 2:
              this.infrarrojos()
              break;
            case 3:
              this.velocidad()
              break;
          }
        }
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  grafica(datos: any) {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: datos,
      options: {
        scales: {
          x: {
            display: true,
            beginAtZero: true
          },
          y: {
            display: true
          }
        }
      }
    });
  }

  delete(id: number) {
    this.peticion.borrar(id).subscribe((res: any) => {
      this.datos = res.mensaje!
      this.leerlista(this.movil._id)
    })
  }
  
  temperatura(){
    this.ultimaGrafica = 0
    if (this.chart instanceof Chart) {
      this.chart.destroy();
    }
    let datos = {
      labels: this.dataSourceGraficaTemperatura,
      datasets: [
        {
        data: this.dataSourceGraficaTemperatura,
        label: "Total",
        borderColor: "#FF0000",
        backgroundColor: "#FF0000",
        fill: false,
      },
      ]
    }
    this.grafica(datos)
  }
  ultrasonicos(){
    this.ultimaGrafica = 1
    if (this.chart instanceof Chart) {
      this.chart.destroy();
    }
    let datos = {
      labels: this.dataSourceGraficaUltrasonicos1,
      datasets: [
          {
            data: this.dataSourceGraficaUltrasonicos1,
            label: "Total",
            borderColor: "#0000FF",
            backgroundColor: "#0000FF",
            fill: false,
          },
          {
            data: this.dataSourceGraficaUltrasonicos2,
            label: "Total",
            borderColor: "#20FF00",
            backgroundColor: "#20FF00",
            fill: false,
          },
        ]
      }

    this.grafica(datos)
  }
  infrarrojos(){
    this.ultimaGrafica = 2
    if (this.chart instanceof Chart) {
      this.chart.destroy();
    }
    let datos = {
      labels: this.dataSourceGraficaInfrarrojo1,
      datasets: [
          {
            data: this.dataSourceGraficaInfrarrojo1,
            label: "Total",
            borderColor: "#FF0000",
            backgroundColor: "#FF0000",
            fill: false,
          },
          {
            data: this.dataSourceGraficaInfrarrojo2,
            label: "Total",
            borderColor: "#F0FF00",
            backgroundColor: "#F0FF00",
            fill: false,
          },
        ]
      }
      
    this.grafica(datos)
  }
  velocidad(){
    this.ultimaGrafica = 3
    if (this.chart instanceof Chart) {
      this.chart.destroy();
    }
    let datos = {
      labels: this.dataSourceGraficaVelocidades,
      datasets: [
        {
        data: this.dataSourceGraficaVelocidades,
        label: "Total",
        borderColor: "#0B02F9",
        backgroundColor: "#0B02F9",
        fill: false,
      },
      ]
    }

    this.grafica(datos)
  }
}
