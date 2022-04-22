import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { sensor } from 'src/app/Models/sensores';
import { SensoresService } from 'src/app/shared/services/sensores.service';

@Component({
  selector: 'app-actua-sens',
  templateUrl: './actua-sens.component.html',
  styleUrls: ['./actua-sens.component.css']
})
export class ActuaSensComponent implements OnInit {
  public sen:sensor ={}
  constructor(private service: SensoresService, public dialogRef: MatDialogRef<ActuaSensComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.service.get(this.data.id)
    .subscribe((res:any)=>{
      this.sen = res.sensor!
  })}

  closeDialog(){
    this.dialogRef.close()
  }
}
