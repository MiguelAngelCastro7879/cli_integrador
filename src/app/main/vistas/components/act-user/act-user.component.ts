import { Component, Inject, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-act-user',
  templateUrl: './act-user.component.html',
  styleUrls: ['./act-user.component.css']
})
export class ActUserComponent implements OnInit {

  hide = true;
  actionBtn : string = "Save"
  form = this.fb.group({
    username:['', {
      validators: [Validators.required, Validators.minLength(5)],
    }],
    email: ['', {
      validators: [Validators.required, Validators.email],
    }],
    password:['',{
      validators:[Validators.required, Validators.minLength(8)],
    }]
    // roles_id:[4,{
    //   validators:[Validators.required],
    // }]
  })

  error=false
  constructor(private fb:FormBuilder, public dialogRef: MatDialogRef<ActUserComponent>,@Inject(MAT_DIALOG_DATA) public data:any, 
  private u:UsuariosService) { }

  ngOnInit(): void {
    if(this.data){
      this.actionBtn = "Update"
      this.form.controls['username'].setValue(this.data.username)
      this.form.controls['email'].setValue(this.data.email)
      this.form.controls['password'].setValue(this.data.password)
      // this.form.controls['roles_id'].setValue(this.data.roles_id)
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  closeDialog(){
    this.dialogRef.close()
  }

  updateU(){
    if(this.form.invalid){
      return;
    }
  
  this.u.update(this.data.id,this.form.value)
  .subscribe((response: any)=>{
    console.log(response);
    this.form.reset()
    setTimeout(() =>this.dialogRef.close(), 2000)
  },
  error=>{
    this.error = true
    alert(error.error.Fail)
  });
}
}
