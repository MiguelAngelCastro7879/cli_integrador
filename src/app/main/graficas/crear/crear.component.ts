import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SensoresService } from 'src/app/shared/services/sensores.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  form = this.fb.group({
    valor:[''],
  })

  constructor(private peticion: SensoresService, private fb:FormBuilder,public dialogRef: MatDialogRef<CrearComponent>) { }

  ngOnInit(): void {
  }
  Enviar(){
    this.peticion.CrearDatos(this.form.value).subscribe((Response:any)=>{
      console.log(Response)
      setTimeout(() =>this.dialogRef.close(), 200)
    })
  }
  closeDialog(){
    this.dialogRef.close()
  }

}
