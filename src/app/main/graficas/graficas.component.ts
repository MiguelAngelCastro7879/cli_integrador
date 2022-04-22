import { AfterContentInit, AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { Dato } from 'src/app/Models/Dato';
import { SensoresService } from 'src/app/shared/services/sensores.service';
import { CrearComponent } from './crear/crear.component';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit, AfterViewInit {
  
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
          console.log(valores.valor!)
          this.dataSourceGrafica.data.push(valores.valor!)
        });
        // console.log("peticion respuesta: ", data.Valor!)
        console.log("ESTA ES LA DATA en la peticion: ",this.dataSource!.data!)
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

  open(){
    this.dialog.open(CrearComponent,{
      width:'40%',
    });
  }

  delete(id:number){
    this.peticion.borrar(id).subscribe((res:any)=>{
      this.datos = res.mensaje!
      console.log(res);
      this.leerlista()
  })
}

}
