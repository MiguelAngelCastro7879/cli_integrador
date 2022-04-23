import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { Movil, Temperatura } from 'src/app/Models/Auto';
import { SensoresService } from 'src/app/shared/services/sensores.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  
  displayedColumns: string[] = [ 'valor', 'acciones'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  datos!:Temperatura[]
  movil:Movil={}
  dataSource = new MatTableDataSource<Temperatura>(this.datos)
  sus!: Subscription
  dataSourceGrafica = new MatTableDataSource<Temperatura>(this.datos)

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private peticion: SensoresService, private readonly dialog:MatDialog) {Chart.register(... registerables) }
  chart:any = []
  
  
  ngOnInit() {
    this.leerlista(this.movil._id);
    this.sus = this.peticion.refresh$.subscribe(()=>{
      this.leerlista(this.movil._id)
    })
  }
  leerlista(id:any){
    this.peticion.Datos(id).subscribe({
      next:(data)=>{
        this.dataSource.data = data.temperatura![0]
        console.log("peticion respuesta: ", data.temperatura!)
        this.dataSourceGrafica.data = []
        data.temperatura!.forEach((valores: any) => {
          this.dataSourceGrafica.data.push(valores.temperatura!)
        });
        console.log("peticion respuesta: ", data.temperatura!)
      },
      complete:()=>{
        if(this.chart instanceof Chart){
          this.chart.destroy();
        }
        this.grafica();
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  grafica(){
    this.chart= new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.dataSourceGrafica.data,
        datasets: [{ 
            data: this.dataSourceGrafica.data,
            label: "Total",
            borderColor: "#0B02F9",
            backgroundColor: "#085AFF",
            fill: false,
          },
        ]
      },
      options: {
          scales: {
              x: {
                  display:true,
                  beginAtZero:true
              },
              y:{
                display:true
              }
          }
      }
  });
  }

  delete(id:number){
    this.peticion.borrar(id).subscribe((res:any)=>{
      this.datos = res.mensaje!
      this.leerlista(this.movil._id)
  })
}
}
