import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { Dato } from 'src/app/Models/Dato';
import { SensoresService } from 'src/app/shared/services/sensores.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['id', 'valor', 'acciones'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  datos: Dato[] = []
  dataSource = new MatTableDataSource<Dato>(this.datos)
  sus!: Subscription
  dataSourceGrafica = new MatTableDataSource<Dato>(this.datos)

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private peticion: SensoresService, private readonly dialog:MatDialog) {Chart.register(... registerables) }
  chart:any = []
  
  
  ngOnInit() {
    this.leerlista();
    this.sus = this.peticion.refresh$.subscribe(()=>{
      this.leerlista()
    })
  }
  leerlista(){
    this.peticion.Datos().subscribe({
      next:(data)=>{
        this.dataSource.data = data.Valor!
        this.dataSourceGrafica.data = []
        data.Valor!.forEach((valores: any) => {
          this.dataSourceGrafica.data.push(valores.valor!)
        });
        // console.log("peticion respuesta: ", data.Valor!)
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
  console.log("ESTA ES LA DATA: ",this.dataSourceGrafica.data)
  }


  delete(id:number){
    this.peticion.borrar(id).subscribe((res:any)=>{
      this.datos = res.mensaje!
      this.leerlista()
  })
}

}
