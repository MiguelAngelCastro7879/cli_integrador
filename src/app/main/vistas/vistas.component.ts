import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Models/User';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { ActUserComponent } from './components/act-user/act-user.component';
import { VerComponent } from './components/ver/ver.component';
import { UserStatusComponent } from './components/user-status/user-status.component';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit, OnDestroy, AfterViewInit {
  
  usuarios: User[] = []
  displayedColumns: string[] = ['username', 'email', 'status', 'acciones']
  sus!: Subscription
  dataSource = new MatTableDataSource<User>(this.usuarios)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private peticion: UsuariosService, private readonly dialog:MatDialog) { }


  ngOnInit() {
    this.leerlista()
    this.sus = this.peticion.refresh$.subscribe(()=>{
      this.leerlista()
    })
  } 
  leerlista(){
    this.peticion.getAll().subscribe((data: any) =>{
      this.dataSource.data = data.usuarios!
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
    this.dialog.open(ActUserComponent,{
      width:'40%',
      data:row
    });
  }
  view(row:any){
    this.dialog.open(VerComponent, { 
      width:'60%',
      data:row
    });
  }
  status(row:any){
    this.dialog.open(UserStatusComponent, { 
      width:'60%',
      data:row
    });
  }
}
