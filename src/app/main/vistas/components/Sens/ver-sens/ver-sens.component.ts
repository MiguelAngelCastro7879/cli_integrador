import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SensoresService } from 'src/app/shared/services/sensores.service';
import { ActuaSensComponent } from '../actua-sens/actua-sens.component';
import { sensor } from 'src/app/Models/sensores';
import { SenStatusComponent } from '../sen-status/sen-status.component';
@Component({
  selector: 'app-ver-sens',
  templateUrl: './ver-sens.component.html',
  styleUrls: ['./ver-sens.component.css']
})
export class VerSensComponent implements OnInit, OnDestroy, AfterViewInit {

  senso: sensor[] = []
  displayedColumns: string[] = ['nombre', 'descripcion', 'status', 'acciones']
  sus!: Subscription
  dataSource = new MatTableDataSource<sensor>(this.senso)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private peticion: SensoresService, private readonly dialog:MatDialog) { }

  ngOnInit(): void {
    this.leerlista()
    this.sus = this.peticion.refresh$.subscribe(()=>{
      this.leerlista()
  })
}

leerlista(){
  this.peticion.getAll().subscribe((data: any) =>{
    this.dataSource.data = data.sensores!
    console.log(data)
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

ngOnDestroy(): void {
  this.sus.unsubscribe();
  console.log('Observable:Cerrado')
}

open(row:any){
  this.dialog.open(SenStatusComponent,{
    width:'40%',
    data:row
  });
}

view(row:any){
  this.dialog.open(ActuaSensComponent, { 
    width:'60%',
    data:row
  });
}
}
