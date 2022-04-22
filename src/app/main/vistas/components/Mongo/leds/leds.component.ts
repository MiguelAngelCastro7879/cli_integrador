import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Auto, Led, Movil } from 'src/app/Models/Auto';
import { AutoService } from 'src/app/shared/services/auto.service';

@Component({
  selector: 'app-leds',
  templateUrl: './leds.component.html',
  styleUrls: ['./leds.component.css']
})
export class LedsComponent implements OnInit {
  
  leds: Led[] = []
  movil:Movil={}
  displayedColumns: string[] = ['_id', 'estado', 'fecha']
  dataSource = new MatTableDataSource<Led>(this.leds)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private auto: AutoService,private router: Router) { }

  ngOnInit(): void {
    this.leerlista()
  }

  leerlista(){
    this.auto.GetLeds().subscribe((data: any) =>{
      this.dataSource.data = data.autos!
      console.log(data)
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
