import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto, LED, Movil } from 'src/app/Models/Auto';
import { AutoService } from 'src/app/shared/services/auto.service';

@Component({
  selector: 'app-leds',
  templateUrl: './leds.component.html',
  styleUrls: ['./leds.component.css']
})
export class LedsComponent implements OnInit {
  
  leds: LED[] = []
  public movil: Movil={}
  displayedColumns: string[] = ['estado', 'fecha']
  dataSource = new MatTableDataSource<LED>(this.leds)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private auto: AutoService,private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params=>{
        this.getauto(params['id'])
      })
   }

  ngOnInit(): void {
    // this.getauto(this.movil._id)
  }

  getauto(_id: any){
    this.movil._id= _id
    this.auto.GetAuto(_id).subscribe(
      respuesta=>{
        this.movil = respuesta.auto![0]
        // console.log(respuesta)
      })
}

  leerlista(){
    this.auto.GetLeds(this.movil._id).subscribe({
      next:(data:any)=>{
      this.dataSource.data = data.estados![0]
      this.dataSource.data = []
      data.estados!.forEach((valores: any) => {
        valores.leds!.forEach((led: any) => {
          // console.log(led)
          this.dataSource.data.push(led)
          // console.log("leds", valores.leds!)
        });
        // console.log(valores.leds!)
        // this.dataSource.data.push(valores.leds!)
        // console.log("leds", valores.leds!)
      });
  },
  complete:()=>{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
});
  }

  ngAfterViewInit() {
    this.leerlista()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
