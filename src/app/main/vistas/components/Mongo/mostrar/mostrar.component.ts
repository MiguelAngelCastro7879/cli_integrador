import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Auto, Movil } from 'src/app/Models/Auto';
import { AutoService } from 'src/app/shared/services/auto.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  autos: Auto[] = []

  displayedColumns: string[] = ['_id', 'nombre', 'acciones']
  dataSource = new MatTableDataSource<Auto>(this.autos)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private auto: AutoService,private router: Router) {}

  ngOnInit() {
    this.leerlista()
  } 
  leerlista(){
    this.auto.GetAutos().subscribe((data: any) =>{
      this.dataSource.data = data.autos!
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



  view(_id:any){
   this.router.navigateByUrl('main/controles/'+_id);
  }
  

}
