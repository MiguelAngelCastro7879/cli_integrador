import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { sensor } from 'src/app/Models/sensores';
import { SensoresService } from 'src/app/shared/services/sensores.service';

@Component({
  selector: 'app-sen-status',
  templateUrl: './sen-status.component.html',
  styleUrls: ['./sen-status.component.css']
})
export class SenStatusComponent implements OnInit {
  public sen:sensor ={}
  error=false;
  constructor(private service: SensoresService, public dialogRef: MatDialogRef<SenStatusComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.service.get(this.data.id)
    .subscribe((res:any)=>{
      this.sen = res.sensor!
      console.log(res);
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
