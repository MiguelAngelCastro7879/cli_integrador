import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User, Usuario } from 'src/app/Models/User';
import { MenuService } from './menu.service';
import { Categoria } from 'src/app/Models/Categoria';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Vista } from 'src/app/Models/Vista';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { Role } from 'src/app/Models/Role';


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver, 
    private router: Router, 
    private _authService: AuthService,
    private _menuService: MenuService,
    private peticion: UsuariosService
    ) {
    }

  panelOpenState = false;
  user: User = {}
  categorias : Categoria[] = [] 

  ngOnInit(): void {
    this.getUser()
    this.getVistas()
  }


  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res:any) => {
        if (res.matches) {
          this.sidenav!.mode! = 'over';
          this.sidenav.close();
        } else {
          this.sidenav!.mode! = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav!.mode! === 'over') {
          this.sidenav!.close();
        }
      });
  }

  logout(){
    this.peticion.logout().subscribe(
      respuesta =>{
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/auth/login');
      },
      error=>{
        alert(error.error.error)
      })
  }
 
  
  getRol(){
    this._authService.getUser().subscribe(respuesta=>{
      this.user = respuesta.user! 
    })
  }
  
  getUser(){
    this._authService.getUser().subscribe(respuesta=>{
      this.user = respuesta.usuario! 
    })
  }
  getVistas(){
  //   this._menuService.getViews().subscribe(respuesta=>{
  //     console.log(respuesta)
  //     // this.categorias = 
  //     this.categorias = respuesta.categorias!
  //   }, error=>{
  //     console.log(error)
  //   })
  }
}
