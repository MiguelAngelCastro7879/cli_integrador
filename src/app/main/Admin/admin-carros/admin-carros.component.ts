import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Auto, Movil } from 'src/app/Models/Auto';
import { AutoService } from 'src/app/shared/services/auto.service';
import { CrearVistaComponent } from '../../vistas/components/Mongo/crear-vista/crear-vista.component';

@Component({
  selector: 'app-admin-carros',
  templateUrl: './admin-carros.component.html',
  styleUrls: ['./admin-carros.component.css']
})
export class AdminCarrosComponent implements OnInit {

  autos: Auto[] = []
  info: Movil={}

  displayedColumns: string[] = ['_id', 'nombre', 'acciones']
  dataSource = new MatTableDataSource<Auto>(this.autos)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private auto: AutoService,private router: Router,public dialog:MatDialog) {}

  ngOnInit() {
    this.leerlista()
  } 
  leerlista(){
    this.auto.postAutos(this.info).subscribe((data: any) =>{
      this.dataSource.data = data.autos!
    });
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CrearVistaComponent, {
      width: '400px',
    });
  }

  view(_id:any){
   this.router.navigateByUrl('main/controles/'+_id);
  }

  data(_id:any){
    this.router.navigateByUrl('main/leds/'+_id);
   }
  
   graficas(_id:any){
    this.router.navigateByUrl('main/grafica/'+_id);
   }

}
