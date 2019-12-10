import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'popupModal',
  templateUrl: './popupModal.component.html',
  styleUrls: ['./popupModal.component.css']
})
export class PopUpComponent implements OnInit {
  title: string;
  myForm: FormGroup;
  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<PopUpComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    // console.log(data);
    this.title = data.title;

    this.myForm = fb.group({description: ['', Validators.required],
                            category: ['', Validators.required],
                            yesNo:['',Validators.required]
    });

  }

  ngOnInit() {


  }
  save() {
    // this.closeDialog();
    this.dialogRef.close(this.myForm.value);
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}
