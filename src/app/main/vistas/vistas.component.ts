import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/Models/User';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { ActUserComponent } from './components/act-user/act-user.component';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit, OnDestroy, AfterViewInit {
  
  usuarios: User[] = []
  displayedColumns: string[] = ['username', 'email', 'acciones']
  sus!: Subscription
  dataSource = new MatTableDataSource<User>(this.usuarios)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private peticion: UsuariosService, private auth: AuthService, private dialog:MatDialog) { }


  ngOnInit(): void {
    this.leerlista()
    this.sus = this.auth.refresh$.subscribe(()=>{
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
  open(){
    this.dialog.open(ActUserComponent);
  }
}
