import { Component, OnInit } from '@angular/core';
import { Movil} from 'src/app/Models/Auto';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MostrarComponent } from '../mostrar/mostrar.component';
import { AutoService } from 'src/app/shared/services/auto.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-crear-vista',
  templateUrl: './crear-vista.component.html',
  styleUrls: ['./crear-vista.component.css']
})
export class CrearVistaComponent implements OnInit {
  public formGroup!: FormGroup;
  public autos: Movil={};

  constructor(public dialogRef: MatDialogRef<MostrarComponent>,private formBuilder: FormBuilder,private servicioAuto:AutoService ) { 
    this.formGroup = this.formBuilder.group({
    codigo_serie: ['', [Validators.required, Validators.minLength(5)]],
    nombre: ['', [Validators.required, Validators.minLength(3)]],

  });
}
get codigo_serie() { return this.formGroup.get('codigo_serie'); }
get nombre() { return this.formGroup.get('nombre'); }

  ngOnInit(): void {
  }

  onSubmit(){
    this.autos = this.formGroup.value
    this.servicioAuto.postAutos(this.autos).subscribe({
      complete:()=>this.onNoClick()
    })
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
