import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/Models/User';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  public user:User ={}
  constructor(private service: UsuariosService, public dialogRef: MatDialogRef<VerComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { 
  }

  ngOnInit(): void {
    this.service.getUser(this.data.id)
    .subscribe((res:any)=>{
      this.user = res.usuario!
  })}

  closeDialog(){
    this.dialogRef.close()
  }

}
