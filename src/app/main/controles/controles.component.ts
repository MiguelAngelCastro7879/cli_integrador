import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movil } from 'src/app/Models/Auto';
import { AutoService } from 'src/app/shared/services/auto.service';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {

  public movil: Movil={
    _id:'',
    nombre:''
  }

  estado = true
  constructor(private auto:AutoService,private activatedRouter: ActivatedRoute, private router:Router) {
    this.activatedRouter.params.subscribe(
      params=>{
        this.getauto(params['id'])
      })
   }

  ngOnInit(): void {
    this.getauto(this.movil._id)
  }

  getauto(_id: any){
    this.movil._id= _id
    this.auto.GetAuto(_id).subscribe(
      respuesta=>{
        this.movil = respuesta.auto![0]
        console.log(respuesta)
      })
}

regresar(){
this.router.navigate(['main/mongo'])
}
mover(){
  this.router.navigate(['main/leds/'+this.movil._id])
  }

  Adelante(_id: any){
    const body = {
      auto:_id,
      valores:{
        "Motor_Delante" : true, 
        "Motor_Reversa" : false, 
        "Motor_Derecha" : false, 
        "Motor_Izquierda" : false, 
        "Motor_Apagado" : false,
        "Motor_Velocidad":40
      }
    }

    this.auto.Movimiento(body).subscribe(datos => {console.log(datos),this.ngOnInit()})
  }

  Reversa(_id: any){
    const body = {
      auto:_id,
      valores:{
      "Motor_Delante" : false, 
      "Motor_Reversa" : true, 
      "Motor_Derecha" : false, 
      "Motor_Izquierda" : false, 
      "Motor_Apagado" : false,
      "Motor_Velocidad":40
    }
  }

    this.auto.Movimiento(body).subscribe(datos => {console.log(datos),this.ngOnInit()})
  }
  Izquierda(_id: any){
    const body = {
      auto:_id,
      valores:{
      "Motor_Delante" : false, 
      "Motor_Reversa" : false, 
      "Motor_Derecha" : false, 
      "Motor_Izquierda" : true, 
      "Motor_Apagado" : false,
      "Motor_Velocidad":40
    }
  }

    this.auto.Movimiento(body).subscribe(datos => {console.log(datos),this.ngOnInit()})
  }

  Derecha(_id: any){
    const body = {
      auto:_id,
      valores:{
      "Motor_Delante" : false, 
      "Motor_Reversa" : false, 
      "Motor_Derecha" : true, 
      "Motor_Izquierda" : false, 
      "Motor_Apagado" : false,
      "Motor_Velocidad":40
    }
  }

    this.auto.Movimiento(body).subscribe(datos => {console.log(datos),this.ngOnInit()})
  }

  Stop(_id: any){
    const body = {
      auto:_id,
      valores:{
      "Motor_Delante" : false, 
      "Motor_Reversa" : false, 
      "Motor_Derecha" : false, 
      "Motor_Izquierda" : false, 
      "Motor_Apagado" : true,
      "Motor_Velocidad":0 
    }
  }

    this.auto.Movimiento(body).subscribe(datos => {console.log(datos),this.ngOnInit()});
  }

  Off(_id: any){
    this.estado = false
    const body = {
      auto:_id,
        valores:{
          estado: false
      }
      
  }
    this.auto.Apagar(body).subscribe(datos => {console.log(datos),this.ngOnInit()});
  }

  On(_id: any){
    this.estado = true
    const body = {
      auto:_id,
        valores:{
          estado: true
      }

  }
    this.auto.Enceder(body).subscribe(datos => {console.log(datos),this.ngOnInit()});
  }

  onoff(_id:any){
    if(this.estado){
      this.On(this.movil._id)
      console.log('Enciende')
    }else if(!this.estado){
      this.Off(this.movil._id)
      console.log('Apaga')
    }
    this.estado = !this.estado
  }

}