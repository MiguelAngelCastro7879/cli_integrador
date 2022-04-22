import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/Models/User';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {

  public us:User ={}
  error=false;
  constructor(private service: UsuariosService, public dialogRef: MatDialogRef<UserStatusComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.service.getUser(this.data.id)
    .subscribe((res:any)=>{
      this.us = res.usuario!
  })}

  closeDialog(){
    this.dialogRef.close()
  }

  status(){
  this.service.status(this.data.id)
  .subscribe((response: any)=>{
    if(this.data.status == 0){
      this.data.status = 1
      setTimeout(() =>this.dialogRef.close(), 200)
      alert("Status Activo")
    }else if(this.data.status == 1){
      this.data.status = 0
      alert("Status InActivo")
      setTimeout(() =>this.dialogRef.close(), 200)
    }
  },
  error=>{
    this.error = true
    alert(error.error.Fail)
  });
}
}
